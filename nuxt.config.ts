// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/content', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    telegramBotToken: "",
    telegramChatId: "",
  },
  app: {
    head: {
      title: 'HoReCa Da — Сучасна ресторанна бухгалтерія',
      meta: [
        { name: 'description', content: 'Будуємо управлінський облік, який підлаштовується під ваш бізнес, щоб ви могли сфокусуватися на гостях, смаку та розвитку закладу.' }
      ]
    }
  },
  googleFonts: {
    families: {
      Nunito: [400, 700, 900], // 900 — для тих самих жирних заголовків
    },
    display: 'swap',
    download: true // Завантажує шрифт локально при збірці (краще для швидкості)
  },
  features: {
    inlineStyles: true
  }
});