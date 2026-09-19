<script setup lang="ts">
import { Construction } from 'lucide-vue-next'
const localePath = useLocalePath()

defineProps<{
  title: string
  description: string
}>()

const { t } = useI18n()
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 text-white"
  >
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
    ></div>

    <main class="relative z-10 mx-auto max-w-2xl text-center">
      <div
        class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10"
      >
        <Construction class="h-10 w-10 text-cyan-400" :stroke-width="1.5" />
      </div>

      <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {{ t('underConstruction.eyebrow') }}
      </p>

      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
        {{ title }}
      </h1>

      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
        {{ description }}
      </p>

      <NuxtLink
        :to="localePath('/')"
        class="mt-8 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition-all hover:bg-cyan-400/20 hover:text-cyan-200"
      >
        {{ t('underConstruction.backHome') }}
      </NuxtLink>
    </main>
  </div>
</template>
