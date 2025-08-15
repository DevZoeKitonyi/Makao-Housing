import express from 'express';
import * as bookingController from '../controllers/booking.controller';
import { authenticate } from '../middlewares';

const router = express.Router();

// Booking routes
router.post('/', authenticate, bookingController.createBooking);
router.get('/my-bookings', authenticate, bookingController.getUserBookings);
router.patch('/:id/status', authenticate, bookingController.updateBookingStatus);

export default router;