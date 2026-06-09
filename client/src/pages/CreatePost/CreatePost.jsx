import React, { useState } from "react";
import { createPost } from "../../services/api";
import "./CreatePost.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [author, setAuthor] = useState("");

    const handleCreatePost = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("author", author);
        formData.append("file", file);

        try {
            const response = await createPost(formData);
            console.log(response);

            setTitle("");
            setDescription("");
            setAuthor("");
            setFile(null);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="create-post-container">
            <div className="create-post-card">
                <h2>Create New Vlog</h2>

                <form
                    className="create-post-form"
                    onSubmit={handleCreatePost}
                >
                    <input
                        type="text"
                        placeholder="Vlog Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Write your vlog description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <div className="file-upload">
                        <label htmlFor="fileInput" className="custom-file-upload">
                            📷 Upload Thumbnail
                        </label>

                        <input
                            id="fileInput"
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />

                        {file && (
                            <p className="file-name">
                                {file.name}
                            </p>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Author Name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Publish Vlog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;