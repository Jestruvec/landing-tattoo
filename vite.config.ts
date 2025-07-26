import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/landing-tattoo/",
  plugins: [tailwindcss()],
});
