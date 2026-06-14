import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { execSync } from "child_process";
import path from "path";
import { defineConfig } from "vite";


const plugins = [react(), tailwindcss(), jsxLocPlugin()];

/**
 * "Last updated" date, frozen at build time. Since deploys are triggered by a
 * push, the date of the last git commit is the moment the content last changed.
 * Falls back to the build date if git is unavailable (e.g. a tarball checkout).
 */
function resolveLastUpdated(): string {
  try {
    const iso = execSync("git log -1 --format=%cI", {
      encoding: "utf8",
    }).trim();
    return iso.slice(0, 10); // YYYY-MM-DD
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

export default defineConfig({
  plugins,
  define: {
    __LAST_UPDATED__: JSON.stringify(resolveLastUpdated()),
  },
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
