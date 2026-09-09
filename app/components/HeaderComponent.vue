<script setup>
const brandName = ref('Martín Ponce')
const mobileMenuOpen = ref(false)

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <!-- Navigation -->
  <nav class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
    <div class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div
          class="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          {{ brandName }}
        </div>
        <div class="hidden md:flex space-x-8">
          <a
            href="#home"
            @click="scrollTo('home')"
            class="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#services"
            @click="scrollTo('services')"
            class="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Servicios
          </a>
          <a
            href="#projects"
            @click="scrollTo('projects')"
            class="hover:text-blue-400 transition-colors cursor-pointer"
            >Proyectos
          </a>
          <a
            href="#contact"
            @click="scrollTo('contact')"
            class="hover:text-blue-400 transition-colors cursor-pointer"
            >Contacto
          </a>
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
        >
          Inicio
        </a>
        <a
          href="#services"
          @click="scrollTo('services')"
          class="block hover:text-blue-400 transition-colors"
        >
          Servicios
        </a>
        <a
          href="#projects"
          @click="scrollTo('projects')"
          class="block hover:text-blue-400 transition-colors"
          >Proyectos
        </a>
        <a
          href="#contact"
          @click="scrollTo('contact')"
          class="block hover:text-blue-400 transition-colors"
          >Contacto
        </a>
      </div>
    </div>
  </nav>
</template>
