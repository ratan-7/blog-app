const express = require('express');
const router = express.Router();
const { getAllPost, getPostById, createPost, deletePost, updatePost } = require("../controllers/postController");
const upload = require("../middlewares/upload");

router.get('/posts', getAllPost);
router.get("/posts/:id", getPostById);
router.post(
    "/posts",
    upload.single("file"),
    createPost
);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id", updatePost);

module.exports = router;