import React from 'react'
import { useState } from 'react'
import { loginUser } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await loginUser({ email, password });
        console.log(res);
        if (res.accessToken) {
            localStorage.setItem("token", res.accessToken);
            //localStorage.setItem("role", res.user.role);
            localStorage.setItem("user", JSON.stringify(res.user));
            navigate("/dashboard")

        } else {
            alert(res.msg || "Login failed")
        }
    }
    return (
        <div>
            <h2>Login
            </h2>
            <form onSubmit={handleLogin}>
                <input
                    type='email'
                    placeholder='enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type='password'
                    placeholder='enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>login</button>
            </form>
        </div>
    )
}

export default Login