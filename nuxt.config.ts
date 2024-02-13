// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/reset.css', '~/assets/css/main.css'],
  nitro: {
    preset: 'vercel'
  },
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module"],
  build: {
    transpile: ["trpc-nuxt"],
  },
});
