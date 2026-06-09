import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Vlogify</h2>
            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link
                        to="/dashboard"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/post"
                        onClick={() => setMenuOpen(false)}
                    >
                        Create Vlog
                    </Link>
                </li>

                <li>
                    <button
                        onClick={handleLogout}
                        className="logout-btn"
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;