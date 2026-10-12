<script setup lang="ts">
import PetShopLanding from '~/components/demos/PetShopLanding.vue'
import DemoBackButton from '~/components/DemoBackButton.vue'

useSeoMeta({
  title: 'Demo Landing Page | Pet Shop',
  description: 'Ejemplo de una Landing Page para un pet shop.',
})

definePageMeta({
  layout: 'demo',
})
</script>

<template>
  <DemoBackButton />
  <PetShopLanding />
</template>
