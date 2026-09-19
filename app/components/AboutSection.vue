<script setup lang="ts">
import { UserRound, Workflow, Wrench, TrendingUp } from 'lucide-vue-next'

const { t } = useI18n()

const cards = [
  {
    icon: UserRound,
    title: t('about.cards.about.title'),
    description: t('about.cards.about.description'),
    highlight: t('about.cards.about.highlight'),
  },
  {
    icon: Workflow,
    title: t('about.cards.process.title'),
    description: t('about.cards.process.description'),
    highlight: t('about.cards.process.highlight'),
  },
  {
    icon: Wrench,
    title: t('about.cards.complete.title'),
    description: t('about.cards.complete.description'),
    highlight: t('about.cards.complete.highlight'),
  },
  {
    icon: TrendingUp,
    title: t('about.cards.growth.title'),
    description: t('about.cards.growth.description'),
    highlight: t('about.cards.growth.highlight'),
  },
]
</script>

<template>
  <section id="about" class="relative px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span
          class="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          {{ t('about.eyebrow') }}
        </span>

        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {{ t('about.title.before') }}
          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {{ t('about.title.highlight') }}
          </span>
        </h2>

        <p class="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          {{ t('about.description') }}
        </p>
      </div>

      <!-- Cards -->
      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="card in cards"
          :key="card.title"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
        >
          <!-- Decorative glow -->
          <div
            class="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/20"
          ></div>

          <div class="relative">
            <!-- Icon -->
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl"
            >
              <component :is="card.icon" class="h-6 w-6" :stroke-width="1.8" />
            </div>

            <!-- Title -->
            <h3 class="text-xl font-semibold text-white">
              {{ card.title }}
            </h3>

            <!-- Description -->
            <p class="mt-3 text-sm leading-6 text-slate-300">
              {{ card.description }}
            </p>

            <!-- Highlight -->
            <div class="mt-5 border-t border-white/10 pt-4 text-sm font-medium text-cyan-400">
              {{ card.highlight }}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
