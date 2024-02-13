// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module", 'nuxt-icon', '@unocss/nuxt'],
  build: {
    transpile: ["trpc-nuxt"],
  },
});
