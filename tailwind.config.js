/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "default-bg": "#242424",
                "default-green": "rgba(1, 154, 90, 1)"
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: []
};
