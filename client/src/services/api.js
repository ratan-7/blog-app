const BASE_URL = "http://localhost:3000/api"
import axios from "axios";

export const signUpUser = async (data) => {
    const res = await fetch(`${BASE_URL}/signup`,
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
        const res = await fetch(`${BASE_URL}/login`, {
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
    return axios.get("http://localhost:3000/api/posts");
};

export const createPost = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        res.status(200).json();
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}