// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

