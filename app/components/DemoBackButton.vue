<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

const { t } = useI18n()

const localePath = useLocalePath()
</script>

<template>
  <div class="fixed left-4 top-4 z-100">
    <NuxtLink
      :to="localePath('/services/landing-pages#examples')"
      class="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-slate-950/90 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-lg shadow-black/20 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-slate-900 hover:text-cyan-300"
    >
      <ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />

      <span> {{ t('landing.examples.backToExamples') }} </span>
    </NuxtLink>
  </div>
</template>
