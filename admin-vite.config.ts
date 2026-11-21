import { defineConfig } from "vite";
import { miaodaDevPlugin } from "miaoda-sc-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    miaodaDevPlugin(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
    {
      name: 'admin-html-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/admin.html';
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5175
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'admin.html'),
      },
    },
  },
});