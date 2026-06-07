const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file: {
        type: String
    },
    like: {
        performedBy: String,
    },
    comment: {
        body: String,
        date: Date
    },
    share: {
        performedBy: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const PostModel = model("Post", PostSchema);
module.exports = PostModel;