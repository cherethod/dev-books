// tailwind.config.mjs
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            // Aquí puedes agregar configuraciones personalizadas de Tailwind CSS
        },
    },
    plugins: [
        typography, // <– Añade el plugin aquí
    ],
}