import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel.default({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        svelte({})
    ],
});
