// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor code into a separate chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }
          // Optionally, split large libraries into their own chunks
          if (id.includes("three")) {
            return "three";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase the chunk size limit if needed
  },
});
