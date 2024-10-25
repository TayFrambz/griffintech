const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    drivers: { type: String, required: false },
    receipt: { type: String, required: false },
    co2Emissions: { type: String, required: false },
});

module.exports = mongoose.model('Admin', AdminSchema);
