import {defineConfig} from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    output: "hybrid",
    integrations: [astroI18next(), tailwind(), react()],
    vite: {
        ssr: {
            noExternal: ["react-icons"]
        }
    }
});