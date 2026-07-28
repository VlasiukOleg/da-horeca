// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@nuxt/content", "nuxt-studio"],
  css: ["~/assets/css/main.css"],

  // Явне прокидання змінних для обходу бага модуля
  runtimeConfig: {
    telegramBotToken: "",
    telegramChatId: "",
  },
  studio: {
    repository: {
      provider: "github",
      owner: "VlasiukOleg",
      repo: "da-horeca",
      branch: "main",
    },
  },
  app: {
    head: {
      title: "HoReCa Da — Сучасна ресторанна бухгалтерія",
      meta: [
        {
          name: "description",
          content:
            "Будуємо управлінський облік, який підлаштовується під ваш бізнес, щоб ви могли сфокусуватися на гостях, смаку та розвитку закладу.",
        },
      ],
    },
  },

  // nitro: {
  //   prerender: {
  //     routes: ["/"],
  //     crawlLinks: true,
  //   },
  // },

  googleFonts: {
    families: {
      Nunito: [400, 700, 900],
    },
    display: "swap",
    download: true,
  },

  features: {
    inlineStyles: true,
  },
});
