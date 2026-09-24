<!-- pages/demos/barber-shop.vue -->

<script setup lang="ts">
import BarberLanding from '~/components/demos/BarberLanding.vue'

useSeoMeta({
  title: 'Demo Landing Page | Barbería',
  description: 'Ejemplo de una Landing Page para una barbería.',
})

definePageMeta({
  layout: 'demo',
})
</script>

<template>
  <DemoBackButton />
  <BarberLanding />
</template>
