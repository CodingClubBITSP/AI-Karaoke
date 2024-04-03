/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "default-bg": "#242424",
                "default-green": "rgba(1, 154, 90, 1)",
                "prompt-bg": "#313131"
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans]
            },
            backgroundImage: {
                "bg-image": "url('./src/assets/bg-image.png')",
                "ai-karoke": "url('./src/assets/ai-karoke.png')"
            }
        }
    },
    plugins: []
};
