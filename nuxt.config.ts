import daisyui from 'daisyui'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxt/test-utils/module", "nuxt-icon", "@nuxtjs/tailwindcss"],
  eslint: {},
  tailwindcss: {
    config: {
      plugins: [daisyui],
    },
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
});
