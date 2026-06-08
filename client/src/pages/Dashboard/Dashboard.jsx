import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PostCard from '../../components/PostCard/PostCard';
import axios from 'axios';
import "./Dashboard.css";
import { getAllPosts } from "../../services/api";
const response = await getAllPosts();

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/posts"
            );

            setPosts(response.data);
        } catch (error) {
            console.log("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="posts-container">
                {loading ? (
                    <h2>Loading...</h2>
                ) : posts.length === 0 ? (
                    <h2>No Posts Found</h2>
                ) : (
                    posts.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;