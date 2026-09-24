<script setup lang="ts">
import { Calendar, Clock, MapPin, MessageCircle, Scissors, Star } from 'lucide-vue-next'

const services = [
  {
    name: 'Corte clásico',
    description: 'Corte personalizado y terminación con máquina o tijera.',
    price: '$12.000',
  },
  {
    name: 'Corte + barba',
    description: 'Corte de cabello más perfilado y arreglo de barba.',
    price: '$16.000',
  },
  {
    name: 'Barba',
    description: 'Perfilado, recorte y terminación.',
    price: '$8.000',
  },
]
</script>

<template>
  <div class="w-full bg-stone-950 text-stone-100">
    <!-- Hero -->
    <section class="relative min-h-180 overflow-hidden">
      <!-- Hero image -->
      <img
        src="/images/demos/barber-hero.jpg"
        alt="Barbero trabajando"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-linear-to-r from-stone-950 via-stone-950/80 to-stone-950/30"
      />

      <div class="relative mx-auto flex min-h-180 max-w-6xl items-center px-6 py-24">
        <div class="max-w-2xl">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Barbería · Buenos Aires
          </p>

          <h1 class="text-5xl font-bold tracking-tight md:text-7xl">
            Estilo que
            <span class="text-amber-400">habla por vos.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
            Cortes clásicos, estilos modernos y una experiencia pensada para que salgas como querés.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="#reservar"
              class="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
            >
              <Calendar class="h-5 w-5" />
              Reservar turno
            </a>

            <a
              href="#servicios"
              class="rounded-xl border border-white/20 bg-black/20 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="servicios" class="border-t border-white/5 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mb-12 max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">Servicios</p>

          <h2 class="mt-3 text-3xl font-bold md:text-4xl">Elegí tu próximo estilo</h2>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="service in services"
            :key="service.name"
            class="rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-amber-400/30 hover:bg-white/5"
          >
            <div
              class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400"
            >
              <Scissors class="h-5 w-5" />
            </div>

            <h3 class="text-xl font-semibold">
              {{ service.name }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-stone-400">
              {{ service.description }}
            </p>

            <p class="mt-6 text-lg font-bold text-amber-400">
              {{ service.price }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="border-t border-white/5 py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">
            La experiencia
          </p>

          <h2 class="mt-3 text-3xl font-bold md:text-4xl">Más que un corte</h2>

          <p class="mt-5 leading-relaxed text-stone-400">
            Un espacio tranquilo, atención personalizada y profesionales que se toman el tiempo
            necesario para entender qué estás buscando.
          </p>

          <div class="mt-8 space-y-4">
            <div class="flex gap-3">
              <Star class="mt-1 h-5 w-5 shrink-0 text-amber-400" />

              <span>Atención personalizada</span>
            </div>

            <div class="flex gap-3">
              <Clock class="mt-1 h-5 w-5 shrink-0 text-amber-400" />

              <span>Turnos sin esperas</span>
            </div>

            <div class="flex gap-3">
              <Scissors class="mt-1 h-5 w-5 shrink-0 text-amber-400" />

              <span>Profesionales especializados</span>
            </div>
          </div>
        </div>

        <!-- Secondary image -->
        <div class="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
          <img
            src="/images/demos/barber-detail.jpg"
            alt="Detalle de un corte de cabello"
            class="h-full w-full object-cover"
          />

          <div class="absolute inset-0 bg-linear-to-t from-stone-950/40 to-transparent" />
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="border-t border-white/5 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-8 rounded-3xl border border-white/10 bg-white/3 p-8 md:grid-cols-2">
          <div>
            <MapPin class="h-7 w-7 text-amber-400" />

            <h2 class="mt-5 text-2xl font-bold">Encontranos</h2>

            <p class="mt-3 text-stone-400">
              Av. Siempre Viva 742<br />
              Buenos Aires, Argentina
            </p>
          </div>

          <!-- Location image / map placeholder -->
          <div class="relative min-h-48 overflow-hidden rounded-2xl">
            <img
              src="/images/demos/location.jpg"
              alt="Interior de la barbería"
              class="h-full min-h-48 w-full object-cover"
            />

            <div class="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="reservar" class="border-t border-white/5 py-24">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <MessageCircle class="mx-auto h-10 w-10 text-amber-400" />

        <h2 class="mt-6 text-4xl font-bold">¿Listo para tu próximo corte?</h2>

        <p class="mt-4 text-stone-400">Escribinos por WhatsApp y reservá tu turno.</p>

        <a
          href="#"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
        >
          <MessageCircle class="h-5 w-5" />
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>
