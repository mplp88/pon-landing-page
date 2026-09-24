<!-- pages/demos/barber-shop.vue -->

<script setup lang="ts">
import ProfessionalLanding from '~/components/demos/ProfessionalLanding.vue'
import DemoBackButton from '~/components/DemoBackButton.vue'

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
  <ProfessionalLanding />
</template>
