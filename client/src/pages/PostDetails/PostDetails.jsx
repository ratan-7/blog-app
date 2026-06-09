import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../services/api";
import "./PostDetails.css";
import { API_URL } from "../../config";

const PostDetails = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await getPostById(id);
                setPost(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return (
            <div className="loading-container">
                Loading...
            </div>
        );
    }

    return (
        <div className="post-details-page">
            <div className="post-details-container">
                <img
                    src={`${API_URL}/api/uploads/${post.file}`}
                    alt={post.title}
                    className="post-details-image"
                />

                <div className="post-details-content">
                    <h1 className="post-details-title">
                        {post.title}
                    </h1>

                    <div className="post-details-author">
                        ✍️ {post.author}
                    </div>

                    <p className="post-details-description">
                        {post.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;