const mongoose = require('mongoose');

const KitSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Kit', KitSchema);
