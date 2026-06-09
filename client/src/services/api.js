import { API_URL } from "../config";

import axios from "axios";

export const signUpUser = async (data) => {
    const res = await fetch(`${API_URL}/api/signup`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
    return res.json();
    console.log(data);
}


export const loginUser = async (data) => {
    try {
        const res = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return res.json();
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}



export const getAllPosts = () => {
    return axios.get(`${API_URL}/api/posts`);
};

export const createPost = async (formData) => {
    const res = await fetch(`${API_URL}/api/posts`, {
        method: "POST",
        body: formData
    });

    return await res.json();
};

export const getPostById = (id) => {
    return axios.get(
        `${API_URL}/api/posts/${id}`
    );
};