import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>VlogHub</h2>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/post">Create Vlog</Link>
                </li>

                <li>
                    <Link to="/profile">Profile</Link>
                </li>

                <li>
                    <button className="logout-btn">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;