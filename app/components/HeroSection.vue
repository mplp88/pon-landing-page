<script setup lang="ts">
const contactInfo = reactive({
  email: 'martin@martinponce.com.ar',
  location: 'Buenos Aires, Argentina',
  phone: '1178293958',
})

const { t } = useI18n()

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
  >
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
    />

    <div class="relative z-10 mx-auto max-w-5xl text-center">
      <!-- Eyebrow -->
      <p class="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {{ t('hero.eyebrow') }}
      </p>

      <!-- Main title -->
      <h1
        class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {{ t('hero.title.before') }}
        <span
          class="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
        >
          {{ t('hero.title.highlight') }}
        </span>
      </h1>

      <!-- Tagline -->
      <p
        class="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl"
      >
        {{ t('hero.description') }}
      </p>

      <!-- CTA -->
      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <button
          @click="scrollTo('services')"
          class="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold transition-all hover:scale-105 hover:from-blue-700 hover:to-cyan-700 md:px-8 md:py-4"
        >
          {{ t('hero.cta.services') }}
        </button>

        <a
          :href="
            'https://wa.me/549' +
            contactInfo.phone +
            '?text=' +
            encodeURIComponent(t('hero.cta.whatsappMessage'))
          "
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border-2 border-blue-500 px-6 py-3 font-semibold transition-all hover:bg-blue-500/10 md:px-8 md:py-4"
        >
          {{ t('hero.cta.whatsapp') }}
        </a>
      </div>

      <!-- Small trust message -->
      <p class="mt-5 text-sm text-slate-400">
        {{ t('hero.trust') }}
      </p>
    </div>
  </section>
</template>
