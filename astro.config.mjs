import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: "hybrid",
  integrations: [
    astroI18next(),
    tailwind(),
    react(),
    mdx(),
    astroImageTools,
    sitemap({
      i18n: {
        defaultLocale: "pl",
        locales: {
          pl: "pl-PL",
          en: "en-US",
        },
      },
    }),
    robotsTxt(),
  ],
  site: "https://ekrzeptowski.pl",
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
