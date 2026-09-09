<script setup>
import { useToast } from '~/composables/useToast'
import ToastProvider from './shared/ToastProvider.vue'

const { addToast, ToastVariant } = useToast()

const contactInfo = reactive({
  email: 'martin@martinponce.com.ar',
  location: 'Buenos Aires, Argentina',
  phone: '1178293958',
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

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
    addToast({
      title: 'Error',
      description: `Error enviando el contacto. Por favor, intente más tarde o envíe un email a ${contactInfo.email}`,
      variant: ToastVariant.destructive,
    })
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
  addToast({
    title: 'Éxito',
    description: '¡Mensaje enviado correctamente!',
    variant: ToastVariant.success,
  })
}
</script>

<template>
  <!-- Contact Section -->
  <section id="contact" class="min-h-screen py-20 relative">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold pb-4 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
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
            <NuxtLink :href="'mailto:' + contactInfo.email">
              <div>
                <h3 class="text-lg font-semibold text-blue-300">Email</h3>
                <p class="text-slate-400">
                  {{ contactInfo.email }}
                </p>
              </div>
            </NuxtLink>
          </div>
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
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.91l-1.27 1.27a16 16 0 006.586 6.586l1.27-1.27a2 2 0 011.91-.45l2.064.516A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <NuxtLink
                :href="
                  'https://wa.me/549' +
                  contactInfo.phone +
                  '?text=' +
                  encodeURIComponent(
                    'Hola! Vi tu página y me interesa tener una web para mi negocio.',
                  )
                "
                target="_blank"
              >
                <div>
                  <h3 class="text-lg font-semibold text-blue-300">Teléfono / Whatsapp</h3>
                  <p class="text-slate-400">
                    {{ contactInfo.phone }}
                  </p>
                </div>
              </NuxtLink>
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
              <h3 class="text-lg font-semibold text-blue-300">Ubicación</h3>
              <p class="text-slate-400">{{ contactInfo.location }}</p>
            </div>
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
            class="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
          </button>
        </form>
      </div>
    </div>
  </section>

  <ToastProvider></ToastProvider>
</template>
