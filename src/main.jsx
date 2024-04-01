import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import Layout from "./layout";
import Home from "./pages/home";
import ErrorPage from "./error-page";
import Features from "./pages/features";
import About from "./pages/about";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/features",
        element: <Features />
    },
    {
        path: "/about",
        element: <About />
    }
];

const router = createBrowserRouter(
    routes.map(({ path, element }) => ({
        path,
        element: <Layout>{element}</Layout>,
        errorElement: <ErrorPage />
    }))
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
