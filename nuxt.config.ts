// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/style.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XBG88CFGLV',
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XBG88CFGLV');
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: 'es',
        language: 'es-AR',
        name: 'Español',
        file: 'es.ts',
      },
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.ts',
      },
    ],
    baseUrl: 'https://martinponce.com.ar',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
