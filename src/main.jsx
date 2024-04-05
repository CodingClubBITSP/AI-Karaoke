import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
import Layout from "./layout";
import Error from "./error";
import Chat from "./pages/chat";
import Karaoke from "./pages/karaoke";
import { GlobalProvider } from "./context/GlobalContext";

const rootElement = document.getElementById("root");

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
    routes.map(route => ({
        ...route,
        element: <Layout>{route.element}</Layout>,
        errorElement: <Error />
    }))
);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <GlobalProvider>
            <RouterProvider router={router} />
        </GlobalProvider>
    </React.StrictMode>
);
