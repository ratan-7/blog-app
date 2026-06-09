import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            {post.file && (
                <img
                    src={`${API_URL}/uploads/${post.file}`}
                    alt={post.title}
                    className="post-image"
                />
            )}

            <div className="post-content">
                <h2>{post.title}</h2>

                <p className="post-description">
                    {post.description.length > 120
                        ? post.description.slice(0, 120) + "..."
                        : post.description}
                </p>

                <div className="post-footer">
                    <span>✍️ {post.author}</span>

                    <Link to={`/post/${post._id}`}>
                        <button className="read-more-btn">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;