// create web server for comments using the commentController  


var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController.js');

// create a route for getting all comments
router.get('/', commentController.getComments);

// create a route for posting a comment
router.post('/', commentController.postComment);

// create a route for deleting a comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;