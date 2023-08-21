import {defineConfig} from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    output: "hybrid",
    integrations: [astroI18next(), tailwind(), react(), mdx()],
    site: "https://ekrzeptowski.pl",
    vite: {
        ssr: {
            noExternal: ["react-icons"]
        }
    }
});