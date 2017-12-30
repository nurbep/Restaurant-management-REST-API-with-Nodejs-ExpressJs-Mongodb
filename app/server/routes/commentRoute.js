var express = require('express');
var router = express.Router();
var commentController = require("../controllers/Comment.server.controller");

//route to give a comment
router.post('/addComment',commentController.addComment);

//route to get all comments
router.get('/comments',commentController.getComments);