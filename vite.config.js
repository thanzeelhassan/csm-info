import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Same folder CRA used, so the Netlify publish directory doesn't change.
    outDir: "build",
  },
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
