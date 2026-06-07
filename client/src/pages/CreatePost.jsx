import React, { useState } from 'react'
import { createPost } from "../services/api.js"

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    const handleCreatePost = async (e) => {
        e.preventDefault();
        try {
            const response = await createPost({
                title,
                description,
                file
            })
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h2>create vlog</h2>
            <form onSubmit={handleCreatePost}>
                <input
                    type='text'
                    placeholder='enter title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type='text'
                    placeholder='enter description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type='file'
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                />

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default CreatePost