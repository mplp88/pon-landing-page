<script setup lang="ts">
import {
  ArrowRight,
  BookOpen,
  Check,
  ExternalLink,
  FileText,
  Globe,
  LayoutDashboard,
  LayoutTemplate,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  Smartphone,
  Users,
  Zap,
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('webSites.seo.title'),
  description: () => t('webSites.seo.description'),
  ogTitle: () => t('webSites.seo.ogTitle'),
  ogDescription: () => t('webSites.seo.ogDescription'),
  ogType: 'website',
})

const features = [
  {
    icon: Globe,
    key: 'structure',
  },
  {
    icon: Palette,
    key: 'design',
  },
  {
    icon: Smartphone,
    key: 'responsive',
  },
  {
    icon: Search,
    key: 'seo',
  },
  {
    icon: MessageCircle,
    key: 'contact',
  },
  {
    icon: BookOpen,
    key: 'content',
  },
  {
    icon: Users,
    key: 'about',
  },
  {
    icon: LayoutDashboard,
    key: 'custom',
  },
]

const audiences = [
  {
    icon: Users,
    key: 'businesses',
  },
  {
    icon: Globe,
    key: 'professionals',
  },
  {
    icon: Rocket,
    key: 'brands',
  },
  {
    icon: LayoutDashboard,
    key: 'projects',
  },
]

const processSteps = ['discovery', 'planning', 'design', 'development', 'launch']

const landingFeatures = ['focused', 'simple', 'fast', 'action']

