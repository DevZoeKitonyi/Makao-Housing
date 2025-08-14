import express from 'express';
import * as notificationController from '../controllers/notification.controller';
import { authenticate } from '../middlewares';

const router = express.Router();

// Notification routes
router.get('/', authenticate, notificationController.getUserNotifications);
router.post('/mark-read', authenticate, notificationController.markAsRead);

export default router;