import { Link, useLocation } from "react-router-dom";
import clubLogo from "../assets/logo.png";

const Navbar = () => {
    const navItems = [
        { name: "Chat", path: "" },
        { name: "Karaoke", path: "karaoke" }
    ];

    const { pathname } = useLocation();

    const isActive = path => {
        return pathname === `/${path}`;
    };

    return (
        <nav className="text-white flex justify-between items-center p-4">
            <Link to="/" className="flex items-center">
                <img src={clubLogo} alt="Club Logo" className="w-12 h-12" />
                <span className="text-2xl font-bold ml-2">Coding Club</span>
            </Link>
            <ul className="flex space-x-4">
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        path={item.path}
                        name={item.name}
                        isActive={isActive(item.path)}
                    />
                ))}
            </ul>
        </nav>
    );
};

const NavItem = ({ path, name, isActive }) => {
    return (
        <li
            className={`${isActive ? "text-default-green" : ""} hover:text-default-green transition-colors duration-300`}
        >
            <Link to={`/${path}`}>{name}</Link>
        </li>
    );
};

export default Navbar;
