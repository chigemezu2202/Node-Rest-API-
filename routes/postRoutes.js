// initialize express  app
const express = require('express');
// intialize router 
const router = express.Router();
//require our post controllers
const postControllers = require('../controllers/postControllers')

// @Route GET && POST /Post/
// * posts *
router.route("/").get(postControllers.getAllPosts).post(postControllers.createNewPost);
// * Id * 
router.route("/:id").get(postControllers.getPostById)

module.exports = router;
