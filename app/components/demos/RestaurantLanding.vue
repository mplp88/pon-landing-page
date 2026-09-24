<script setup lang="ts">
import {
  ArrowRight,
  Calendar,
  ChefHat,
  Clock,
  MapPin,
  MessageCircle,
  Utensils,
} from 'lucide-vue-next'

const dishes = [
  {
    name: 'Pasta del día',
    description: 'Pasta fresca con salsa de temporada y parmesano.',
    price: '$14.500',
  },
  {
    name: 'Risotto de hongos',
    description: 'Arroz carnaroli, hongos salteados y parmesano.',
    price: '$16.000',
  },
  {
    name: 'Pesca de estación',
    description: 'Pesca fresca acompañada de vegetales asados.',
    price: '$19.500',
  },
]
</script>

<template>
  <div class="w-full bg-stone-50 text-stone-900">
    <!-- Hero -->
    <section class="relative min-h-[720px] overflow-hidden">
      <img
        src="/images/demos/restaurant-hero.jpg"
        alt="Plato de pasta servido en un restaurante"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div
        class="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/20"
      />

      <div class="relative mx-auto flex min-h-[720px] max-w-6xl items-center px-6 py-24">
        <div class="max-w-2xl text-white">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Cocina · Buenos Aires
          </p>

          <h1 class="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Sabores que
            <span class="text-orange-300">merecen quedarse.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-stone-200">
            Cocina de estación, ingredientes seleccionados y platos preparados para disfrutar sin
            apuro.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="#reservas"
              class="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-semibold text-stone-950 transition hover:bg-orange-300"
            >
              <Calendar class="h-5 w-5" />
              Reservar una mesa
            </a>

            <a
              href="#menu"
              class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-black/10 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/10"
            >
              Ver menú
              <ArrowRight class="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="border-b border-stone-200 py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Nuestra cocina
          </p>

          <h2 class="mt-3 text-3xl font-semibold md:text-4xl">Una mesa para disfrutar</h2>

          <p class="mt-5 max-w-xl leading-relaxed text-stone-600">
            Creemos que comer bien es mucho más que un buen plato. Es compartir, descubrir nuevos
            sabores y disfrutar de cada momento.
          </p>

          <div class="mt-8 flex items-center gap-3 text-sm font-medium">
            <ChefHat class="h-5 w-5 text-orange-700" />
            <span>Ingredientes frescos · Cocina artesanal</span>
          </div>
        </div>

        <div class="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <img
            src="/images/demos/restaurant-interior.jpg"
            alt="Interior de un restaurante"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Menu -->
    <section id="menu" class="bg-stone-100 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mb-12 max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Nuestro menú
          </p>

          <h2 class="mt-3 text-3xl font-semibold md:text-4xl">Algunos de nuestros platos</h2>

          <p class="mt-4 leading-relaxed text-stone-600">
            Una selección de platos preparados con productos frescos y de temporada.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="dish in dishes"
            :key="dish.name"
            class="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
            >
              <Utensils class="h-5 w-5" />
            </div>

            <h3 class="text-xl font-semibold">
              {{ dish.name }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-stone-500">
              {{ dish.description }}
            </p>

            <p class="mt-6 text-lg font-bold text-orange-700">
              {{ dish.price }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div class="relative aspect-square overflow-hidden rounded-3xl">
          <img
            src="/images/demos/restaurant-dish.jpg"
            alt="Plato servido en el restaurante"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            La experiencia
          </p>

          <h2 class="mt-3 text-3xl font-semibold md:text-4xl">Cocinamos para que vuelvas</h2>

          <p class="mt-5 leading-relaxed text-stone-600">
            Un ambiente cálido, una atención cercana y una carta que cambia para aprovechar lo mejor
            de cada temporada.
          </p>

          <div class="mt-8 space-y-5">
            <div class="flex gap-4">
              <ChefHat class="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />

              <div>
                <p class="font-semibold">Cocina artesanal</p>
                <p class="mt-1 text-sm text-stone-500">Cada plato preparado con dedicación.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <Clock class="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />

              <div>
                <p class="font-semibold">De martes a domingo</p>
                <p class="mt-1 text-sm text-stone-500">Almuerzo y cena.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <MapPin class="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />

              <div>
                <p class="font-semibold">En el corazón de Buenos Aires</p>
                <p class="mt-1 text-sm text-stone-500">Una ubicación pensada para encontrarnos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="bg-stone-900 py-20 text-white">
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:grid-cols-2"
        >
          <div>
            <MapPin class="h-7 w-7 text-orange-300" />

            <h2 class="mt-5 text-2xl font-semibold">Visitá nuestro restaurante</h2>

            <p class="mt-3 text-stone-400">
              Av. Siempre Viva 742<br />
              Buenos Aires, Argentina
            </p>

            <div class="mt-6 flex items-center gap-3 text-sm text-stone-400">
              <Clock class="h-4 w-4 text-orange-300" />
              Martes a domingo · 12:00 a 00:00
            </div>
          </div>

          <div class="relative min-h-52 overflow-hidden rounded-2xl">
            <img
              src="/images/demos/location.jpg"
              alt="Exterior del restaurante"
              class="h-full min-h-52 w-full object-cover"
            />

            <div class="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="reservas" class="bg-stone-950 py-24 text-white">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <MessageCircle class="mx-auto h-10 w-10 text-orange-300" />

        <h2 class="mt-6 text-4xl font-semibold">¿Reservamos tu mesa?</h2>

        <p class="mt-4 text-stone-400">Escribinos y asegurá tu lugar para la próxima ocasión.</p>

        <a
          href="#"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-7 py-3 font-semibold text-stone-950 transition hover:bg-orange-300"
        >
          <MessageCircle class="h-5 w-5" />
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>
