<script setup>
const contactInfo = reactive({
  email: 'martin@martinponce.com.ar',
  location: 'Buenos Aires, Argentina',
  phone: '1178293958',
})

const mainTitle = ref('Páginas Web para Negocios que Venden')
const tagline = ref('Mostrá tus productos online y recibí consultas por WhatsApp en minutos')
const location = ref('Desarrollo web para negocios en Buenos Aires, Argentina')

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}
</script>

<template>
  <!-- Hero Section -->
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-20"
  >
    <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
      <!-- Icon (oculto en mobile para ahorrar espacio) -->
      <div class="hidden sm:block mb-8">
        <div
          class="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 p-1"
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

      <!-- Title -->
      <h1
        class="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
      >
        {{ mainTitle }}
      </h1>

      <!-- Tagline -->
      <p class="text-lg md:text-2xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
        {{ tagline }}
      </p>

      <!-- SEO / ubicación -->
      <p class="text-xs text-slate-400 mb-6">
        {{ location }}
      </p>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <button
          @click="scrollTo('services')"
          class="px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
        >
          Ver cómo funciona
        </button>

        <a
          :href="
            'https://wa.me/549' +
            contactInfo.phone +
            '?text=' +
            encodeURIComponent('Hola! Vi tu página y me interesa tener una web para mi negocio.')
          "
          target="_blank"
          class="px-6 py-3 md:px-8 md:py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
        >
          Hablemos por WhatsApp
        </a>
      </div>

      <!-- Confianza -->
      <p class="text-sm text-slate-400 mt-4">Entrega en 72 hs • Sin complicaciones</p>
    </div>
  </section>
</template>
