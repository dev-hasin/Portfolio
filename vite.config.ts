import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ["hasinkiyani.onrender.com"],
  },
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "styled-components"],
  },
});
