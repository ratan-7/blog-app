import React, { useState } from "react";
import { signUpUser } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await signUpUser({
                name,
                email,
                password,
            });

            console.log(response);

            alert("Account created successfully!");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Signup failed");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Create Account 🚀</h2>

                <form
                    className="signup-form"
                    onSubmit={handleSignup}
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Create Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="submit"
                        className="signup-btn"
                    >
                        Create Account
                    </button>
                </form>

                <div className="signup-footer">
                    Already have an account?{" "}
                    <Link to="/">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;