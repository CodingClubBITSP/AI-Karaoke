import { Link, useLocation, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const location = useLocation();

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
                {error.message ?? `No route found for ${location.pathname}`}
            </p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go back to the home page
            </Link>
        </div>
    );
};

export default Error;
