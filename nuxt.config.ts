// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/content', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    telegramBotToken: "",
    telegramChatId: "",
    studio: {
      auth: {
        github: {
          clientId: "",
          clientSecret: ""
        }
      }
    }
  },
  app: {
    head: {
      title: 'HoReCa Da — Сучасна ресторанна бухгалтерія',
      meta: [
        { name: 'description', content: 'Будуємо управлінський облік, який підлаштовується під ваш бізнес, щоб ви могли сфокусуватися на гостях, смаку та розвитку закладу.' }
      ]
    }
  },
studio: {
    repository: {
      provider: 'github',
      owner: 'VlasiukOleg',
      repo: 'da-horeca',
      branch: 'main'
    },
    // Додай цей блок автентифікації прямо у файл:
    auth: {
      github: {
        clientId: process.env.NUXT_STUDIO_AUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.NUXT_STUDIO_AUTH_GITHUB_CLIENT_SECRET
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
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