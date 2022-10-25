// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
    generate: {
        fallback: 'true'
    }
})
