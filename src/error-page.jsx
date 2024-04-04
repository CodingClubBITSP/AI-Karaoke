import { Link, useRouteError } from "react-router-dom";

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
            <p className="italic text-gray-600 mb-2">
                {error.statusText || error.message}
            </p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go back to the home page
            </Link>
        </div>
    );
}
