import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../assets/store/Auth";
import "./Navbar.css";


export const Navbar = () => {

    const { isLoggedIn } = useAuth();

    return (
        <header>
            <div className="container">
                <div className="logo-brand">
                    <img src="/images/logo.png" alt="Logo" />
                    <NavLink to="/">Tech Genius</NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeclassname="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeclassname="active">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" activeclassname="active">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeclassname="active">
                                Contact
                            </NavLink>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout" activeclassname="active">
                                    Logout
                                </NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/register" activeclassname="active">
                                        Register
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" activeclassname="active">
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
