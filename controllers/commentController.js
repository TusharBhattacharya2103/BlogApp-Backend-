// import models
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// business logic
exports.createComment = async (req, res) => {
    try {
        // fetch data from request body
        const { postId, user, body } = req.body;

        // create new comment
        const comment = new Comment({
            post: postId,
            user,
            body,
        });

        // save comment to database
        const savedComment = await comment.save();

        // find the post by id and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: savedComment._id } },
            { new: true }
        ).populate('comments');

        // send response
        res.json({
            post: updatedPost,
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
