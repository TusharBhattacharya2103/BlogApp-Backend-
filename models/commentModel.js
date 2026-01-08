//Import Mongoose
const mongoose = require('mongoose');


// Route Handeler Functions
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId, // Reference to the Post model id
        ref: 'Post', // refers to Post model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});




//Export
module.exports = mongoose.model('Comment', commentSchema);