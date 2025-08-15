const Booking = require('../models/booking.model');
const Property = require('../models/property.model');
const { sendNotification } = require('./notification.controller');

exports.createBooking = async (req, res, next) => {
  try {
    const { propertyId, startDate, endDate, guests } = req.body;
    const userId = req.user.id;

    // Check property availability
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check for overlapping bookings
    const overlappingBooking = await Booking.findOne({
      propertyId,
      $or: [
        { startDate: { $lt: endDate }, endDate: { $gt: startDate } },
        { startDate: { $gte: startDate, $lt: endDate } },
        { endDate: { $gt: startDate, $lte: endDate } }
      ],
      status: { $in: ['confirmed', 'pending'] }
    });

    if (overlappingBooking) {
      return res.status(400).json({ message: 'Property not available for the selected dates' });
    }

    // Calculate total price
    const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * property.pricePerNight;

    const booking = new Booking({
      propertyId,
      userId,
      startDate,
      endDate,
      guests,
      totalPrice
    });

    await booking.save();

    // Send notification to property owner
    await sendNotification({
      userId: property.owner,
      message: `New booking request for ${property.title}`,
      type: 'booking_request',
      relatedId: booking._id
    });

    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

exports.getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate('propertyId', 'title images pricePerNight');
    res.json(bookings);
  } catch (error) {
    next(error);
  }
};

exports.updateBookingStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('propertyId', 'title owner');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Send notification to guest
    await sendNotification({
      userId: booking.userId,
      message: `Your booking for ${booking.propertyId.title} has been ${status}`,
      type: 'booking_update',
      relatedId: booking._id
    });

    res.json(booking);
  } catch (error) {
    next(error);
  }
};