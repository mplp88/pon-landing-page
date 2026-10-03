<script setup lang="ts">
import {
  ArrowRight,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  ShoppingBag,
  Star,
  Store,
  Utensils,
  X,
} from 'lucide-vue-next'

const selectedDish = ref<string | null>(null)
const showModal = ref<boolean>(false)

const dishes = [
  {
    name: 'Sándwich de vacío',
    description: 'Vacío a la parrilla, servido en pan con todo el sabor de una buena parrilla.',
    price: '$12000',
  },
  {
    name: 'Sándwich de bondiola',
    description: 'Bondiola a la parrilla, abundante y lista para disfrutar.',
    price: '$10000',
  },
  {
    name: 'Choripán',
    description: 'Un clásico de la parrilla, con chorizo a la parrilla y pan.',
    price: '$8000',
  },
]

const reviews = [
  {
    text: 'Los mejores sánguches de bondiola.',
    author: 'Cliente',
  },
  {
    text: 'Una parrilla para volver una y otra vez.',
    author: 'Cliente',
  },
  {
    text: 'Muy buenos sánguches y excelente atención.',
    author: 'Cliente',
  },
]

const locations = [
  {
    name: 'Villa Madero',
    address: 'Millán 151, Villa Madero',
    phone: '1140517220',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Millán+151,+Villa+Madero,+Buenos+Aires',
  },
  {
    name: 'Mercado Central',
    address: 'De la Flor 144, Tapiales',
    phone: '1150377460',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=De+La+Flor+144,+Tapiales+Madero,+Buenos+Aires',
  },
]

const openOrderModal = (dishName: string | null) => {
  showModal.value = true
  selectedDish.value = dishName
}

const orderOnWhatsApp = (location: (typeof locations)[number]) => {
  const message = `Hola Parris Hilton, quiero ${selectedDish.value ? `pedir ${selectedDish.value}` : 'hacer un pedido'}.`

  window.open(`https://wa.me/54${location.phone}?text=${encodeURIComponent(message)}`, '_blank')

  showModal.value = false
  selectedDish.value = null
}
</script>

