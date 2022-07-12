const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        marks: { type: Number },
        attempted: { type: Boolean, default: false },
        attempted: [{ type: Object }]
    }
)

module.exports = mongoose.model('User', schema);