<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UnderConstruction
    :title="t('services.cards.webapp.title')"
    :description="t('underConstruction.descriptions.webapp')"
  />
</template>
