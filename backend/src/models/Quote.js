const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    serviceDetails: { type: String, required: true },
    quantity: { type: Number },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', QuoteSchema);
