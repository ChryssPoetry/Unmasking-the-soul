const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    churchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Church',
        required: true
    },
    soulScore: {
        type: Number,
        default: 0
    },
    spiritScore: {
        type: Number,
        default: 0
    },
    bodyScore: {
        type: Number,
        default: 0
    },
    lastQuizDate: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Member', memberSchema); 