<script setup lang="ts">
import { useToast } from '~/composables/useToast'
import ToastProvider from './ToastProvider.vue'
import { Mail, MessageCircle, MapPin } from 'lucide-vue-next'

const { addToast, ToastVariant } = useToast()
const { t } = useI18n()

const contactInfo = {
  email: 'martin@martinponce.com.ar',
  location: 'Buenos Aires, Argentina',
  phone: '1178293958',
}

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const res = await fetch('https://portfolio-api.martinponce.com.ar/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      console.error('Error submitting form:', res.statusText)

      addToast({
        title: t('contact.form.errorTitle'),
        description: t('contact.form.errorDescription', {
          email: contactInfo.email,
        }),
        variant: ToastVariant.destructive,
      })

      return
    }

    const data = await res.json()
    console.log(data)

    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form] = ''
    })

    addToast({
      title: t('contact.form.successTitle'),
      description: t('contact.form.successDescription'),
      variant: ToastVariant.success,
    })
  } catch (error) {
    console.error('Error submitting form:', error)

    addToast({
      title: t('contact.form.errorTitle'),
      description: t('contact.form.errorDescription', {
        email: contactInfo.email,
      }),
      variant: ToastVariant.destructive,
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="relative px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span
          class="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          {{ t('contact.eyebrow') }}
        </span>

        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {{ t('contact.title') }}
        </h2>

        <p class="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          {{ t('contact.description') }}
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <!-- Contact information -->
        <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">
          <h3 class="text-xl font-semibold text-white">
            {{ t('contact.info.title') }}
          </h3>

          <p class="mt-3 text-sm leading-6 text-slate-300">
            {{ t('contact.info.description') }}
          </p>

          <div class="mt-8 space-y-6">
            <!-- Email -->
            <a :href="'mailto:' + contactInfo.email" class="group flex items-center gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10"
              >
                <Mail class="h-5 w-5 text-cyan-400" :stroke-width="1.8" />
              </div>

              <div>
                <h4
                  class="text-sm font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200"
                >
                  {{ t('contact.info.email') }}
                </h4>
                <p class="mt-1 text-sm text-slate-400">
                  {{ contactInfo.email }}
                </p>
              </div>
            </a>

            <!-- WhatsApp -->
            <a
              :href="
                'https://wa.me/549' +
                contactInfo.phone +
                '?text=' +
                encodeURIComponent(t('contact.info.whatsappMessage'))
              "
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-4"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10"
              >
                <MessageCircle class="h-5 w-5 text-cyan-400" :stroke-width="1.8" />
              </div>

              <div>
                <h4
                  class="text-sm font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200"
                >
                  {{ t('contact.info.whatsapp') }}
                </h4>
                <p class="mt-1 text-sm text-slate-400">
                  {{ contactInfo.phone }}
                </p>
              </div>
            </a>

            <!-- Location -->
            <div class="flex items-center gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10"
              >
                <MapPin class="h-5 w-5 text-cyan-400" :stroke-width="1.8" />
              </div>

              <div>
                <h4 class="text-sm font-semibold text-cyan-300">
                  {{ t('contact.info.location') }}
                </h4>
                <p class="mt-1 text-sm text-slate-400">
                  {{ contactInfo.location }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <form
          @submit.prevent="submitForm"
          class="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8"
        >
          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <label for="contact-name" class="mb-2 block text-sm font-medium text-cyan-300">
                {{ t('contact.form.name') }}
              </label>

              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                required
                autocomplete="name"
                class="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/50"
                :placeholder="t('contact.form.namePlaceholder')"
              />
            </div>

            <div>
              <label for="contact-email" class="mb-2 block text-sm font-medium text-cyan-300">
                {{ t('contact.form.email') }}
              </label>

              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                class="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/50"
                :placeholder="t('contact.form.emailPlaceholder')"
              />
            </div>
          </div>

          <div class="mt-6">
            <label for="contact-subject" class="mb-2 block text-sm font-medium text-cyan-300">
              {{ t('contact.form.subject') }}
            </label>

            <input
              id="contact-subject"
              v-model="form.subject"
              type="text"
              class="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/50"
              :placeholder="t('contact.form.subjectPlaceholder')"
            />
          </div>

          <div class="mt-6">
            <label for="contact-message" class="mb-2 block text-sm font-medium text-cyan-300">
              {{ t('contact.form.message') }}
            </label>

            <textarea
              id="contact-message"
              v-model="form.message"
              rows="6"
              required
              class="w-full resize-none rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/50"
              :placeholder="t('contact.form.messagePlaceholder')"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="mt-6 w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold transition-all hover:scale-[1.01] hover:from-blue-700 hover:to-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
          </button>
        </form>
      </div>
    </div>
  </section>

  <ToastProvider></ToastProvider>
</template>
