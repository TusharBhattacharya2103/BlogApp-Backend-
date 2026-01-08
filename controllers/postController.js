const Post = require('../models/postModel'); 

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const newPost = new Post({ title, body });
        const savedPost = await newPost.save();

        res.status(201).json({
            success: true,
            post: savedPost,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};

exports.getPost = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            success: true,
            posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};