import Navbar from "./components/navbar";
import "./styles/main.css";

const Layout = ({ children }) => {
    return (
        <main className="h-screen w-screen bg-[url('./src/assets/bg-image.png')] text-white overflow-hidden">
            <header className="sticky top-0 z-10 ">
                <Navbar />
            </header>
            {children}
        </main>
    );
};

export default Layout;
