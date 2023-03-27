import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path, { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
