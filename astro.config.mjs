// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://chimmytee.github.io',
    base: 'hardly-normal',
    vite: {
        assetsInclude: ['**/*.xlsx'],
        plugins: [tailwindcss()],
    },
    server: {
        host: true,
        port: 3000,
    },
});
