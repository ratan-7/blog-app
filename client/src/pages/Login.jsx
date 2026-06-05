import React from 'react'
import { useState } from 'react'
import { loginUser } from '../services/api';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("email:", email, "password:", password);
        const response = await loginUser(data);
        if (response) {
            localStorage.setItem(response.token);
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