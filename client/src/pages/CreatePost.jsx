import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    return (
        <div>
            <h2>create vlog</h2>
            <form>
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
            </form>
        </div>
    )
}

export default CreatePost