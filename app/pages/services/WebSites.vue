<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UnderConstruction
    :title="t('services.cards.website.title')"
    :description="t('underConstruction.descriptions.website')"
  />
</template>
