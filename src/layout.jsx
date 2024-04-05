import "./styles/main.css";
import Navbar from "./components/navbar";

const Layout = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-[url('./src/assets/bg-image.png')] text-white overflow-x-hidden">
            <header className="sticky top-0 z-10">
                <Navbar />
            </header>
            <main className="w-full">{children}</main>
        </div>
    );
};

export default Layout;
