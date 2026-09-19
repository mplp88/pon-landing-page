<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },

  link: [
    {
      rel: 'icon',
      href: '/favicon.png',
    },
    ...(i18nHead.value.link || []),
  ],

  meta: [...(i18nHead.value.meta || [])],
}))

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),

  ogTitle: () => t('seo.ogTitle'),
  ogDescription: () => t('seo.ogDescription'),
  ogImage: 'https://martinponce.com.ar/preview.jpg',
  ogUrl: () => `https://martinponce.com.ar${route.path}`,
  ogType: 'website',
})
</script>
