const express = require('express');
const router = express.Router();
const { getAllPost, getPostById, createPost, deletePost, updatePost } = require("../controllers/postController");


router.get('/posts', getAllPost);
router.get("/posts/:id", getPostById);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id", updatePost);

module.exports = router;