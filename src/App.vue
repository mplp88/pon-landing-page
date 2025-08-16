<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20"
    >
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div
            class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            {{ developerName }} - Dev Fullstack
          </div>
          <div class="hidden md:flex space-x-8">
            <a
              href="#home"
              @click="scrollTo('home')"
              class="hover:text-blue-400 transition-colors cursor-pointer"
              >Inicio</a
            >
            <a
              href="#projects"
              @click="scrollTo('projects')"
              class="hover:text-blue-400 transition-colors cursor-pointer"
              >Proyectos</a
            >
            <a
              href="#contact"
              @click="scrollTo('contact')"
              class="hover:text-blue-400 transition-colors cursor-pointer"
              >Contacto</a
            >
          </div>
          <button @click="toggleMobileMenu" class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-2">
          <a
            href="#home"
            @click="scrollTo('home')"
            class="block hover:text-blue-400 transition-colors"
            >Inicio</a
          >
          <a
            href="#projects"
            @click="scrollTo('projects')"
            class="block hover:text-blue-400 transition-colors"
            >Projectos</a
          >
          <a
            href="#contact"
            @click="scrollTo('contact')"
            class="block hover:text-blue-400 transition-colors"
            >Contacto</a
          >
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      id="home"
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div class="mb-8">
          <div
            class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1"
          >
            <div class="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <svg
                class="w-16 h-16 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <h1
          class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
        >
          {{ developerName }}
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
          {{ tagline }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="scrollTo('projects')"
            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
          >
            Mirá mis trabajos
          </button>
          <button
            @click="scrollTo('contact')"
            class="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
          >
            Ponete en contacto
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="min-h-screen py-20 relative">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold pb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
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
              class="aspect-video bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 class="text-xl font-bold mb-2 text-blue-300">{{ project.title }}</h3>
            <p class="text-slate-400 mb-4 leading-relaxed">{{ project.description }}</p>
            <!-- <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div> -->
            <div class="flex gap-4">
              <a
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
              </a>
              <!-- <a
                :href="project.githubUrl"
                target="_blank"
                class="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Code
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="min-h-screen py-20 relative">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold pb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            Pongamonos en contacto
          </h2>
          <p class="text-xl text-slate-400">Listo para dar vida a tus ideas</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-blue-300">Email</h3>
                <p class="text-slate-400">
                  <a :href="'mailto:' + contactInfo.email">{{ contactInfo.email }}</a>
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-blue-300">Location</h3>
                <p class="text-slate-400">{{ contactInfo.location }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              >
                <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.icon"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-blue-300 mb-2">Nombre</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-300 mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-300 mb-2">Asunto</label>
              <input
                v-model="form.subject"
                type="text"
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-300 mb-2">Mensaje</label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-slate-700">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p class="text-slate-400">© 2025 {{ developerName }}.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const mobileMenuOpen = ref(false)
const isSubmitting = ref(false)

const developerName = ref('Martín Ponce')
const tagline = ref('Desarrollador Web')

const contactInfo = reactive({
  email: 'martin@martinponce.com.ar',
  location: 'Buenos Aires, Argentina',
})

const projects = ref([
  {
    id: 1,
    title: 'Maternidad y emociones',
    description: 'Página web profesional para presentación y publicación de entradas de blog.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    image: '/images/maternidad-y-emociones.png',
    liveUrl: 'https://maternidadyemociones.com.ar',
  },
])

// const socialLinks = ref([
//   {
//     name: 'GitHub',
//     url: 'https://github.com',
//     icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
//   },
//   {
//     name: 'LinkedIn',
//     url: 'https://linkedin.com',
//     icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
//   },
//   {
//     name: 'Twitter',
//     url: 'https://twitter.com',
//     icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
//   },
// ])

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

const submitForm = async () => {
  isSubmitting.value = true

  const res = await fetch('https://portfolio-api.martinponce.com.ar/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
  if (!res.ok) {
    alert(
      `Error enviando el contacto. Por favor, intente más tarde o envíe un email a ${contactInfo.email}`,
    )
    console.error('Error submitting form:', res.statusText)
    isSubmitting.value = false
    return
  }
  const data = await res.json()
  console.log(data)

  Object.keys(form).forEach((key) => {
    form[key] = ''
  })

  isSubmitting.value = false
  alert('¡Mensaje enviado correctamente!')
}
</script>

<style>
@import 'tailwindcss';

html {
  scroll-behavior: smooth;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
