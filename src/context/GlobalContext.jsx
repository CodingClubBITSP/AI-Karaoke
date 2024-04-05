import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const useGlobal = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobal must be used within a GlobalProvider");
    }

    return context;
};

const GlobalProvider = ({ children }) => {
    const [selection, setSelection] = useState(["", "", ""]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const selectionFromStorage = localStorage.getItem("selection");
        const songsFromStorage = localStorage.getItem("songs");

        if (selectionFromStorage) {
            try {
                setSelection(JSON.parse(selectionFromStorage));
            } catch (error) {
                console.error(
                    "Error parsing selection from local storage:",
                    error
                );
            }
        }

        if (songsFromStorage) {
            try {
                setSongs(JSON.parse(songsFromStorage));
            } catch (error) {
                console.error("Error parsing songs from local storage:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (!selection.every(value => value !== "")) {
            return;
        }

        try {
            localStorage.setItem("selection", JSON.stringify(selection));
        } catch (error) {
            console.error("Error saving selection to local storage:", error);
        }
    }, [selection]);

    useEffect(() => {
        if (songs.length === 0) {
            return;
        }

        try {
            localStorage.setItem("songs", JSON.stringify(songs));
        } catch (error) {
            console.error("Error saving songs to local storage:", error);
        }
    }, [songs]);

    const contextValue = {
        selection,
        setSelection,
        songs,
        setSongs
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, useGlobal, GlobalProvider };
