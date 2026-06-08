import React from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            {post.image && (
                <img
                    src={post.image}
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

                    <button className="read-more-btn">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;