const websiteFeatures = ['multiplePages', 'content', 'structure', 'growth']
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-24">
      <div
        class="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div
        class="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div class="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.hero.eyebrow') }}
          </p>

          <h1
            class="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {{ t('webSites.hero.title.before') }}
            <span class="text-cyan-400">
              {{ t('webSites.hero.title.highlight') }}
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {{ t('webSites.hero.description') }}
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/5491178293958?text=Hola%21%20Vi%20tu%20p%C3%A1gina%20y%20me%20interesa%20consultar%20por%20un%20sitio%20web%20profesional."
              class="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-cyan-300"
              target="_blank"
            >
              {{ t('webSites.hero.cta') }}
              <ArrowRight class="h-4 w-4" />
            </a>

            <a
              href="#project"
              class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:border-cyan-400/30 hover:bg-white/10"
            >
              {{ t('webSites.hero.secondaryCta') }}
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <span class="inline-flex items-center gap-2">
              <Check class="h-4 w-4 text-cyan-400" />
              {{ t('webSites.hero.points.responsive') }}
            </span>

            <span class="inline-flex items-center gap-2">
              <Check class="h-4 w-4 text-cyan-400" />
              {{ t('webSites.hero.points.custom') }}
            </span>

            <span class="inline-flex items-center gap-2">
              <Check class="h-4 w-4 text-cyan-400" />
              {{ t('webSites.hero.points.seo') }}
            </span>
          </div>
        </div>

        <!-- Visual -->
        <div class="relative">
          <div
            class="absolute -inset-4 rounded-3xl bg-linear-to-br from-cyan-400/20 to-blue-500/10 blur-2xl"
          />

          <div
            class="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/30"
          >
            <!-- Browser bar -->
            <div class="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
              <span class="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span class="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span class="h-2.5 w-2.5 rounded-full bg-slate-600" />

              <div
                class="ml-3 flex-1 rounded-md border border-white/5 bg-slate-950 px-3 py-1.5 text-xs text-slate-500"
              >
                www.tuproyecto.com
              </div>
            </div>

            <div
              class="grid min-h-80 grid-cols-[72px_minmax(0,1fr)] sm:min-h-105 sm:grid-cols-[110px_minmax(0,1fr)]"
            >
              <!-- Fake sidebar -->
              <div class="border-r border-white/10 bg-slate-900/80 p-3">
                <div class="mb-8 h-7 rounded-md bg-cyan-400/10" />

                <div class="space-y-3">
                  <div class="h-2 rounded bg-cyan-400/30" />
                  <div class="h-2 rounded bg-white/10" />
                  <div class="h-2 rounded bg-white/10" />
                  <div class="h-2 rounded bg-white/10" />
                  <div class="h-2 rounded bg-white/10" />
                </div>
              </div>

              <!-- Fake website -->
              <div class="bg-slate-950 p-5">
                <div class="flex items-center justify-between">
                  <div class="h-5 w-14 md:w-28 rounded bg-white/15" />

                  <div class="flex gap-2">
                    <div class="h-2 w-10 rounded bg-white/10" />
                    <div class="h-2 w-10 rounded bg-white/10" />
                    <div class="h-2 w-10 rounded bg-white/10" />
                  </div>
                </div>

                <div class="mt-12 max-w-xs">
                  <div class="h-8 w-full rounded bg-white/15" />
                  <div class="mt-3 h-3 w-4/5 rounded bg-white/10" />
                  <div class="mt-2 h-3 w-3/5 rounded bg-white/10" />

                  <div class="mt-7 h-9 w-32 rounded-lg bg-cyan-400/80" />
                </div>

                <div class="mt-12 grid grid-cols-3 gap-3">
                  <div class="aspect-square rounded-xl bg-white/5" />
                  <div class="aspect-square rounded-xl bg-white/5" />
                  <div class="aspect-square rounded-xl bg-white/5" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="absolute -bottom-5 -left-5 hidden rounded-xl border border-cyan-400/20 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:block"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400"
              >
                <Smartphone class="h-4 w-4" />
              </div>

              <div>
                <p class="text-xs font-semibold text-white">
                  {{ t('webSites.hero.visual.title') }}
                </p>
                <p class="mt-0.5 text-xs text-slate-500">
                  {{ t('webSites.hero.visual.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is a professional website? -->
    <section id="about" class="scroll-mt-20 border-t border-white/5 px-6 py-20 md:py-28">
      <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.whatIs.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webSites.whatIs.title') }}
          </h2>
        </div>

        <div class="space-y-5 leading-relaxed text-slate-300">
          <p>
            {{ t('webSites.whatIs.paragraph1') }}
          </p>

          <p>
            {{ t('webSites.whatIs.paragraph2') }}
          </p>

          <div class="rounded-2xl border border-cyan-400/10 bg-cyan-400/4 p-6">
            <div class="flex gap-4">
              <Globe class="mt-0.5 h-6 w-6 shrink-0 text-cyan-400" />

              <div>
                <h3 class="font-semibold text-white">
                  {{ t('webSites.whatIs.highlight.title') }}
                </h3>

                <p class="mt-2 text-sm leading-relaxed text-slate-400">
                  {{ t('webSites.whatIs.highlight.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Possible sections -->
    <section class="border-t border-white/5 bg-slate-950/30 px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.features.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webSites.features.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webSites.features.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="feature in features"
            :key="feature.key"
            class="rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/5"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400"
            >
              <component :is="feature.icon" class="h-5 w-5" />
            </div>

            <h3 class="mt-5 text-lg font-semibold text-white">
              {{ t(`webSites.features.items.${feature.key}.title`) }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-slate-400">
              {{ t(`webSites.features.items.${feature.key}.description`) }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Not everything is necessary -->
    <section class="px-6 py-20 md:py-28">
      <div class="mx-auto max-w-5xl">
        <div
          class="overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/6 to-white/2"
        >
          <div class="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
            <div class="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-12">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400"
              >
                <LayoutDashboard class="h-6 w-6" />
              </div>

              <h2 class="mt-6 text-3xl font-bold tracking-tight">
                {{ t('webSites.flexible.title') }}
              </h2>
            </div>

            <div class="p-8 md:p-12">
              <p class="leading-relaxed text-slate-300">
                {{ t('webSites.flexible.description') }}
              </p>

              <ul class="mt-7 space-y-4">
                <li v-for="item in ['first', 'second', 'third']" :key="item" class="flex gap-3">
                  <Check class="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

                  <span class="text-sm leading-relaxed text-slate-300">
                    {{ t(`webSites.flexible.items.${item}`) }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Audience -->
    <section class="border-t border-white/5 px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="max-w-3xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.audience.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webSites.audience.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webSites.audience.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="audience in audiences"
            :key="audience.key"
            class="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-cyan-400"
            >
              <component :is="audience.icon" class="h-5 w-5" />
            </div>

            <h3 class="mt-5 font-semibold text-white">
              {{ t(`webSites.audience.items.${audience.key}.title`) }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-slate-400">
              {{ t(`webSites.audience.items.${audience.key}.description`) }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Landing vs Website -->
    <section
      id="comparison"
      class="scroll-mt-20 border-t border-white/5 bg-slate-950/30 px-6 py-20 md:py-28"
    >
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.comparison.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webSites.comparison.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webSites.comparison.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <!-- Landing -->
          <article class="rounded-3xl border border-white/10 bg-white/3 p-7 md:p-8">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {{ t('webSites.comparison.landing.eyebrow') }}
                </p>

                <h3 class="mt-2 text-2xl font-bold text-white">
                  {{ t('webSites.comparison.landing.title') }}
                </h3>
              </div>

              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-300"
              >
                <FileText class="h-5 w-5" />
              </div>
            </div>

            <p class="mt-5 leading-relaxed text-slate-400">
              {{ t('webSites.comparison.landing.description') }}
            </p>

            <ul class="mt-7 space-y-4">
              <li v-for="item in landingFeatures" :key="item" class="flex gap-3">
                <Check class="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />

                <span class="text-sm text-slate-300">
                  {{ t(`webSites.comparison.landing.features.${item}`) }}
                </span>
              </li>
            </ul>
          </article>

          <!-- Professional website -->
          <article
            class="rounded-3xl border border-cyan-400/20 bg-cyan-400/4 p-7 shadow-xl shadow-cyan-950/10 md:p-8"
          >
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  {{ t('webSites.comparison.website.eyebrow') }}
                </p>

                <h3 class="mt-2 text-2xl font-bold text-white">
                  {{ t('webSites.comparison.website.title') }}
                </h3>
              </div>

              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400"
              >
                <Globe class="h-5 w-5" />
              </div>
            </div>

            <p class="mt-5 leading-relaxed text-slate-300">
              {{ t('webSites.comparison.website.description') }}
            </p>

            <ul class="mt-7 space-y-4">
              <li v-for="item in websiteFeatures" :key="item" class="flex gap-3">
                <Check class="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

                <span class="text-sm text-slate-300">
                  {{ t(`webSites.comparison.website.features.${item}`) }}
                </span>
              </li>
            </ul>
          </article>
        </div>

        <div class="mt-8 text-center">
          <p class="text-sm text-slate-400">
            {{ t('webSites.comparison.footer') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Real project -->
    <section id="project" class="scroll-mt-20 px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="mb-10">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.project.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webSites.project.title') }}
          </h2>
        </div>

        <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
          <div class="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div class="relative min-h-90 overflow-hidden bg-slate-950">
              <img
                src="/images/maternidad-y-emociones.png"
                :alt="t('webSites.project.imageAlt')"
                class="absolute inset-0 h-full w-full object-cover object-top"
              />

              <div
                class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent"
              />

              <div class="absolute bottom-5 left-5">
                <span
                  class="rounded-lg border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm"
                >
                  {{ t('webSites.project.badge') }}
                </span>
              </div>
            </div>

            <div class="flex flex-col justify-center p-8 md:p-10">
              <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {{ t('webSites.project.category') }}
              </p>

              <h3 class="mt-3 text-3xl font-bold text-white">Maternidad y Emociones</h3>

              <p class="mt-5 leading-relaxed text-slate-400">
                {{ t('webSites.project.description') }}
              </p>

              <div class="mt-7 space-y-3">
                <div class="flex items-center gap-3 text-sm text-slate-300">
                  <Globe class="h-4 w-4 text-cyan-400" />
                  {{ t('webSites.project.features.website') }}
                </div>

                <div class="flex items-center gap-3 text-sm text-slate-300">
                  <BookOpen class="h-4 w-4 text-cyan-400" />
                  {{ t('webSites.project.features.blog') }}
                </div>

                <div class="flex items-center gap-3 text-sm text-slate-300">
                  <Smartphone class="h-4 w-4 text-cyan-400" />
                  {{ t('webSites.project.features.responsive') }}
                </div>
              </div>

              <a
                href="https://maternidadyemociones.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/20 hover:text-cyan-200"
              >
                {{ t('webSites.project.cta') }}
                <ExternalLink class="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="border-t border-white/5 bg-slate-950/30 px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.process.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webSites.process.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webSites.process.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-5">
          <article
            v-for="(step, index) in processSteps"
            :key="step"
            class="relative rounded-2xl border border-white/10 bg-white/3 p-6"
          >
            <span class="text-sm font-bold text-cyan-400"> 0{{ index + 1 }} </span>

            <h3 class="mt-4 font-semibold text-white">
              {{ t(`webSites.process.steps.${step}.title`) }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-slate-400">
              {{ t(`webSites.process.steps.${step}.description`) }}
            </p>
          </article>
        </div>

        <div class="mt-8 text-center">
          <p class="text-sm text-slate-500">
            {{ t('webSites.process.note') }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="scroll-mt-20 border-t border-white/5 px-6 py-24 md:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <div
          class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400"
        >
          <MessageCircle class="h-7 w-7" />
        </div>

        <h2 class="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('webSites.cta.title') }}
        </h2>

        <p class="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
          {{ t('webSites.cta.description') }}
        </p>

        <a
          href="https://wa.me/5491178293958?text=Hola%21%20Vi%20tu%20p%C3%A1gina%20y%20me%20interesa%20consultar%20por%20un%20sitio%20web%20profesional."
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition-all hover:bg-cyan-300"
        >
          {{ t('webSites.cta.button') }}
          <ArrowRight class="h-4 w-4" />
        </a>

        <p class="mt-5 text-sm text-slate-500">
          {{ t('webSites.cta.note') }}
        </p>
      </div>
    </section>

    <!-- Other services -->
    <section class="border-t border-white/5 px-6 py-20 md:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webSites.otherServices.eyebrow') }}
          </p>

          <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
            {{ t('webSites.otherServices.title') }}
          </h2>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2">
          <NuxtLink
            :to="localePath('/services/landing-pages')"
            class="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
          >
            <LayoutTemplate class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

            <h3 class="mt-5 text-xl font-semibold">
              {{ t('webSites.otherServices.landing.title') }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ t('webSites.otherServices.landing.description') }}
            </p>

            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
              {{ t('webSites.otherServices.view') }}
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/services/web-apps')"
            class="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
          >
            <Zap class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

            <h3 class="mt-5 text-xl font-semibold">
              {{ t('webSites.otherServices.apps.title') }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ t('webSites.otherServices.apps.description') }}
            </p>

            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
              {{ t('webSites.otherServices.view') }}
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
