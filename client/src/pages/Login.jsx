import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");


    const handleLogin = (e) => {
        e.preventDefault();
        console.log("email:", email, "password:", password);
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