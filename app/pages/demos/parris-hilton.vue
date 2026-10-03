<script setup lang="ts">
import ParrisHiltonDemo from '~/components/demos/ParrisHiltonDemo.vue'
import DemoBackButton from '~/components/DemoBackButton.vue'

useSeoMeta({
  title: 'Demo Landing Page | Parris Hilton',
  description: 'Ejemplo de una Landing Page para una parrilla.',
})

definePageMeta({
  layout: 'demo',
})
</script>

<template>
  <DemoBackButton />
  <ParrisHiltonDemo />
</template>
