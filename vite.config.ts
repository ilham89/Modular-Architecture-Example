import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": `${path.resolve(__dirname, "./src/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@constants": `${path.resolve(__dirname, "./src/app/constants/")}`,
      "@core": `${path.resolve(__dirname, "./src/core/")}`,
      "@locales": `${path.resolve(__dirname, "./src/locales/")}`,
      "@env": `${path.resolve(__dirname, "./src/env/")}`,
      "@hooks": `${path.resolve(__dirname, "./src/app/hooks/")}`,
      "@modules": `${path.resolve(__dirname, "./src/app/modules/")}`,
      "@store": `${path.resolve(__dirname, "./src/app/store/")}`,
      "@layouts": `${path.resolve(__dirname, "./src/app/layouts/")}`,
      "@services": `${path.resolve(__dirname, "./src/app/services/")}`,
      "@shared": `${path.resolve(__dirname, "./src/shared/")}`,
    },
  },
});
