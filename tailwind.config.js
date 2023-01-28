const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Raleway","Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#0075f2",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
