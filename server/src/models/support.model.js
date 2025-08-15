const mongoose = require('mongoose');
const supportSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, { timestamps: true });
module.exports = mongoose.model('Support', supportSchema);