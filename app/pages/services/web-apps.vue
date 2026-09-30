<script setup lang="ts">
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Database,
  Globe,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Rocket,
  Settings2,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
  Zap,
} from 'lucide-vue-next'

const localePath = useLocalePath()
const { t } = useI18n()
const route = useRoute()

useSeoMeta({
  title: () => t('webApps.seo.title'),
  description: () => t('webApps.seo.description'),
  ogTitle: () => t('webApps.seo.ogTitle'),
  ogDescription: () => t('webApps.seo.ogDescription'),
  ogImage: 'https://martinponce.com.ar/preview.jpg',
  ogUrl: () => `https://martinponce.com.ar${route.path}`,
  ogType: 'website',
})

const features = [
  { icon: Workflow, key: 'processes' },
  { icon: Users, key: 'users' },
  { icon: Database, key: 'data' },
  { icon: BarChart3, key: 'dashboard' },
  { icon: LockKeyhole, key: 'authentication' },
  { icon: Settings2, key: 'custom' },
  { icon: MessageCircle, key: 'integrations' },
  { icon: Smartphone, key: 'responsive' },
]

const audiences = [
  { icon: Building2, key: 'businesses' },
  { icon: Users, key: 'professionals' },
  { icon: Workflow, key: 'internal' },
  { icon: Rocket, key: 'newIdeas' },
]

const processSteps = ['discovery', 'planning', 'design', 'development', 'launch']

