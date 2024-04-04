import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Layout from "./layout";
import ErrorPage from "./error-page";
import Chat from "./pages/chat";
import Karaoke from "./pages/karaoke";

<<<<<<< HEAD
const routes = [
    {
        path: "/",
        element: <Chat />
    },
    {
        path: "/karaoke",
        element: <Karaoke />
    }
];

const router = createBrowserRouter(
    routes.map(({ path, element }) => ({
        path,
        element: <Layout>{element}</Layout>,
        errorElement: <ErrorPage />
    }))
);

=======
>>>>>>> origin
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/karaoke" element={<Karaoke />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Layout>
        </Router>
    </React.StrictMode>
);
