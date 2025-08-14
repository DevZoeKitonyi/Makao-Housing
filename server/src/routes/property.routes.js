const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.middleware');
const verifyToken = require('../middleware/auth.middleware');

const {
    createProperty,
    getAllProperties,
    searchProperties,
} = require('../controllers/property.controller');

router.post('./', verifyToken, upload.single('image'), async (req, res) => {
    try {
        const { title, location, price, houseType, description } = req.body;

        const property = new Property({
            title, 
            location, 
            price, 
            houseType, 
            description,
            image: req.file ? `/uploads/${req.file.filename}` : null
        });

        await property.save();
        res.status(201).json(property);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', createProperty);
router.get('/', getAllProperties);
router.get('/search', searchProperties);

module.exports = router;