const applicationFeatures = ['custom', 'scalable', 'accessible', 'maintainable']
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-24">
      <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div class="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div
        class="relative mx-auto grid w-full min-w-0 max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center"
      >
        <div class="min-w-0">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.hero.eyebrow') }}
          </p>

          <h1 class="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {{ t('webApps.hero.title.before') }}
            <span class="text-cyan-400">
              {{ t('webApps.hero.title.highlight') }}
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {{ t('webApps.hero.description') }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5491178293958?text=Hola%21%20Vi%20tu%20p%C3%A1gina%20y%20me%20interesa%20consultar%20por%20una%20aplicaci%C3%B3n%20web%20a%20medida."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              {{ t('webApps.hero.cta') }}
              <ArrowRight class="h-4 w-4" />
            </a>

            <a
              href="#what-is"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07] hover:text-cyan-300"
            >
              {{ t('webApps.hero.secondaryCta') }}
            </a>
          </div>
        </div>

        <!-- Fake application preview -->
        <div class="relative min-w-0">
          <div
            class="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/30"
          >
            <!-- Browser bar -->
            <div class="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
              <span class="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span class="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              <div
                class="ml-3 min-w-0 flex-1 rounded-md border border-white/5 bg-slate-950 px-3 py-1.5 text-[10px] text-slate-500"
              >
                app.yourbusiness.com
              </div>
            </div>

            <!-- Application -->
            <div
              class="grid min-h-[340px] min-w-0 grid-cols-[64px_minmax(0,1fr)] sm:min-h-[430px] sm:grid-cols-[110px_minmax(0,1fr)]"
            >
              <!-- Sidebar -->
              <aside class="border-r border-white/10 bg-slate-900/80 p-3 sm:p-2">
                <div class="mb-7 flex items-center justify-center gap-2 sm:justify-start">
                  <div
                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400"
                  >
                    <Layers3 class="h-4 w-4" />
                  </div>

                  <span class="hidden text-xs font-semibold text-white sm:block"> Dashboard </span>
                </div>

                <div class="space-y-2">
                  <div
                    class="flex items-center justify-center rounded-lg bg-cyan-400/10 px-2 py-2 text-cyan-300 sm:justify-start sm:gap-2"
                  >
                    <BarChart3 class="h-4 w-4 shrink-0" />
                    <span class="hidden text-[11px] sm:block"> Overview </span>
                  </div>

                  <div
                    class="flex items-center justify-center rounded-lg px-2 py-2 text-slate-500 sm:justify-start sm:gap-2"
                  >
                    <Users class="h-4 w-4 shrink-0" />
                    <span class="hidden text-[11px] sm:block"> Customers </span>
                  </div>

                  <div
                    class="flex items-center justify-center rounded-lg px-2 py-2 text-slate-500 sm:justify-start sm:gap-2"
                  >
                    <Database class="h-4 w-4 shrink-0" />
                    <span class="hidden text-[11px] sm:block"> Products </span>
                  </div>

                  <div
                    class="flex items-center justify-center rounded-lg px-2 py-2 text-slate-500 sm:justify-start sm:gap-2"
                  >
                    <Settings2 class="h-4 w-4 shrink-0" />
                    <span class="hidden text-[11px] sm:block"> Settings </span>
                  </div>
                </div>
              </aside>

              <!-- Content -->
              <div class="min-w-0 bg-slate-950 p-3 sm:p-5">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-[9px] uppercase tracking-wider text-slate-500">Dashboard</p>

                    <h3 class="mt-1 truncate text-sm font-semibold text-white sm:text-lg">
                      Overview
                    </h3>
                  </div>

                  <div class="h-7 w-7 shrink-0 rounded-full bg-slate-800" />
                </div>

                <!-- Stats -->
                <div class="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:grid-cols-3 sm:gap-3">
                  <div class="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <p class="text-[9px] text-slate-500">Users</p>
                    <p class="mt-1 text-sm font-bold text-white sm:text-base">1,284</p>
                    <p class="mt-1 text-[8px] text-cyan-400">+12.5%</p>
                  </div>

                  <div class="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <p class="text-[9px] text-slate-500">Orders</p>
                    <p class="mt-1 text-sm font-bold text-white sm:text-base">384</p>
                    <p class="mt-1 text-[8px] text-cyan-400">+8.2%</p>
                  </div>

                  <div
                    class="col-span-2 rounded-xl border border-white/5 bg-white/[0.03] p-3 sm:col-span-1"
                  >
                    <p class="text-[9px] text-slate-500">Revenue</p>
                    <p class="mt-1 text-sm font-bold text-white sm:text-base">$24.8k</p>
                    <p class="mt-1 text-[8px] text-cyan-400">+18.4%</p>
                  </div>
                </div>

                <!-- Chart -->
                <div class="mt-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 sm:mt-4">
                  <div class="flex items-center justify-between">
                    <p class="text-[9px] font-medium text-slate-300">Activity</p>

                    <span class="text-[8px] text-slate-500"> Last 30 days </span>
                  </div>

                  <div class="mt-4 flex h-20 items-end gap-1.5 sm:h-28 sm:gap-2">
                    <div class="h-[35%] flex-1 rounded-t bg-cyan-400/20" />
                    <div class="h-[48%] flex-1 rounded-t bg-cyan-400/30" />
                    <div class="h-[42%] flex-1 rounded-t bg-cyan-400/25" />
                    <div class="h-[62%] flex-1 rounded-t bg-cyan-400/40" />
                    <div class="h-[54%] flex-1 rounded-t bg-cyan-400/35" />
                    <div class="h-[75%] flex-1 rounded-t bg-cyan-400/50" />
                    <div class="h-[68%] flex-1 rounded-t bg-cyan-400/45" />
                    <div class="h-[88%] flex-1 rounded-t bg-cyan-400/70" />
                    <div class="h-[80%] flex-1 rounded-t bg-cyan-400/55" />
                    <div class="h-[95%] flex-1 rounded-t bg-cyan-400" />
                  </div>
                </div>

                <!-- Table -->
                <div
                  class="mt-3 hidden rounded-xl border border-white/5 bg-white/[0.03] p-3 sm:block"
                >
                  <div class="flex items-center justify-between">
                    <p class="text-[9px] font-medium text-slate-300">Recent activity</p>

                    <span class="text-[8px] text-cyan-400"> View all </span>
                  </div>

                  <div class="mt-3 space-y-2">
                    <div class="flex items-center justify-between border-b border-white/5 pb-2">
                      <div class="flex items-center gap-2">
                        <div class="h-5 w-5 rounded-full bg-cyan-400/10" />
                        <span class="text-[8px] text-slate-400"> New customer </span>
                      </div>

                      <span class="text-[8px] text-slate-600"> 2m </span>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="h-5 w-5 rounded-full bg-blue-400/10" />
                        <span class="text-[8px] text-slate-400"> New order </span>
                      </div>

                      <span class="text-[8px] text-slate-600"> 8m </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-full border border-cyan-400/10 bg-cyan-400/5 blur-xl sm:block"
          />
        </div>
      </div>
    </section>

    <!-- What is a web application? -->
    <section id="what-is" class="scroll-mt-20 border-t border-white/5 px-6 py-20 md:py-28">
      <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.whatIs.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webApps.whatIs.title') }}
          </h2>
        </div>

        <div class="space-y-5 text-slate-300">
          <p class="leading-relaxed">
            {{ t('webApps.whatIs.paragraph1') }}
          </p>

          <p class="leading-relaxed">
            {{ t('webApps.whatIs.paragraph2') }}
          </p>

          <div class="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
            <div class="flex gap-4">
              <Zap class="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

              <p class="text-sm leading-relaxed text-slate-300">
                {{ t('webApps.whatIs.highlight') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="border-t border-white/5 px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.features.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webApps.features.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webApps.features.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="feature in features"
            :key="feature.key"
            class="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
          >
            <component :is="feature.icon" class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

            <h3 class="mt-5 font-semibold text-white">
              {{ t(`webApps.features.items.${feature.key}.title`) }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ t(`webApps.features.items.${feature.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Built around the project -->
    <section class="px-6 py-20 md:py-28">
      <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.custom.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webApps.custom.title') }}
          </h2>

          <p class="mt-5 max-w-2xl leading-relaxed text-slate-300">
            {{ t('webApps.custom.description') }}
          </p>

          <div class="mt-8 space-y-4">
            <div v-for="item in applicationFeatures" :key="item" class="flex gap-3">
              <div
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10"
              >
                <Check class="h-3.5 w-3.5 text-cyan-400" />
              </div>

              <p class="text-sm leading-relaxed text-slate-300">
                {{ t(`webApps.custom.items.${item}`) }}
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400"
            >
              <Workflow class="h-5 w-5" />
            </div>

            <div>
              <p class="text-sm font-semibold text-white">
                {{ t('webApps.custom.card.title') }}
              </p>

              <p class="text-xs text-slate-500">
                {{ t('webApps.custom.card.subtitle') }}
              </p>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <div v-for="(step, index) in 4" :key="step" class="flex items-center gap-3">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/10 bg-slate-950 text-xs font-semibold text-cyan-400"
              >
                {{ index + 1 }}
              </div>

              <div class="h-px flex-1 bg-white/10" />

              <div class="w-24 text-right text-xs text-slate-400 sm:w-32">
                {{ t(`webApps.custom.card.steps.${index}`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who is it for? -->
    <section class="border-t border-white/5 px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.audience.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webApps.audience.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webApps.audience.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="audience in audiences"
            :key="audience.key"
            class="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <component :is="audience.icon" class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

            <h3 class="mt-5 font-semibold text-white">
              {{ t(`webApps.audience.items.${audience.key}.title`) }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ t(`webApps.audience.items.${audience.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.process.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webApps.process.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webApps.process.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-4 md:grid-cols-5">
          <div
            v-for="(step, index) in processSteps"
            :key="step"
            class="relative rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-400"
            >
              {{ index + 1 }}
            </div>

            <h3 class="mt-5 font-semibold text-white">
              {{ t(`webApps.process.steps.${step}.title`) }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ t(`webApps.process.steps.${step}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Landing vs Website vs Web App -->
    <section class="border-t border-white/5 px-6 py-20 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.comparison.eyebrow') }}
          </p>

          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ t('webApps.comparison.title') }}
          </h2>

          <p class="mt-5 leading-relaxed text-slate-300">
            {{ t('webApps.comparison.description') }}
          </p>
        </div>

        <div class="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <table class="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr class="border-b border-white/10 bg-white/5">
                <th class="px-5 py-4 text-sm font-semibold text-slate-400">
                  {{ t('webApps.comparison.feature') }}
                </th>

                <th class="px-5 py-4 text-sm font-semibold text-white">
                  {{ t('webApps.comparison.landing') }}
                </th>

                <th class="px-5 py-4 text-sm font-semibold text-white">
                  {{ t('webApps.comparison.website') }}
                </th>

                <th class="px-5 py-4 text-sm font-semibold text-cyan-400">
                  {{ t('webApps.comparison.app') }}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr class="border-b border-white/5">
                <td class="px-5 py-4 text-sm text-slate-400">
                  {{ t('webApps.comparison.rows.objective.label') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.objective.landing') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.objective.website') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.objective.app') }}
                </td>
              </tr>

              <tr class="border-b border-white/5">
                <td class="px-5 py-4 text-sm text-slate-400">
                  {{ t('webApps.comparison.rows.content.label') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.content.landing') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.content.website') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.content.app') }}
                </td>
              </tr>

              <tr class="border-b border-white/5">
                <td class="px-5 py-4 text-sm text-slate-400">
                  {{ t('webApps.comparison.rows.interaction.label') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.interaction.landing') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.interaction.website') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.interaction.app') }}
                </td>
              </tr>

              <tr>
                <td class="px-5 py-4 text-sm text-slate-400">
                  {{ t('webApps.comparison.rows.example.label') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.example.landing') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.example.website') }}
                </td>

                <td class="px-5 py-4 text-sm text-slate-300">
                  {{ t('webApps.comparison.rows.example.app') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-6 py-20 md:py-28">
      <div
        class="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-8 text-center sm:p-12"
      >
        <ShieldCheck class="mx-auto h-9 w-9 text-cyan-400" />

        <h2 class="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('webApps.cta.title') }}
        </h2>

        <p class="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
          {{ t('webApps.cta.description') }}
        </p>

        <a
          href="https://wa.me/5491178293958?text=Hola%21%20Vi%20tu%20p%C3%A1gina%20y%20me%20interesa%20consultar%20por%20una%20aplicaci%C3%B3n%20web%20a%20medida."
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
        >
          {{ t('webApps.cta.button') }}
          <ArrowRight class="h-4 w-4" />
        </a>
      </div>
    </section>

    <!-- Other services -->
    <section class="border-t border-white/5 px-6 py-20 md:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {{ t('webApps.otherServices.eyebrow') }}
          </p>

          <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
            {{ t('webApps.otherServices.title') }}
          </h2>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2">
          <NuxtLink
            :to="localePath('/services/landing-pages')"
            class="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
          >
            <Globe class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

            <h3 class="mt-5 text-xl font-semibold">
              {{ t('webApps.otherServices.landing.title') }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ t('webApps.otherServices.landing.description') }}
            </p>

            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
              {{ t('webApps.otherServices.view') }}
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/services/web-sites')"
            class="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
          >
            <Globe class="h-7 w-7 text-cyan-400" :stroke-width="1.8" />

            <h3 class="mt-5 text-xl font-semibold">
              {{ t('webApps.otherServices.website.title') }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ t('webApps.otherServices.website.description') }}
            </p>

            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
              {{ t('webApps.otherServices.view') }}
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
