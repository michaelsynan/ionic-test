// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  ssr: false,
  modules: ["@nuxtjs/ionic"],
  css: ["@/theme/variables.css"],
  ionic: {
    integrations: { },
    css: {
      utilities: true,
    },
  },
})
