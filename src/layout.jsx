import Navbar from "./components/navbar";
import "./main.css";

const Layout = ({ children }) => {
    return (
        <main className="h-screen w-screen bg-default-bg text-white overflow-hidden">
            <header className="sticky top-0 z-10">
                <Navbar />
            </header>
            {children}
        </main>
    );
};

export default Layout;
