import React from "react";
import { Link, useLocation } from "react-router-dom";
import clubLogo from "../assets/logo.png";

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "" },
        { name: "Chat", path: "chat" },
        { name: "Songs", path: "songs" }
    ];

    const { pathname } = useLocation();

    return (
        <nav className="flex justify-between items-center p-4 bg-default-bg text-white">
            <div className="flex items-center">
                <img src={clubLogo} alt="Club Logo" className="w-12 h-12" />
                <span className="text-2xl font-bold ml-2">Coding Club</span>
            </div>
            <ul className="flex space-x-4">
                {navItems.map(item => (
                    <li
                        key={item.name}
                        className={`${pathname === `/${item.path}` ? "text-default-green" : ""} hover:text-default-green transition-colors duration-300`}
                    >
                        <Link to={`/${item.path}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
