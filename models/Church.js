const mongoose = require('mongoose');

const churchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    adminName: {
        type: String,
        required: true
    },
    adminEmail: {
        type: String,
        required: true,
        unique: true
    },
    adminPassword: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Church', churchSchema); 