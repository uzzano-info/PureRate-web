import { defineConfig } from 'vite'

export default defineConfig({
    // Serve the root of the project as static files
    root: '.',
    build: {
        outDir: 'dist',
        // Copy the DMG if present
        copyPublicDir: true,
    },
    server: {
        port: 3000,
        open: true,
    },
    preview: {
        port: 4173,
    },
})
