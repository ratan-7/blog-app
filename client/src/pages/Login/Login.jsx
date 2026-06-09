import React, { useState } from "react";
import { loginUser } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await loginUser({ email, password });

        if (res.accessToken) {
            localStorage.setItem("token", res.accessToken);
            localStorage.setItem("user", JSON.stringify(res.user));

            navigate("/dashboard");
        } else {
            alert(res.msg || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome Back 👋</h2>

                <form
                    className="login-form"
                    onSubmit={handleLogin}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>
                </form>

                <div className="login-footer">
                    Don't have an account?{" "}
                    <Link to="/signup">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;