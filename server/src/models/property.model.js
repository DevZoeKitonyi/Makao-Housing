const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: String,
    location: String,
    price: Number,
    houseType: String,
    image: String,
    description: String,
}, { timeStamps: true });

module.exports = mongoose.model('Property', propertySchema);
