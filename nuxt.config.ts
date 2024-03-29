import daisyui from "daisyui";
import tailwindTypography from '@tailwindcss/typography'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  runtimeConfig: {
    GOOGLE_BOOKS_API_KEY: process.env.GOOGLE_BOOKS_API_KEY
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxt/test-utils/module", "nuxt-icon", "@nuxtjs/tailwindcss", '@nuxtjs/color-mode'],
  colorMode: {
    dataValue: 'theme',
    preference: 'pastel',
    fallback: 'dark'
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
    config: {
      plugins: [tailwindTypography, daisyui],
      daisyui: {
        logs: false,
        themes: [
          "light",
          "dark",
          "cupcake",
          "bumblebee",
          "emerald",
          "corporate",
          "synthwave",
          "retro",
          "cyberpunk",
          "valentine",
          "halloween",
          "garden",
          "forest",
          "aqua",
          "lofi",
          "pastel",
          "fantasy",
          "wireframe",
          "black",
          "luxury",
          "dracula",
          "cmyk",
          "autumn",
          "business",
          "acid",
          "lemonade",
          "night",
          "coffee",
          "winter",
          "dim",
          "nord",
          "sunset",
        ],
      },
    },
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
});
