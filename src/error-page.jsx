import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id="error-page"
            className="min-h-screen flex flex-col justify-center items-center"
        >
            <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
            <p className="text-lg text-gray-800 mb-4">
                Sorry, an unexpected error has occurred.
            </p>
            <p className="italic text-gray-600">
                {error.statusText || error.message}
            </p>
        </div>
    );
}
