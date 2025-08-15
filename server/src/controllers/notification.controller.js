const Notification = require('../models/notification.model');

exports.sendNotification = async ({ userId, message, type, relatedId }) => {
  const notification = new Notification({
    userId,
    message,
    type,
    relatedId
  });
  await notification.save();
  
  // Here you would add real-time notification logic (Socket.io, Firebase, etc.)
  return notification;
};

exports.getUserNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(50);
    res.json(notifications);
  } catch (error) {
    next(error);
  }
};

exports.markAsRead = async (req, res, next) => {
  try {
    await Notification.updateMany(
      { userId: req.user.id, _id: { $in: req.body.ids } },
      { $set: { isRead: true } }
    );
    res.json({ message: 'Notifications marked as read' });
  } catch (error) {
    next(error);
  }
};