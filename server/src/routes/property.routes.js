const express = require('express');
const router = express.Router();
const {
    createProperty,
    getAllProperties,
    searchProperties,
} = require('../controllers/property.controller');

router.post('/', createProperty);
router.get('/', getAllProperties);
router.get('/search', searchProperties);

module.exports = router;
