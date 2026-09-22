<script setup>
const switchLocalePath = useSwitchLocalePath()
const { locale, t } = useI18n()

const brandName = ref('Martín Ponce')
const mobileMenuOpen = ref(false)

const localePath = useLocalePath()
const route = useRoute()

const navigateToSection = async (elementId) => {
  mobileMenuOpen.value = false

  const homePath = localePath('/')

  if (route.path === homePath) {
    const element = document.getElementById(elementId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    return
  }

  await navigateTo(`${homePath}#${elementId}`)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 z-50 w-full border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-md">
    <div class="mx-auto max-w-6xl px-6 py-4">
      <div class="relative flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#"
          @click.prevent="navigateToSection('home')"
          class="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent"
        >
          {{ brandName }}
        </a>

        <!-- Desktop Menu -->
        <div class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          <a
            href="#"
            @click.prevent="navigateToSection('home')"
            class="cursor-pointer transition-colors hover:text-cyan-400"
          >
            {{ t('header.home') }}
          </a>

          <a
            href="#"
            @click.prevent="navigateToSection('services')"
            class="cursor-pointer transition-colors hover:text-cyan-400"
          >
            {{ t('header.services') }}
          </a>

          <a
            href="#"
            @click.prevent="navigateToSection('about')"
            class="cursor-pointer transition-colors hover:text-cyan-400"
          >
            {{ t('header.about') }}
          </a>

          <a
            href="#"
            @click.prevent="navigateToSection('projects')"
            class="cursor-pointer transition-colors hover:text-cyan-400"
          >
            {{ t('header.projects') }}
          </a>

          <a
            href="#"
            @click.prevent="navigateToSection('contact')"
            class="cursor-pointer transition-colors hover:text-cyan-400"
          >
            {{ t('header.contact') }}
          </a>

          <!-- Language Switcher -->
        </div>
        <div
          class="hidden items-center rounded-lg border border-white/10 bg-white/5 p-1 text-sm md:flex"
        >
          <NuxtLink
            :to="switchLocalePath('es')"
            class="rounded-md px-2.5 py-1 font-medium transition-all"
            :class="
              locale === 'es' ? 'bg-cyan-400/15 text-cyan-300' : 'text-slate-400 hover:text-white'
            "
          >
            ES
          </NuxtLink>

          <NuxtLink
            :to="switchLocalePath('en')"
            class="rounded-md px-2.5 py-1 font-medium transition-all"
            :class="
              locale === 'en' ? 'bg-cyan-400/15 text-cyan-300' : 'text-slate-400 hover:text-white'
            "
          >
            EN
          </NuxtLink>
        </div>

        <!-- Mobile Button -->
        <button
          @click="toggleMobileMenu"
          class="rounded-lg p-2 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Abrir menú"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="mt-4 space-y-2 border-t border-white/10 pb-2 pt-4 md:hidden"
      >
        <a
          href="#"
          @click.prevent="navigateToSection('home')"
          class="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-cyan-400"
        >
          Inicio
        </a>

        <a
          href="#"
          @click.prevent="navigateToSection('services')"
          class="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-cyan-400"
        >
          Servicios
        </a>

        <a
          href="#"
          @click.prevent="navigateToSection('about')"
          class="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-cyan-400"
        >
          Sobre mí
        </a>

        <a
          href="#"
          @click.prevent="navigateToSection('projects')"
          class="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-cyan-400"
        >
          Proyectos
        </a>

        <a
          href="#"
          @click.prevent="navigateToSection('contact')"
          class="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-cyan-400"
        >
          Contacto
        </a>

        <!-- Mobile Language Switcher -->
        <div class="flex gap-2 px-3 pt-3">
          <NuxtLink
            :to="switchLocalePath('es')"
            class="rounded-lg border px-4 py-2 text-sm font-medium transition-all"
            :class="
              locale === 'es'
                ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
                : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
            "
          >
            Español
          </NuxtLink>

          <NuxtLink
            :to="switchLocalePath('en')"
            class="rounded-lg border px-4 py-2 text-sm font-medium transition-all"
            :class="
              locale === 'en'
                ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
                : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
            "
          >
            English
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
