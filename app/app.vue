<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'canonical',
      href: 'https://martinponce.com.ar/',
    },
  ],

  meta: [
    {
      name: 'description',
      content:
        'Creación de páginas web para negocios con botón directo a WhatsApp. Ideal para locales y emprendimientos. Entrega rápida.',
    },
    {
      property: 'og:title',
      content: 'Páginas Web para Negocios con WhatsApp',
    },
    {
      property: 'og:description',
      content: 'Landing pages simples para vender más por WhatsApp.',
    },
    {
      property: 'og:image',
      content: 'https://martinponce.com.ar/preview.jpg',
    },
    {
      property: 'og:url',
      content: 'https://martinponce.com.ar/',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],

  title: 'Páginas Web para Negocios | Landing con WhatsApp',
})
</script>
