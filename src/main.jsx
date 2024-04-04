import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Layout from "./layout";
import Home from "./pages/home";
import ErrorPage from "./error-page";
import Chat from "./pages/chat";
import Karaoke from "./pages/karaoke";

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
