const Property = require('../models/property.model');

// Create property
exports.CreateProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        await property.save();
        res.status(201).json(property);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All properties
exports.getAllProperties = async (req ,res) => {
    try {
        const properties = await Property.find();
        res,json(properties);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Search/filter
exports.searchProperties = async (req, res) => {
    const { location, houseType, price } = req.query;

    let query = {}
    if (location) query.location = { $regex: location,
        $options: 'i'};
    if (houseType) query.houseType = houseType;
    if (price) query.price = { $lte: parseInt(price) };

    try {
        const results = await Property.find(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
