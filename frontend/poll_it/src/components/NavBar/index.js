import React from "react";
import "../../style.css"
import Login from "../Login"
import Register from "../Register";

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Poll IT</a>
            <ul>
                <li>
                    {/* <a href="/login">Login</a> */}
                    <Login />
                </li>
                <li>
                    {/* <a href="/register">Register</a> */}
                    <Register />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;