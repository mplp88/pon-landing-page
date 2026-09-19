<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UnderConstruction
    :title="t('services.cards.landing.title')"
    :description="t('underConstruction.descriptions.landing')"
  ></UnderConstruction>
</template>
