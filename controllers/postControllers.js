const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
    try {
        const [post, _] = new Post();

        post = await post.findAll();

        res.status(200).json({
            count : post.length,
            post : post
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}


exports.createNewPost = async (req, res, next) => {
    try {

        let { title, body } = req.body;

        let post = new Post(title, body);

        post = await post.save();

        res.status(201).json({ message: "Post Created" })

    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.getPostById = async (req, res, next) => {
    try {

        let postId = req.params.id;

        let [post, _] = await Post.findById(postId)

        res.status(200).json({ post: post[0] })
    } catch (error) {
        console.log(error);
        next(error);
    }
}
