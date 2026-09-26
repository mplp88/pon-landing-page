<script setup lang="ts">
import RestaurantLanding from '~/components/demos/RestaurantLanding.vue'
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
  <RestaurantLanding />
</template>
