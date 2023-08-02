import {defineConfig} from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    output: "hybrid",
    integrations: [astroI18next(), tailwind()]
});