<script setup lang="ts">
import {
  ArrowRight,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-vue-next'

const phone = '5491124072390'
const whatsappUrl = `https://wa.me/${phone}`

const products = [
  {
    name: 'Royal Canin Medium Adult',
    presentation: 'Bolsa de 15 kg',
    price: '$125.000',
    description: 'Nutrición para perros adultos de tamaño mediano.',
    image: '/images/demos/petshop/royal-canin.jpg',
    accent: 'bg-[#F3E7D7]',
  },
  {
    name: 'Purina Excellent Adulto',
    presentation: 'Bolsa de 15 kg',
    price: '$75.000',
    description: 'Alimento completo para acompañar su día a día.',
    image: '/images/demos/petshop/excellent.jpg',
    accent: 'bg-[#E8EBDD]',
  },
  {
    name: 'Purina Pro Plan Adulto',
    presentation: 'Bolsa de 15 kg',
    price: '$120.000',
    description: 'Nutrición avanzada para perros adultos.',
    image: '/images/demos/petshop/pro-plan.jpg',
    accent: 'bg-[#F0E2D9]',
  },
]

const categories = [
  {
    title: 'Alimentos',
    description: 'Opciones para perros y gatos, por bolsa o sueltos.',
    image: '/images/demos/petshop/food.jpg',
  },
  {
    title: 'Accesorios',
    description: 'Collares, correas, juguetes, platos y mucho más.',
    image: '/images/demos/petshop/accessories.jpg',
  },
  {
    title: 'Cuidado animal',
    description: 'Productos antipulgas y antiparasitarios.',
    image: '/images/demos/petshop/care.jpg',
  },
]

const hours = [
  { days: 'Lunes a sábado', time: '9:30–13:30 · 17:00–20:30' },
  { days: 'Domingo', time: 'Cerrado' },
]

const address = 'Av. Vélez Sarsfield 145, Local 2, Villa Madero'
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

function productWhatsappUrl(productName: string) {
  return `${whatsappUrl}?text=${encodeURIComponent(`Hola, quería consultar por ${productName}.`)}`
}
</script>

<template>
  <div class="w-full overflow-hidden bg-[#FAF7F0] text-[#34392D]">
    <!-- Navigation -->
    <header class="relative z-10 border-b border-[#34392D]/10 bg-[#FAF7F0]">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#inicio" class="flex items-center gap-3">
          <span
            class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#697653] text-[#FFF9EE]"
          >
            <PawPrint class="h-6 w-6" />
          </span>

          <span>
            <span class="block text-lg font-bold tracking-tight"> Tienda para Mascotas </span>
            <span class="block text-xs tracking-wide text-[#777866]">
              Todo para tus compañeros
            </span>
          </span>
        </a>

        <nav class="hidden items-center gap-7 text-sm font-medium md:flex">
          <a href="#productos" class="transition hover:text-[#B45F43]"> Productos </a>
          <a href="#categorias" class="transition hover:text-[#B45F43]"> Qué ofrecemos </a>
          <a href="#ubicacion" class="transition hover:text-[#B45F43]"> Cómo llegar </a>
        </nav>

        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#697653] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#536044]"
        >
          <MessageCircle class="h-4 w-4" />
          <span class="hidden sm:inline">Contactanos</span>
          <span class="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section id="inicio" class="px-5 py-8 sm:px-8 sm:py-12">
        <div
          class="relative mx-auto grid max-w-7xl overflow-hidden rounded-4xl bg-[#E8E6D6] lg:min-h-142.5 lg:grid-cols-2"
        >
          <div
            class="relative z-10 flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16"
          >
            <p
              class="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#697653]"
            >
              <PawPrint class="h-4 w-4" />
              Su bienestar, nuestra compañía
            </p>

            <h1
              class="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
            >
              Todo el amor que les das,
              <span class="font-serif italic text-[#B45F43]"> también se cuida. </span>
            </h1>

            <p class="mt-6 max-w-lg text-base leading-7 text-[#626454] sm:text-lg">
              Alimentos, accesorios y productos para el cuidado de tus mascotas. Encontrá lo que
              necesitan con una atención cercana y personalizada.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="#productos"
                class="inline-flex items-center gap-2 rounded-full bg-[#697653] px-6 py-3.5 font-semibold text-white transition hover:bg-[#536044]"
              >
                Ver productos
                <ArrowRight class="h-4 w-4" />
              </a>

              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full border border-[#697653]/30 px-6 py-3.5 font-semibold text-[#4D5940] transition hover:bg-white/60"
              >
                <MessageCircle class="h-4 w-4" />
                Consultar
              </a>
            </div>

            <div class="mt-10 flex items-center gap-3 text-sm text-[#626454]">
              <Heart class="h-5 w-5 text-[#B45F43]" />
              <span>Porque son parte de la familia.</span>
            </div>
          </div>

          <div class="relative min-h-80 sm:min-h-110 lg:min-h-full">
            <img
              src="/images/demos/petshop/hero.jpg"
              alt="Perro y gato disfrutando juntos en un hogar"
              class="absolute inset-0 h-full w-full object-cover"
            />

            <div
              class="absolute inset-0 bg-linear-to-t from-[#34392D]/25 via-transparent to-transparent"
            />

            <div
              class="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-[#FAF7F0]/90 p-4 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 sm:p-5"
            >
              <p class="text-sm font-semibold text-[#34392D]">Todo para sus aventuras cotidianas</p>
              <p class="mt-1 text-sm text-[#777866]">
                Alimentación, juego y cuidado en un solo lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="px-5 py-12 sm:px-8 sm:py-16">
        <div class="mx-auto grid max-w-6xl gap-5 sm:grid-cols-3">
          <article
            class="flex items-start gap-4 rounded-2xl border border-[#34392D]/10 bg-white/60 p-5"
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EBDD] text-[#697653]"
            >
              <ShoppingBag class="h-6 w-6" />
            </span>
            <div>
              <h2 class="font-semibold">Alimentos y accesorios</h2>
              <p class="mt-1 text-sm leading-6 text-[#777866]">
                Todo lo que necesitás para cuidar a tus compañeros.
              </p>
            </div>
          </article>

          <article
            class="flex items-start gap-4 rounded-2xl border border-[#34392D]/10 bg-white/60 p-5"
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3E7D7] text-[#B45F43]"
            >
              <Heart class="h-6 w-6" />
            </span>
            <div>
              <h2 class="font-semibold">Atención cercana</h2>
              <p class="mt-1 text-sm leading-6 text-[#777866]">
                Te ayudamos a encontrar lo que estás buscando.
              </p>
            </div>
          </article>

          <article
            class="flex items-start gap-4 rounded-2xl border border-[#34392D]/10 bg-white/60 p-5"
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8E6D6] text-[#697653]"
            >
              <ShieldCheck class="h-6 w-6" />
            </span>
            <div>
              <h2 class="font-semibold">Cuidado para cada etapa</h2>
              <p class="mt-1 text-sm leading-6 text-[#777866]">
                Productos para acompañar su bienestar todos los días.
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- Products -->
      <section id="productos" class="bg-[#F0EDE3] px-5 py-20 sm:px-8 sm:py-24">
        <div class="mx-auto max-w-7xl">
          <div class="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div class="max-w-2xl">
              <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#B45F43]">
                Una selección para ellos
              </p>

              <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Algunos de nuestros productos
              </h2>

              <p class="mt-4 max-w-xl leading-7 text-[#777866]">
                Conocé algunas de las opciones que tenemos para tus mascotas. Consultanos por otras
                marcas y presentaciones.
              </p>
            </div>

            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-fit items-center gap-2 font-semibold text-[#697653] transition hover:text-[#B45F43]"
            >
              Consultar otros productos
              <ArrowRight class="h-4 w-4" />
            </a>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="product in products"
              :key="product.name"
              class="group overflow-hidden rounded-3xl border border-[#34392D]/10 bg-[#FAF7F0] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                class="relative flex aspect-4/3 items-center justify-center overflow-hidden p-7"
                :class="product.accent"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <span
                  class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#697653]"
                >
                  Alimento para perros
                </span>
              </div>

              <div class="p-6">
                <p class="text-xs font-semibold uppercase tracking-wider text-[#B45F43]">
                  {{ product.presentation }}
                </p>

                <h3 class="mt-2 text-xl font-semibold">
                  {{ product.name }}
                </h3>

                <p class="mt-3 min-h-12 text-sm leading-6 text-[#777866]">
                  {{ product.description }}
                </p>

                <div class="mt-5 flex items-center justify-between gap-3">
                  <p class="text-2xl font-bold tracking-tight text-[#697653]">
                    {{ product.price }}
                  </p>

                  <a
                    :href="productWhatsappUrl(product.name)"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Consultar por ${product.name} en WhatsApp`"
                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#697653] text-white transition hover:bg-[#536044]"
                  >
                    <MessageCircle class="h-5 w-5" />
                  </a>
                </div>

                <a
                  :href="productWhatsappUrl(product.name)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#697653]/25 py-3 text-sm font-semibold text-[#536044] transition hover:bg-[#E8EBDD]"
                >
                  Consultar disponibilidad
                  <ArrowRight class="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>

          <p class="mt-6 text-center text-xs leading-5 text-[#777866]">
            Precios de referencia sujetos a disponibilidad y actualización. Consultá antes de
            realizar tu compra.
          </p>
        </div>
      </section>

      <!-- Categories -->
      <section id="categorias" class="px-5 py-20 sm:px-8 sm:py-24">
        <div class="mx-auto max-w-7xl">
          <div class="mx-auto mb-12 max-w-2xl text-center">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#B45F43]">
              Todo en un mismo lugar
            </p>

            <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Mucho más que alimento
            </h2>

            <p class="mt-4 leading-7 text-[#777866]">
              Encontrá opciones para alimentar, cuidar y mimar a tus mascotas.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <article v-for="(category, index) in categories" :key="category.title" class="group">
              <div
                class="relative aspect-5/4 overflow-hidden rounded-3xl"
                :class="[
                  index === 0 ? 'bg-[#E8EBDD]' : '',
                  index === 1 ? 'bg-[#F3E7D7]' : '',
                  index === 2 ? 'bg-[#F0E2D9]' : '',
                ]"
              >
                <img
                  :src="category.image"
                  :alt="category.title"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div class="pt-5">
                <h3 class="text-xl font-semibold">
                  {{ category.title }}
                </h3>

                <p class="mt-2 leading-6 text-[#777866]">
                  {{ category.description }}
                </p>

                <a
                  :href="`${whatsappUrl}?text=${encodeURIComponent(`Hola, quería consultar por ${category.title.toLowerCase()}.`)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#697653] transition hover:text-[#B45F43]"
                >
                  Hacer una consulta
                  <ArrowRight class="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Location and hours -->
      <section id="ubicacion" class="bg-[#E8E6D6] px-5 py-20 sm:px-8 sm:py-24">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#B45F43]">
              Estamos cerca tuyo
            </p>

            <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Pasá a visitarnos
            </h2>

            <p class="mt-4 max-w-lg leading-7 text-[#626454]">
              Acercate al local para conocer nuestros productos. Si buscás algo en particular,
              escribinos antes y te ayudamos.
            </p>

            <div class="mt-8 space-y-6">
              <div class="flex items-start gap-4">
                <span
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70 text-[#697653]"
                >
                  <MapPin class="h-5 w-5" />
                </span>

                <div>
                  <h3 class="font-semibold">Dónde estamos</h3>
                  <p class="mt-1 text-sm leading-6 text-[#626454]">
                    {{ address }}
                  </p>

                  <a
                    :href="mapsUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#697653] hover:text-[#B45F43]"
                  >
                    Cómo llegar
                    <ArrowRight class="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <span
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70 text-[#697653]"
                >
                  <Clock class="h-5 w-5" />
                </span>

                <div class="flex-1">
                  <h3 class="font-semibold">Horarios de atención</h3>

                  <div
                    v-for="item in hours"
                    :key="item.days"
                    class="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm"
                  >
                    <span class="text-[#626454]">{{ item.days }}</span>
                    <span
                      :class="
                        item.days === 'Domingo' ? 'text-[#B45F43]' : 'font-medium text-[#34392D]'
                      "
                    >
                      {{ item.time }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            :href="mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver ubicación de Tienda para Mascotas en Google Maps"
            class="group relative min-h-87.5 overflow-hidden rounded-3xl bg-[#D8D7C6] sm:min-h-115"
          >
            <iframe
              :src="`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`"
              title="Ubicación de Tienda para Mascotas"
              class="pointer-events-none absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />

            <div
              class="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-[#FAF7F0]/95 p-4 shadow-lg"
            >
              <div>
                <p class="font-semibold">Tienda para Mascotas</p>
                <p class="mt-1 text-xs text-[#777866]">Villa Madero, Buenos Aires</p>
              </div>

              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#697653] text-white transition group-hover:bg-[#536044]"
              >
                <ArrowRight class="h-5 w-5" />
              </span>
            </div>
          </a>
        </div>
      </section>

      <!-- WhatsApp CTA -->
      <section class="px-5 py-16 sm:px-8 sm:py-24">
        <div
          class="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#697653] px-7 py-14 text-center text-white sm:px-12 sm:py-20"
        >
          <div
            class="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10"
          />
          <div
            class="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-white/10"
          />

          <PawPrint class="mx-auto h-10 w-10 text-[#E8E6D6]" />

          <h2 class="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            ¿Buscás algo para tu compañero?
          </h2>

          <p class="mx-auto mt-5 max-w-xl leading-7 text-white/80">
            Escribinos por WhatsApp y consultanos por precios, disponibilidad y productos para tu
            mascota.
          </p>

          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF7F0] px-7 py-4 font-semibold text-[#46513B] transition hover:bg-white"
          >
            <MessageCircle class="h-5 w-5" />
            Hablemos por WhatsApp
            <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-[#34392D]/10 px-5 py-8 sm:px-8">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"
      >
        <a href="#inicio" class="flex items-center gap-3">
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8EBDD] text-[#697653]"
          >
            <PawPrint class="h-5 w-5" />
          </span>

          <span>
            <span class="block font-semibold">Tienda para Mascotas</span>
            <span class="mt-1 block text-xs text-[#777866]"> Todo el amor que merecen. </span>
          </span>
        </a>

        <div class="flex flex-wrap items-center justify-center gap-5 text-sm text-[#777866]">
          <a
            href="https://www.instagram.com/tiendaparamascotas.arg/"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-[#B45F43]"
          >
            Instagram
          </a>

          <a
            :href="mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-[#B45F43]"
          >
            Cómo llegar
          </a>

          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-[#B45F43]"
          >
            WhatsApp
          </a>
        </div>

        <p class="text-xs text-[#777866]">© {{ new Date().getFullYear() }} Tienda para Mascotas</p>
      </div>
    </footer>

    <!-- Mobile fixed WhatsApp button -->
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      class="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#697653] text-white shadow-xl transition hover:scale-105 hover:bg-[#536044] md:hidden"
    >
      <MessageCircle class="h-6 w-6" />
    </a>
  </div>
</template>
