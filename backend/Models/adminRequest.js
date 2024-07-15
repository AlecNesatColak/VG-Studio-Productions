const mongoose = require('mongoose');

const adminRequestSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, default: 'Pending' }  // Pending, Approved, Denied
});

module.exports = mongoose.model('AdminRequest', adminRequestSchema);
