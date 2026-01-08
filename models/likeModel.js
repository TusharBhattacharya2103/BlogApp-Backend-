const mongoose = require('mongoose');

// Like Schema
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Like', likeSchema);
