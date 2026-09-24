<script setup lang="ts">
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-vue-next'

const services = [
  {
    title: 'Sesiones individuales',
    description:
      'Un espacio de acompañamiento personalizado para trabajar sobre aquello que hoy necesitás.',
  },
  {
    title: 'Orientación profesional',
    description: 'Herramientas y acompañamiento para tomar decisiones y atravesar nuevas etapas.',
  },
  {
    title: 'Sesiones online',
    description:
      'Atención a distancia desde cualquier lugar, manteniendo un espacio cómodo y privado.',
  },
]
</script>

<template>
  <div class="w-full bg-slate-50 text-slate-800">
    <!-- Navigation -->
    <nav class="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <p class="text-sm font-semibold tracking-wide text-slate-900">LIC. MARTINA GARCÍA</p>

          <p class="mt-0.5 text-xs text-slate-500">Psicóloga · MP 12345</p>
        </div>

        <div class="hidden items-center gap-7 text-sm text-slate-500 md:flex">
          <a href="#sobre-mi" class="transition hover:text-slate-900"> Sobre mí </a>

          <a href="#servicios" class="transition hover:text-slate-900"> Servicios </a>

          <a href="#contacto" class="transition hover:text-slate-900"> Contacto </a>
        </div>

        <a
          href="#contacto"
          class="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 sm:inline-flex"
        >
          Consultar
        </a>
      </div>
    </nav>

    <!-- Hero -->
    <section class="overflow-hidden">
      <div class="mx-auto grid max-w-6xl md:min-h-170 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div class="px-6 py-20 md:py-24">
          <p class="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Psicología · Buenos Aires
          </p>

          <h1
            class="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl"
          >
            Un espacio para
            <span class="text-sky-700">vos.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Acompañamiento profesional en un espacio seguro, cálido y pensado para ayudarte a
            encontrar nuevas herramientas.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              class="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
            >
              <Calendar class="h-5 w-5" />
              Solicitar una consulta
            </a>

            <a
              href="#sobre-mi"
              class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400"
            >
              Conoceme
              <ArrowRight class="h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Hero image -->
        <div class="relative h-125 md:h-full">
          <img
            src="/images/demos/professional-hero.jpg"
            alt="Profesional en su espacio de trabajo"
            class="h-full w-full object-cover"
          />

          <div class="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent" />
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="sobre-mi" class="border-t border-slate-200 bg-white py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <!-- Portrait -->
        <div
          class="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-3xl bg-slate-100"
        >
          <img
            src="/images/demos/professional-portrait.jpg"
            alt="Retrato de la profesional"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Sobre mí</p>

          <h2
            class="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
          >
            Un acompañamiento cercano y profesional
          </h2>

          <p class="mt-6 max-w-2xl leading-relaxed text-slate-600">
            Soy Martina García, psicóloga especializada en acompañamiento individual. Mi objetivo es
            ofrecer un espacio donde puedas hablar, reflexionar y trabajar sobre aquello que te
            preocupa.
          </p>

          <p class="mt-4 max-w-2xl leading-relaxed text-slate-600">
            Cada proceso es diferente. Por eso construimos juntos un espacio adaptado a tus
            necesidades y a tu momento actual.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="flex gap-3">
              <Check class="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />

              <span class="text-sm text-slate-600"> Atención personalizada </span>
            </div>

            <div class="flex gap-3">
              <Check class="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />

              <span class="text-sm text-slate-600"> Modalidad presencial y online </span>
            </div>

            <div class="flex gap-3">
              <Check class="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />

              <span class="text-sm text-slate-600"> Espacio confidencial </span>
            </div>

            <div class="flex gap-3">
              <Check class="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />

              <span class="text-sm text-slate-600"> Horarios coordinados </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="servicios" class="border-t border-slate-200 bg-slate-50 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Servicios</p>

          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Encontrá el espacio que necesitás
          </h2>

          <p class="mt-4 leading-relaxed text-slate-600">
            Distintas modalidades de atención para adaptarnos a tu situación y a tus objetivos.
          </p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <article
            v-for="service in services"
            :key="service.title"
            class="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700"
            >
              <Sparkles class="h-5 w-5" />
            </div>

            <h3 class="mt-6 text-xl font-semibold text-slate-900">
              {{ service.title }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-slate-500">
              {{ service.description }}
            </p>

            <a
              href="#contacto"
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
            >
              Consultar
              <ArrowRight class="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- Approach -->
    <section class="bg-white py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Mi enfoque</p>

          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Un proceso pensado para vos
          </h2>

          <p class="mt-5 max-w-xl leading-relaxed text-slate-600">
            El primer paso es encontrar un espacio donde puedas sentirte cómodo. A partir de ahí,
            trabajamos de manera gradual sobre aquello que quieras abordar.
          </p>

          <div class="mt-8 space-y-5">
            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-semibold text-sky-700"
              >
                1
              </div>

              <div>
                <h3 class="font-semibold text-slate-900">Primer encuentro</h3>

                <p class="mt-1 text-sm leading-relaxed text-slate-500">
                  Conversamos sobre tu situación y qué estás buscando.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-semibold text-sky-700"
              >
                2
              </div>

              <div>
                <h3 class="font-semibold text-slate-900">Definimos objetivos</h3>

                <p class="mt-1 text-sm leading-relaxed text-slate-500">
                  Encontramos juntos los temas sobre los que querés trabajar.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-semibold text-sky-700"
              >
                3
              </div>

              <div>
                <h3 class="font-semibold text-slate-900">Comenzamos el proceso</h3>

                <p class="mt-1 text-sm leading-relaxed text-slate-500">
                  Construimos un espacio de trabajo adaptado a vos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative aspect-4/3 overflow-hidden rounded-3xl bg-slate-100">
          <img
            src="/images/demos/professional-office.jpg"
            alt="Espacio profesional de consulta"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contacto" class="border-t border-slate-200 bg-slate-900 py-24 text-white">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <MessageCircle class="mx-auto h-10 w-10 text-sky-300" />

        <h2 class="mt-6 text-4xl font-semibold tracking-tight">¿Querés empezar?</h2>

        <p class="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
          Si estás buscando un espacio de acompañamiento, podés escribirme para consultar
          disponibilidad y modalidad de atención.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-400"
          >
            <MessageCircle class="h-5 w-5" />
            Escribirme por WhatsApp
          </a>

          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <Mail class="h-5 w-5" />
            Enviar email
          </a>
        </div>

        <div class="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <span class="inline-flex items-center gap-2">
            <MapPin class="h-4 w-4 text-sky-300" />
            Buenos Aires
          </span>

          <span class="inline-flex items-center gap-2">
            <Clock class="h-4 w-4 text-sky-300" />
            Lunes a viernes
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
