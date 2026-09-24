<script setup lang="ts">
import {
  ArrowRight,
  Check,
  ExternalLink,
  Globe,
  LayoutTemplate,
  MessageCircle,
  Palette,
  Rocket,
  Smartphone,
  Zap,
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

import BarberLanding from '~/components/demos/BarberLanding.vue'
import RestaurantLanding from '~/components/demos/RestaurantLanding.vue'
import ProfessionalLanding from '~/components/demos/ProfessionalLanding.vue'
import DemoPreview from '~/components/DemoPreview.vue'

const examples = [
  {
    id: 'barber',
    component: BarberLanding,
    route: '/demos/barber-shop',
  },
  {
    id: 'restaurant',
    component: RestaurantLanding,
    route: '/demos/restaurant',
  },
  {
    id: 'professional',
    component: ProfessionalLanding,
    route: '/demos/professional',
  },
]

const selectedExample = ref('barber')

const currentExample = computed(() =>
  examples.find((example) => example.id === selectedExample.value),
)

useSeoMeta({
  title: () => t('seo.landing.title'),
  description: () => t('seo.landing.description'),
  ogTitle: () => t('seo.landing.ogTitle'),
  ogDescription: () => t('seo.landing.ogDescription'),
  ogImage: 'https://martinponce.com.ar/preview.jpg',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
    <!-- Hero -->
    <section class="relative overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-36">
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      ></div>

      <div class="relative z-10 mx-auto max-w-5xl text-center">
        <div
          class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
        >
          <LayoutTemplate class="h-8 w-8" :stroke-width="1.7" />
        </div>

        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {{ t('landing.eyebrow') }}
        </p>

        <h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {{ t('landing.hero.title.before') }}
          <span
            class="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
          >
            {{ t('landing.hero.title.highlight') }}
          </span>
        </h1>

        <p class="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {{ t('landing.hero.description') }}
        </p>

        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-7 py-3 font-semibold transition-all hover:scale-105 hover:from-blue-700 hover:to-cyan-700"
          >
            {{ t('landing.hero.cta') }}
            <ArrowRight class="h-4 w-4" />
          </a>

          <a
            href="#examples"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-7 py-3 font-semibold text-slate-200 transition-all hover:bg-white/10"
          >
            {{ t('landing.hero.examples') }}
          </a>
        </div>
      </div>
    </section>

    <main>
      <!-- What is a landing page? -->
      <section class="border-t border-white/5 px-6 py-20 md:py-28">
        <div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {{ t('landing.about.eyebrow') }}
            </p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              {{ t('landing.about.title') }}
            </h2>

            <p class="mt-6 leading-relaxed text-slate-300">
              {{ t('landing.about.description') }}
            </p>

            <p class="mt-4 leading-relaxed text-slate-300">
              {{ t('landing.about.description2') }}
            </p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-slate-950/30 p-6 shadow-xl">
            <div class="grid gap-4 sm:grid-cols-2">
              <div
                v-for="item in [
                  { icon: Zap, key: 'fast' },
                  { icon: Smartphone, key: 'responsive' },
                  { icon: Globe, key: 'seo' },
                  { icon: MessageCircle, key: 'contact' },
                ]"
                :key="item.key"
                class="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <component :is="item.icon" class="mb-4 h-6 w-6 text-cyan-400" :stroke-width="1.8" />

                <h3 class="font-semibold">
                  {{ t(`landing.about.features.${item.key}.title`) }}
                </h3>

                <p class="mt-2 text-sm leading-relaxed text-slate-400">
                  {{ t(`landing.about.features.${item.key}.description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Includes -->
      <section class="px-6 py-20 md:py-28">
        <div class="mx-auto max-w-6xl">
          <div class="mx-auto max-w-3xl text-center">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {{ t('landing.includes.eyebrow') }}
            </p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              {{ t('landing.includes.title') }}
            </h2>

            <p class="mt-5 leading-relaxed text-slate-300">
              {{ t('landing.includes.description') }}
            </p>
          </div>

          <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="item in [
                'design',
                'responsive',
                'content',
                'whatsapp',
                'forms',
                'seo',
                'social',
                'deployment',
                'domain',
              ]"
              :key="item"
              class="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
            >
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400"
              >
                <Check class="h-4 w-4" :stroke-width="2" />
              </div>

              <div>
                <h3 class="font-semibold">
                  {{ t(`landing.includes.items.${item}.title`) }}
                </h3>

                <p class="mt-1 text-sm leading-relaxed text-slate-400">
                  {{ t(`landing.includes.items.${item}.description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Who is it for -->
      <section class="border-y border-white/5 bg-slate-950/20 px-6 py-20 md:py-28">
        <div class="mx-auto max-w-6xl">
          <div class="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {{ t('landing.audience.eyebrow') }}
              </p>

              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                {{ t('landing.audience.title') }}
              </h2>

              <p class="mt-5 leading-relaxed text-slate-300">
                {{ t('landing.audience.description') }}
              </p>
            </div>

            <div class="grid gap-3">
              <div
                v-for="item in ['businesses', 'professionals', 'products', 'campaigns']"
                :key="item"
                class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <Check class="h-5 w-5 shrink-0 text-cyan-400" />
                <span class="text-slate-200">
                  {{ t(`landing.audience.items.${item}`) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Examples -->
      <section id="examples" class="scroll-mt-20 px-6 py-20 md:py-28">
        <div class="mx-auto max-w-6xl">
          <!-- Header -->
          <div class="mx-auto max-w-3xl text-center">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {{ t('landing.examples.eyebrow') }}
            </p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              {{ t('landing.examples.title') }}
            </h2>

            <p class="mt-5 leading-relaxed text-slate-300">
              {{ t('landing.examples.description') }}
            </p>
          </div>

          <!-- Example cards -->
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            <NuxtLink
              v-for="example in examples"
              :key="example.id"
              :to="localePath(example.route)"
              class="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition-all duration-300 hover:z-10 hover:scale-[1.03] hover:border-cyan-400/30"
            >
              <!-- Demo -->
              <DemoPreview>
                <component :is="example.component" />
              </DemoPreview>

              <!-- Overlay -->
              <div
                class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent p-5 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
              >
                <h3 class="text-xl font-bold text-white">
                  {{ t(`landing.examples.items.${example.id}.title`) }}
                </h3>

                <p class="mt-1 max-w-xs text-sm leading-relaxed text-slate-300">
                  {{ t(`landing.examples.items.${example.id}.description`) }}
                </p>

                <span
                  class="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors group-hover:bg-cyan-300"
                >
                  {{ t('landing.examples.viewDemo') }}

                  <ArrowRight class="h-4 w-4" />
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section class="border-y border-white/5 bg-slate-950/20 px-6 py-20 md:py-28">
        <div class="mx-auto max-w-6xl">
          <div class="mx-auto max-w-3xl text-center">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {{ t('landing.process.eyebrow') }}
            </p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              {{ t('landing.process.title') }}
            </h2>
          </div>

          <div class="mt-12 grid gap-6 md:grid-cols-4">
            <div
              v-for="(step, index) in ['discuss', 'define', 'develop', 'launch']"
              :key="step"
              class="relative rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <span class="text-sm font-semibold text-cyan-400"> 0{{ index + 1 }} </span>

              <h3 class="mt-4 font-semibold">
                {{ t(`landing.process.steps.${step}.title`) }}
              </h3>

              <p class="mt-2 text-sm leading-relaxed text-slate-400">
                {{ t(`landing.process.steps.${step}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->

      <section id="contact" class="scroll-mt-20 px-6 py-20 md:py-28">
        <div
          class="mx-auto max-w-4xl rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-center md:p-12"
        >
          <Rocket class="mx-auto h-8 w-8 text-cyan-400" :stroke-width="1.7" />

          <h2 class="mt-5 text-3xl font-bold sm:text-4xl">
            {{ t('landing.cta.title') }}
          </h2>

          <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
            {{ t('landing.cta.description') }}
          </p>

          <a
            href="https://wa.me/5491178293958"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-7 inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-7 py-3 font-semibold transition-all hover:scale-105"
          >
            {{ t('landing.cta.button') }}
            <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </section>

      <!-- Other services -->
      <section class="border-t border-white/5 px-6 py-20">
        <div class="mx-auto max-w-6xl">
          <div class="mx-auto max-w-3xl text-center">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {{ t('landing.otherServices.eyebrow') }}
            </p>

            <h2 class="text-3xl font-bold tracking-tight">
              {{ t('landing.otherServices.title') }}
            </h2>
          </div>

          <div class="mt-10 grid gap-4 md:grid-cols-2">
            <NuxtLink
              :to="localePath('/services/web-sites')"
              class="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
            >
              <Globe class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

              <h3 class="mt-5 text-xl font-semibold">
                {{ t('landing.otherServices.website.title') }}
              </h3>

              <p class="mt-2 text-sm leading-relaxed text-slate-400">
                {{ t('landing.otherServices.website.description') }}
              </p>

              <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                {{ t('landing.otherServices.view') }}
                <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </NuxtLink>

            <NuxtLink
              :to="localePath('/services/web-apps')"
              class="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
            >
              <Zap class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

              <h3 class="mt-5 text-xl font-semibold">
                {{ t('landing.otherServices.webapp.title') }}
              </h3>

              <p class="mt-2 text-sm leading-relaxed text-slate-400">
                {{ t('landing.otherServices.webapp.description') }}
              </p>

              <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                {{ t('landing.otherServices.view') }}
                <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
