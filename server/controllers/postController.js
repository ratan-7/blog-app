const Post = require("../models/Post.js")

//all post access
const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        if (posts.length == 0) {
            return res.status(400).json({
                message: "not found any post"
            });
        }
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(
            {
                message: "post fetching problem", err: err.message
            });
    }
}

//get post by id
const getPostById = async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({
                message: "post not found"
            });
        }
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({
            message: "post fetching problem"
        });
    }
}

//create post
const createPost = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            file: req.file
                ? req.file.filename
                : null
        });

        const savedPost = await newPost.save();

        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

//delete post
const deletePost = async (req, res) => {
    try {
        const postId = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "post delete successfully!"
        })
    } catch (err) {
        res.status(500).json({
            message: "post not find", err: err.message
        })
    }
}

//update post
const updatePost = async (req, res) => {
    try {
        const postId = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            message: "post update successfully!", post: req.body
        })
    } catch (err) {
        res.status(500).json({
            message: "post not find"
        })
    }
}

module.exports = { getAllPost, getPostById, createPost, deletePost, updatePost };