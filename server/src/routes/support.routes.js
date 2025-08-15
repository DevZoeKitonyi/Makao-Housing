const express = require('express');
const router = express.Router();
const Support = require('../models/support.model');
// Public - submit contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const supportMessage = new Support({ name, email, message });
        await supportMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Admin - view messages
const verifyToken = require('../middleware/auth.middleware');
const verifyAdmin = require('../middleware/admin.middleware');
router.get('/', verifyToken, verifyAdmin, async (req, res) => {
    const messages = await Support.find();
    res.json(messages);
});
module.exports = router;