// file content for tailwind.config.js
export const tailwindConfig: string =
    `/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}`;

// file content for index.css
export const indexCssTailwind: string =
    `@tailwind base;
@tailwind components;
@tailwind utilities;`;


// file content for tailwind.config.js for base project
export const tailwindBaseConfig: string =
    `/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}`;