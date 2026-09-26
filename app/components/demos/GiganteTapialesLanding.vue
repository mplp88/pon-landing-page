<script setup lang="ts">
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Pizza,
  ShoppingBag,
  Truck,
} from 'lucide-vue-next'

const DEMO_EXPIRATION = new Date('2026-10-03T23:59:59-03:00')

const isDemoExpired = computed(() => {
  return new Date() > DEMO_EXPIRATION
})

const promotions = [
  {
    title: 'Pizza Gigante',
    description: '4 gustos · 16 porciones',
    price: '$45.000',
    detail: 'Para 4 personas',
  },
  {
    title: '3 Grandes de Muzza',
    description: 'Tres pizzas grandes de muzzarella',
    price: '$48.000',
    detail: 'Ideal para compartir',
  },
  {
    title: 'Muzza + Jamón',
    description: '1 grande de muzzarella + 1 grande de jamón',
    price: '$34.000',
    detail: 'Una combinación clásica',
  },
  {
    title: '24 Empanadas',
    description: 'Empanadas al horno o fritas',
    price: '$55.000',
    detail: 'Elegí tus sabores',
  },
]

const deliveryAreas = [
  'Tapiales',
  'Villa Madero',
  'Tablada',
  'Villa Insuperable',
  'Ciudad Evita',
  'Villa Celina',
]

const whatsappUrl = 'https://wa.me/5491155888654'
const instagramUrl = 'https://www.instagram.com/ElGigante.Tapiales/'
</script>