<template>
  <div class="w-full bg-stone-50 text-stone-900">
    <!-- Hero -->
    <section class="relative min-h-180 overflow-hidden">
      <img
        src="/images/demos/parris-hilton/hero.jpg"
        alt="Sándwich de carne a la parrilla de Parris Hilton"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div
        class="absolute inset-0 bg-linear-to-r from-stone-950/95 via-stone-950/65 to-stone-950/20"
      />

      <div class="relative mx-auto flex min-h-180 max-w-6xl items-center px-6 py-24">
        <div class="max-w-3xl text-white">
          <!-- Marca -->
          <p class="mb-5 text-lg font-black uppercase tracking-[0.3em] text-orange-300 md:text-xl">
            Parris Hilton
          </p>

          <!-- Slogan -->
          <h1 class="text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
            No lo decimos nosotros.
            <span class="text-orange-300">Lo dicen todos.</span>
          </h1>

          <p class="mt-6 text-2xl font-black uppercase leading-tight text-white md:text-4xl">
            La mejor parrilla
            <br class="hidden md:block" />
            del Mercado.
          </p>

          <p class="mt-5 max-w-xl text-lg leading-relaxed text-stone-200">
            Parrilla, asado argentino y sánguches para disfrutar en cualquier ocasión.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              class="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-stone-950 transition hover:bg-orange-300"
            >
              Ver menú
              <ArrowRight class="h-4 w-4" />
            </a>

            <a
              href="#ubicaciones"
              class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-black/10 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/10"
            >
              <MapPin class="h-5 w-5" />
              Encontranos
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="border-b border-stone-200 py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
            Parrilla · Asado Argentino
          </p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Donde el hambre se toma en serio</h2>

          <p class="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
            Buena carne, parrilla encendida y sánguches hechos para disfrutar hasta el último
            bocado. En Parris Hilton podés disfrutar en nuestro salón, pedir para llevar o consultar
            por nuestro servicio de catering.
          </p>

          <div class="mt-8 flex items-center gap-3 text-sm font-semibold">
            <Flame class="h-5 w-5 text-orange-700" />
            <span>Salón · Take Away · Catering</span>
          </div>
        </div>

        <div class="relative aspect-4/3 overflow-hidden rounded-3xl">
          <img
            src="/images/demos/parris-hilton/parrilla.jpg"
            alt="Parrilla Parris Hilton"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Menu -->
    <section id="menu" class="bg-stone-100 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mb-12 max-w-2xl">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
            Para comer bien
          </p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Los clásicos de Parris Hilton</h2>

          <p class="mt-4 leading-relaxed text-stone-600">
            Algunos de nuestros favoritos. Carne a la parrilla, pan y mucho sabor.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="dish in dishes"
            :key="dish.name"
            class="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            @click="openOrderModal(dish.name)"
          >
            <div class="aspect-4/3 overflow-hidden">
              <img
                :src="`/images/demos/parris-hilton/${dish.name.toLowerCase().replaceAll(' ', '-').replaceAll('ó', 'o')}.jpg`"
                :alt="dish.name"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div class="p-6">
              <div
                class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
              >
                <Utensils class="h-5 w-5" />
              </div>

              <h3 class="text-xl font-bold">
                {{ dish.name }}
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-stone-500">
                {{ dish.description }}
              </p>

              <p class="mt-5 text-sm font-bold uppercase tracking-wide text-orange-700">
                {{ dish.price }}
              </p>

              <button
                type="button"
                class="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-orange-300"
                @click.stop="openOrderModal(dish.name)"
              >
                Pedir por WhatsApp
                <MessageCircle class="h-4 w-4" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div class="relative aspect-square overflow-hidden rounded-3xl">
          <img
            src="/images/demos/parris-hilton/experiencia.jpg"
            alt="Parrilla Parris Hilton"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
            Mucho más que una parrilla
          </p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Una parrilla para cada ocasión</h2>

          <p class="mt-5 leading-relaxed text-stone-600">
            Ya sea que quieras sentarte a disfrutar, llevarte tus favoritos a casa o compartir una
            buena parrillada en un evento, Parris Hilton tiene una opción para vos.
          </p>

          <div class="mt-8 space-y-6">
            <!-- Salón -->
            <div class="flex gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
              >
                <Store class="h-5 w-5" />
              </div>

              <div>
                <p class="font-bold">Salón</p>
                <p class="mt-1 text-sm leading-relaxed text-stone-500">
                  Disfrutá nuestros clásicos y el sabor del asado argentino en nuestro salón.
                </p>
              </div>
            </div>

            <!-- Take Away -->
            <div class="flex gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
              >
                <ShoppingBag class="h-5 w-5" />
              </div>

              <div>
                <p class="font-bold">Take Away</p>
                <p class="mt-1 text-sm leading-relaxed text-stone-500">
                  Pedí tus favoritos y llevate Parris Hilton a donde quieras.
                </p>
              </div>
            </div>

            <!-- Catering -->
            <div class="flex gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
              >
                <PartyPopper class="h-5 w-5" />
              </div>

              <div>
                <p class="font-bold">Catering</p>
                <p class="mt-1 text-sm leading-relaxed text-stone-500">
                  Llevamos el sabor de nuestra parrilla a tus eventos y reuniones.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#ubicaciones"
            class="mt-9 inline-flex items-center gap-2 font-bold text-orange-700 transition hover:text-orange-800"
          >
            Consultar por pedidos y catering
            <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="bg-stone-100 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
            Lo dicen nuestros clientes
          </p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Cuando está bueno, se nota</h2>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="review in reviews"
            :key="review.text"
            class="rounded-2xl border border-stone-200 bg-white p-7"
          >
            <div class="flex gap-1 text-orange-500">
              <Star v-for="n in 5" :key="n" class="h-4 w-4 fill-current" />
            </div>

            <p class="mt-5 text-lg font-semibold leading-relaxed text-stone-800">
              “{{ review.text }}”
            </p>

            <p class="mt-5 text-sm text-stone-400">
              {{ review.author }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Locations -->
    <section id="ubicaciones" class="bg-stone-900 py-20 text-white">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mb-12 max-w-2xl">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
            Dónde encontrarnos
          </p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Estamos cerca</h2>

          <p class="mt-4 text-stone-400">
            Elegí la ubicación que te quede más cómoda y vení a comer.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="location in locations"
            :key="location.name"
            class="rounded-3xl border border-white/10 bg-white/4 p-8"
          >
            <MapPin class="h-7 w-7 text-orange-300" />

            <h3 class="mt-5 text-2xl font-bold">
              {{ location.name }}
            </h3>

            <p class="mt-3 text-stone-400">
              {{ location.address }}
            </p>

            <div class="mt-6 flex items-center gap-3 text-sm text-stone-400">
              <Clock class="h-4 w-4 text-orange-300" />
              <span>¡Abrimos todos los días! - Sólo al Mediodía</span>
            </div>

            <div class="mt-3 flex items-center gap-3 text-sm text-stone-400">
              <Phone class="h-4 w-4 text-orange-300" />
              <span>{{ location.phone }}</span>
            </div>

            <div class="mt-7 flex flex-wrap gap-3">
              <a
                :href="location.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-orange-300"
              >
                <MapPin class="h-4 w-4" />
                Cómo llegar
              </a>

              <a
                :href="`https://wa.me/54${location.phone}?text=${encodeURIComponent('Hola Parris Hilton, quiero hacer un pedido.')}`"
                class="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                <Phone class="h-4 w-4" />
                Pedir por WhatsApp
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-stone-950 py-24 text-white">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <Flame class="mx-auto h-10 w-10 text-orange-300" />

        <h2 class="mt-6 text-4xl font-black md:text-5xl">¿Ya se te antojó?</h2>

        <p class="mt-4 text-lg text-stone-400">Vení a Parris Hilton y elegí tu próximo sánguche.</p>

        <button
          type="button"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-7 py-3 font-bold text-stone-950 transition hover:bg-orange-300"
          @click.stop="openOrderModal(null)"
        >
          <MessageCircle class="h-5 w-5" />
          Contactanos por WhatsApp
        </button>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-6 backdrop-blur-sm"
        @click.self="showModal = false"
      >
        <div class="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
                Hacer pedido
              </p>

              <h2 class="mt-2 text-2xl font-black" v-if="selectedDish">
                {{ selectedDish }}
              </h2>

              <p class="mt-2 text-sm text-stone-500">¿En qué ubicación querés hacer tu pedido?</p>
            </div>

            <button
              type="button"
              class="text-stone-400 transition hover:text-stone-900"
              @click="selectedDish = null"
            >
              <X class="h-5 w-5" />
            </button>
          </div>

          <div class="mt-6 space-y-3">
            <button
              v-for="location in locations"
              :key="location.name"
              type="button"
              class="flex w-full items-center gap-4 rounded-2xl border border-stone-200 p-4 text-left transition hover:border-orange-300 hover:bg-orange-50"
              @click="orderOnWhatsApp(location)"
            >
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
              >
                <MapPin class="h-5 w-5" />
              </div>

              <div class="min-w-0 flex-1">
                <p class="font-bold">{{ location.name }}</p>
                <p class="mt-1 text-sm text-stone-500">
                  {{ location.address }}
                </p>
              </div>

              <ArrowRight class="h-5 w-5 shrink-0 text-orange-700" />
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
