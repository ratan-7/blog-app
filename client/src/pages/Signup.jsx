import React from 'react'
import { useState } from 'react'
import { signUpUser } from '../services/api';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await signUpUser({
                name,
                email,
                password
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                    type='text'
                    placeholder='enter full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type='email'
                    placeholder='enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type='password'
                    placeholder='enter new password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type='submit'>signup</button>
            </form>
        </div>
    )
}

export default Signup