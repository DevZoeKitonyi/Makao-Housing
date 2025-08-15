const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware');
const verifyAdmin = require('../middleware/admin.middleware');
const Property = require('../models/property.model');
// Get all properties
router.get('/properties', verifyToken, verifyAdmin, async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});
// Approve a property
router.put('/properties/:id/approve', verifyToken, verifyAdmin, async (req, res) => {
    const property = await Property.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    res.json(property);
});
// Delete property
router.delete('/properties/:id', verifyToken, verifyAdmin, async (req, res) => {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: 'Property deleted' });
});
module.exports = router;