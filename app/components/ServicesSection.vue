<script setup>
const contactInfo = reactive({
  email: 'martin@martinponce.com.ar',
  location: 'Buenos Aires, Argentina',
  phone: '1178293958',
})

const services = ref([
  {
    id: 1,
    title: 'Landing para ventas por WhatsApp',
    description:
      'Ideal para negocios que quieren mostrar productos y recibir consultas directas. Entrega en 72hs.',
    price: 'Desde $130.000',
    type: 'landing',
    cta: {
      label: 'Ver demo',
      url: 'https://demo-landing.martinponce.com.ar',
    },
    highlight: true,
  },
  {
    id: 2,
    title: 'Tienda online (E-commerce)',
    description: 'Vendé tus productos con carrito de compras y medios de pago integrados.',
    price: 'Desde $300.000',
    type: 'ecommerce',
    cta: {
      label: 'Consultar',
      url: `https://wa.me/549${contactInfo.phone}?text=Hola,%20quiero%20una%20tienda%20online`,
    },
  },
  {
    id: 3,
    title: 'Desarrollo a medida',
    description: 'Sistemas personalizados, automatización e integraciones según tu negocio.',
    price: 'A medida',
    type: 'custom',
    cta: {
      label: 'Contame tu idea',
      url: `https://wa.me/549${contactInfo.phone}?text=Hola,%20tengo%20una%20idea%20para%20un%20sistema`,
    },
  },
])
</script>

<template>
  <!-- Services Section -->
  <section id="services" class="min-h-screen py-20 relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold pb-4 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Servicios
        </h2>
        <p class="text-xl text-slate-400">
          Soluciones simples y efectivas para que tu negocio tenga presencia online y genere más
          consultas
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a
          :href="service.cta.url"
          target="_blank"
          v-for="service in services"
          :key="service.id"
          :class="[
            'group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105',
            service.highlight ? 'border-blue-500 shadow-lg scale-105' : 'border-slate-700',
          ]"
        >
          <h3 class="text-xl font-bold mb-2 text-blue-300">
            {{ service.title }}
          </h3>
          <p class="text-slate-400 mb-4 leading-relaxed">
            {{ service.description }}
          </p>
          <p class="text-lg font-semibold text-white">{{ service.price }}</p>
          <div class="flex gap-4">
            <span
              class="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              {{ service.cta.label }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
