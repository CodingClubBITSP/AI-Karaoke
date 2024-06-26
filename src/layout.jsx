import "./styles/main.css";
import Navbar from "./components/navbar";
import bgImage from "./assets/bg-image.png";

const Layout = ({ children }) => {
    const backgroundStyle = {
        backgroundImage: `url(${bgImage})`,
        color: "white"
    };

    return (
        <div
            className="h-screen w-screen text-white overflow-x-hidden"
            style={backgroundStyle}
        >
            <header className="sticky top-0 z-10">
                <Navbar />
            </header>
            <main className="w-full">{children}</main>
        </div>
    );
};

export default Layout;
