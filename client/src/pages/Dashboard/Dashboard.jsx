import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostCard from "../../components/PostCard/PostCard";
import "./Dashboard.css";
import { getAllPosts } from "../../services/api";

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await getAllPosts();
            setPosts(response.data);
        } catch (error) {
            console.log(
                "Error fetching posts:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="dashboard">
            <Navbar />

            <div className="dashboard-header">
                <h1>
                    Welcome to <span>Vlogify</span>
                </h1>

                <p>
                    Explore stories, adventures and
                    creative content from creators around
                    the world.
                </p>
            </div>

            {loading ? (
                <div className="dashboard-message">
                    Loading Posts...
                </div>
            ) : posts.length === 0 ? (
                <div className="dashboard-message">
                    No Posts Found
                </div>
            ) : (
                <div className="posts-container">
                    {posts.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;