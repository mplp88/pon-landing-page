<script setup lang="ts">
import NailLashLanding from '~/components/demos/NailLashLanding.vue'

useSeoMeta({
  title: 'Demo Landing Page | Nail & Lash Studio',
  description: 'Ejemplo de una Landing Page para un estudio de Nails & Lash.',
})

definePageMeta({
  layout: 'demo',
})
</script>

<template>
  <DemoBackButton />
  <NailLashLanding />
</template>
