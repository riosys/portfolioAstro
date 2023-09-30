/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            rios: ["VT323", "monospace"],
        },
        extend: {
            backgroundImage: (theme) => ({
                codeando: "url('/codeando.jfif')",
            }),
        },
    },
    plugins: [],
};
