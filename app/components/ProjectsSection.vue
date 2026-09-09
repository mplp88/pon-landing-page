<script setup>
const projects = ref([
  {
    id: 1,
    title: 'Maternidad y emociones',
    description: 'Página web profesional para presentación y publicación de entradas de blog.',
    image: '/images/maternidad-y-emociones.png',
    liveUrl: 'https://maternidadyemociones.com.ar',
  },
])
</script>

<template>
  <!-- Projects Section -->
  <section id="projects" class="min-h-screen py-20 relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold pb-4 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Proyectos Destacados
        </h2>
        <p class="text-xl text-slate-400">Estos son algunos de mis últimos trabajos</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div
            class="aspect-video bg-linear-to-br from-blue-900 to-slate-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 class="text-xl font-bold mb-2 text-blue-300">
            {{ project.title }}
          </h3>
          <p class="text-slate-400 mb-4 leading-relaxed">
            {{ project.description }}
          </p>
          <div class="flex gap-4">
            <NuxtLink
              :href="project.liveUrl"
              target="_blank"
              class="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
              Página web
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
