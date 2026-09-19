<script setup lang="ts">
import { Rocket, Globe, Settings, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()

const services = [
  {
    id: 'landing',
    icon: Rocket,
  },
  {
    id: 'website',
    icon: Globe,
  },
  {
    id: 'webapp',
    icon: Settings,
  },
]
</script>

<template>
  <section id="services" class="relative px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span
          class="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          {{ t('services.eyebrow') }}
        </span>

        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {{ t('services.title') }}
        </h2>

        <p class="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          {{ t('services.description') }}
        </p>
      </div>

      <!-- Services -->
      <div class="grid gap-6 md:grid-cols-3">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="t(`services.cards.${service.id}.url`)"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
        >
          <!-- Decorative glow -->
          <div
            class="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/20"
          ></div>

          <div class="relative">
            <!-- Icon -->
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
            >
              <component :is="service.icon" class="h-7 w-7" :stroke-width="1.8" />
            </div>

            <!-- Content -->
            <h3 class="text-xl font-semibold text-white">
              {{ t(`services.cards.${service.id}.title`) }}
            </h3>

            <p class="mt-3 text-sm leading-6 text-slate-300">
              {{ t(`services.cards.${service.id}.description`) }}
            </p>

            <!-- CTA -->
            <div
              class="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300"
            >
              {{ t(`services.cards.${service.id}.cta`) }}

              <span class="transition-transform duration-300 group-hover:translate-x-1"
                ><ArrowRight
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