<template>
  <DemoExpired v-if="isDemoExpired"></DemoExpired>
  <div v-else class="w-full bg-[#fffdf7] text-stone-900">
    <!-- Hero -->
    <section class="relative min-h-180 overflow-hidden">
      <img
        src="/images/demos/gigante-tapiales/hero.jpg"
        alt="Pizza de El Gigante de Tapiales"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <!-- Green / coral overlay inspired by the storefront -->
      <div
        class="absolute inset-0 bg-linear-to-r from-[#063f38]/95 via-[#063f38]/75 to-[#063f38]/25"
      />

      <div class="relative mx-auto flex min-h-180 max-w-6xl items-center px-6 py-24">
        <div class="max-w-2xl text-white">
          <!-- Brand -->
          <div class="mb-7">
            <p class="ml-12 font-serif text-3xl font-medium tracking-wide text-[#159477]">El</p>

            <h1
              class="-mt-2 text-4xl font-black leading-[0.82] tracking-tight text-[#ef695b] md:text-8xl"
            >
              Gigante
            </h1>

            <div
              class="mt-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-white"
            >
              <span>Pizzas</span>
              <span class="text-[#27b99a]">·</span>
              <span>Empanadas</span>
            </div>
          </div>

          <div
            class="inline-flex rounded-full bg-[#27b99a] px-4 py-2 text-sm font-bold text-white shadow-lg"
          >
            Gigante hay uno solo
          </div>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-stone-100 md:text-xl">
            Pizza al molde, media masa y más de
            <strong class="text-[#f5d77a]">20 sabores para combinar.</strong>
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl bg-[#27b99a] px-6 py-3.5 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#20a98c]"
            >
              <MessageCircle class="h-5 w-5" />
              Pedir por WhatsApp
            </a>

            <a
              href="#promociones"
              class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Ver promociones
              <ArrowRight class="h-4 w-4" />
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-200">
            <div class="flex items-center gap-2">
              <Truck class="h-4 w-4 text-[#f5d77a]" />
              Hacemos envíos
            </div>

            <div class="flex items-center gap-2">
              <Pizza class="h-4 w-4 text-[#f5d77a]" />
              Más de 20 sabores
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand strip -->
    <section class="border-b border-[#dceee8] bg-white">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:text-left"
      >
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#159477]">
            El Gigante de Tapiales
          </p>

          <p class="mt-1 text-lg font-semibold text-stone-800">Pizzas · Empanadas · Envíos</p>
        </div>

        <div class="text-lg font-medium text-stone-500">
          <span class="text-[#ef695b]">Gigante</span>
          hay uno solo.
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="border-b border-[#e9e2d5] bg-[#fffdf7] py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#159477]">
            Pizza al molde · Media masa
          </p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Una pizza para compartir</h2>

          <p class="mt-5 max-w-xl leading-relaxed text-stone-600">
            Elegí entre más de 20 sabores, combiná tus gustos y disfrutá una pizza abundante, hecha
            para compartir con familia y amigos.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2f5ef] text-[#159477]"
              >
                <Pizza class="h-5 w-5" />
              </div>

              <div>
                <p class="font-bold">Más de 20 sabores</p>
                <p class="text-sm text-stone-500">Para combinar a tu gusto</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fde5e1] text-[#d95448]"
              >
                <Truck class="h-5 w-5" />
              </div>

              <div>
                <p class="font-bold">Hacemos envíos</p>
                <p class="text-sm text-stone-500">Consultá el costo</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative aspect-4/3 overflow-hidden rounded-3xl">
          <img
            src="/images/demos/gigante-tapiales/pizza.jpg"
            alt="Pizza de El Gigante de Tapiales"
            class="h-full w-full object-cover"
          />

          <div class="absolute bottom-5 left-5 rounded-xl bg-white/95 px-5 py-3 shadow-lg">
            <p class="text-sm font-bold text-[#159477]">El Gigante</p>

            <p class="text-xs text-stone-500">Pizzas para compartir</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotions -->
    <section id="promociones" class="bg-[#f3f0e8] py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mb-12 max-w-2xl">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#d95448]">Promociones</p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Ofertas para compartir</h2>

          <p class="mt-4 leading-relaxed text-stone-600">
            Pedí la lista de precios y consultá nuestras promociones por WhatsApp.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <article
            v-for="promotion in promotions"
            :key="promotion.title"
            class="relative overflow-hidden rounded-2xl border border-[#e3ddd0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              class="absolute right-0 top-0 rounded-bl-2xl bg-[#ef695b] px-4 py-2 text-sm font-black text-white"
            >
              PROMO
            </div>

            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e2f5ef] text-[#159477]"
            >
              <Pizza class="h-6 w-6" />
            </div>

            <h3 class="text-2xl font-black">
              {{ promotion.title }}
            </h3>

            <p class="mt-2 text-stone-600">
              {{ promotion.description }}
            </p>

            <p class="mt-1 text-sm font-medium text-stone-400">
              {{ promotion.detail }}
            </p>

            <div class="mt-6 flex items-end justify-between gap-4">
              <p class="text-3xl font-black text-[#d95448]">
                {{ promotion.price }}
              </p>

              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-lg bg-[#159477] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#117f65]"
              >
                Pedir
                <ArrowRight class="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>

        <div class="mt-8 rounded-2xl border border-[#d8ebe5] bg-[#e9f7f3] p-5 text-center">
          <p class="font-bold text-stone-900">¿Querés conocer todos los sabores y precios?</p>

          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 inline-flex items-center gap-2 font-bold text-[#12866d] hover:text-[#0e705b]"
          >
            Pedí la lista de precios por WhatsApp
            <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- Empanadas -->
    <section class="bg-white py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div class="relative aspect-square overflow-hidden rounded-3xl">
          <img
            src="/images/demos/gigante-tapiales/empanadas.jpg"
            alt="Empanadas de El Gigante de Tapiales"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#159477]">También tenemos</p>

          <h2 class="mt-3 text-3xl font-black md:text-4xl">Empanadas al horno y fritas</h2>

          <p class="mt-5 leading-relaxed text-stone-600">
            Además de nuestras pizzas, podés elegir entre empanadas al horno o fritas para completar
            el pedido.
          </p>

          <div class="mt-8 flex items-center gap-4 rounded-2xl bg-[#fff3d5] p-5">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ef695b] text-white"
            >
              <ShoppingBag class="h-6 w-6" />
            </div>

            <div>
              <p class="font-black">24 empanadas · $55.000</p>
              <p class="mt-1 text-sm text-stone-600">Elegí tus sabores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule -->
    <section class="bg-[#073f38] py-20 text-white">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <Clock class="h-8 w-8 text-[#f5d77a]" />

            <h2 class="mt-5 text-3xl font-black">Nuestros horarios</h2>

            <div class="mt-8 space-y-5">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p class="font-bold text-[#5ed0b4]">Mediodía</p>

                <p class="mt-2 text-stone-300">Lunes a viernes · 11:00 a 14:00</p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p class="font-bold text-[#5ed0b4]">Noche</p>

                <p class="mt-2 text-stone-300">Domingo a miércoles · 19:00 a 23:00</p>

                <p class="mt-1 text-stone-300">Jueves a sábado · 19:00 a 00:00</p>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Truck class="h-8 w-8 text-[#f5d77a]" />

            <h2 class="mt-5 text-2xl font-black">Hacemos envíos</h2>

            <p class="mt-3 text-stone-400">
              Realizamos envíos a distintas localidades de la zona. Consultá el costo al hacer tu
              pedido.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="area in deliveryAreas"
                :key="area"
                class="rounded-full bg-white/10 px-3 py-1.5 text-sm text-stone-300"
              >
                {{ area }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="bg-[#fffdf7] py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-8 rounded-3xl border border-[#e9e2d5] bg-white p-8 md:grid-cols-2">
          <div>
            <MapPin class="h-7 w-7 text-[#159477]" />

            <h2 class="mt-5 text-2xl font-black">El Gigante de Tapiales</h2>

            <p class="mt-3 leading-relaxed text-stone-600">
              Pizzas y empanadas.
              <br />
              Tapiales y alrededores.
            </p>

            <div class="mt-6 space-y-2 text-sm text-stone-600">
              <p><strong>WhatsApp:</strong> 11 5588-8654</p>

              <p><strong>Alternativo:</strong> 11 7026-5142</p>

              <p><strong>Teléfono:</strong> 6073-2958</p>
            </div>

            <a
              :href="instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex items-center gap-2 font-bold text-[#159477] transition hover:text-[#117f65]"
            >
              @ElGigante.Tapiales
              <ArrowRight class="h-4 w-4" />
            </a>
          </div>

          <div
            class="flex min-h-52 items-center justify-center overflow-hidden rounded-2xl bg-[#f3f0e8]"
          >
            <div class="text-center">
              <Pizza class="mx-auto h-12 w-12 text-[#ef695b]" />

              <p class="mt-4 text-lg font-black text-[#159477]">Gigante hay uno solo</p>

              <p class="mt-1 text-sm text-stone-500">Pizzas · Empanadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-[#ef695b] py-24 text-white">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <MessageCircle class="mx-auto h-10 w-10 text-white" />

        <h2 class="mt-6 text-4xl font-black md:text-5xl">¿Ya sabés qué vas a pedir?</h2>

        <p class="mt-4 text-lg text-white/85">
          Escribinos por WhatsApp, pedí la lista de precios y armá tu pedido.
        </p>

        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#27b99a] px-7 py-3.5 font-black text-white shadow-lg transition hover:bg-[#20a98c]"
        >
          <MessageCircle class="h-5 w-5" />
          Pedir por WhatsApp
        </a>

        <p class="mt-5 text-sm text-white/75">11 5588-8654</p>
      </div>
    </section>
  </div>
</template>
