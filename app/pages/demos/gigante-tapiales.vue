<script setup lang="ts">
import GiganteTapialesLanding from '~/components/demos/GiganteTapialesLanding.vue'
import DemoBackButton from '~/components/DemoBackButton.vue'

useSeoMeta({
  title: 'Demo Landing Page | El Gigante de Tapiales',
  description: 'Ejemplo de una Landing Page para una Pizzería El Gigante de Tapiales.',
})

definePageMeta({
  layout: 'demo',
})
</script>

<template>
  <DemoBackButton />
  <GiganteTapialesLanding />
</template>
