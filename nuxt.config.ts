// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-WRZWF7DD",
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Loden Gendun | Software Engineer | Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Discover  Loden Gendun's software engineering portfolio showcasing diverse work experience, innovative projects, and professional expertise. Explore past projects and learn more about the engineer behind the code.",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/scss/_colors.scss" as *;@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxt/image", "@nuxt/scripts"],
});
