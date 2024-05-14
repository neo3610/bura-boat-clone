import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@features": "/src/features",
      "@pages": "/src/pages",
      "@enums": "/src/enums",
      "@store": "/src/store",
    },
  },
});
