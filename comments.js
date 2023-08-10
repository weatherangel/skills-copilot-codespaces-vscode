// create nodejs web server for comments using the commentController using the express router to handle the routes for the comments api
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// get all comments
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
// delete comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;
