const express = require('express');
const router = express.Router();

//Importing controllers
const { dummyLink, likePost, unlikePost } = require('../controllers/LikeController');
const { createComment } = require('../controllers/CommentController');
const { createPost, getPost } = require('../controllers/PostController');

router.get('/dummy-like', dummyLink);
router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.get('/posts', getPost);
router.post('/posts/like', likePost);
router.post('/posts/unlike', unlikePost);

module.exports = router;
