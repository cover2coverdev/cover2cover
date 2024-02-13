// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxt/test-utils/module", 'nuxt-icon', '@unocss/nuxt'],
  eslint: {
    
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
});
