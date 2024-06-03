// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-mongoose"],
  mongoose: {
    uri: 'mongodb://localhost:27017/pe-db',
    options: {},
    modelsDir: 'models',
    devtools: true,
  }
})