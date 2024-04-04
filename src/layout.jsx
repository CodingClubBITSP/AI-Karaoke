import Navbar from "./components/navbar";
<<<<<<< HEAD
import "./main.css";
import { GlobalContext } from "./Contexts/GlobalContext";
import React, { useState } from "react";
=======
import "./styles/main.css";

>>>>>>> origin
const Layout = ({ children }) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(["", "", ""]);
    const [songs, setSongs] = useState([]);
    const [isValid, setIsValid] = useState(false);
    return (
<<<<<<< HEAD
        <GlobalContext.Provider
            value={{
                selectedCheckbox,
                setSelectedCheckbox,
                songs,
                setSongs,
                isValid,
                setIsValid
            }}
        >
            <main className="h-screen w-screen bg-[url('./src/assets/bg-image.png')] text-white overflow-hidden">
                <header className="sticky top-0 z-10 ">
                    <Navbar />
                </header>
                {children}
            </main>
        </GlobalContext.Provider>
=======
        <div className="h-screen w-screen bg-[url('./src/assets/bg-image.png')] text-white overflow-hidden">
            <header className="sticky top-0 z-10 ">
                <Navbar />
            </header>
            <main>{children}</main>
        </div>
>>>>>>> origin
    );
};

export default Layout;
