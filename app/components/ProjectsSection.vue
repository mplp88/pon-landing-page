<script setup lang="ts">
const { t } = useI18n()

const projects = [
  {
    id: 'maternidad',
    title: 'Maternidad y Emociones',
    descriptionKey: 'maternity',
    image: '/images/maternidad-y-emociones.png',
    liveUrl: 'https://maternidadyemociones.com.ar',
  },
]
</script>

<template>
  <section id="projects" class="relative px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span
          class="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          {{ t('projects.eyebrow') }}
        </span>

        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {{ t('projects.title') }}
        </h2>

        <p class="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          {{ t('projects.description') }}
        </p>
      </div>

      <!-- Projects -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.id"
          class="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
        >
          <!-- Image -->
          <div class="aspect-video overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white">
              {{ project.title }}
            </h3>

            <p class="mt-3 text-sm leading-6 text-slate-300">
              {{ t(`projects.items.${project.descriptionKey}`) }}
            </p>

            <!-- CTA -->
            <a
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              {{ t('projects.viewProject') }}

              <svg
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
