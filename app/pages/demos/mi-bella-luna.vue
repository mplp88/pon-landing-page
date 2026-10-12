<script setup lang="ts">
import MiBellaLunaDemo from '~/components/demos/MiBellaLunaDemo.vue'
import DemoBackButton from '~/components/DemoBackButton.vue'

useSeoMeta({
  title: 'Demo Landing Page | Mi Bella Luna',
  description: 'Ejemplo de una Landing Page para un estudio de danza.',
})

definePageMeta({
  layout: 'demo',
})
</script>

<template>
  <DemoBackButton />
  <MiBellaLunaDemo />
</template>
