<script setup lang="ts">
import {
  CalendarDays,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  Heart,
  Instagram,
  ArrowUpRight,
  Check,
} from 'lucide-vue-next'

const whatsappNumber = '5491123456789'

const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const services = [
  {
    category: 'NAILS',
    name: 'Manicura semipermanente',
    description: 'Color impecable y brillo duradero para tus uñas.',
    price: 'Desde $18.000',
    image: '/images/demos/manicure.jpg',
  },
  {
    category: 'NAILS',
    name: 'Soft gel & kapping',
    description: 'Estructura, resistencia y la forma que más te gusta.',
    price: 'Desde $25.000',
    image: '/images/demos/soft-gel.jpg',
  },
  {
    category: 'LASHES',
    name: 'Lifting de pestañas',
    description: 'Realzá tu mirada con un acabado natural.',
    price: 'Desde $22.000',
    image: '/images/demos/lash-lifting.jpg',
  },
  {
    category: 'LASHES',
    name: 'Extensiones de pestañas',
    description: 'Volumen y definición adaptados a tu estilo.',
    price: 'Desde $30.000',
    image: '/images/demos/lash-extensions.jpg',
  },
]

const gallery = [
  {
    image: '/images/demos/gallery-1.jpg',
    alt: 'Manicura en tonos nude',
  },
  {
    image: '/images/demos/gallery-2.jpg',
    alt: 'Diseño de nail art delicado',
  },
  {
    image: '/images/demos/gallery-3.jpg',
    alt: 'Resultado de lifting de pestañas',
  },
]
</script>

<template>
  <main class="overflow-hidden bg-[#FAF6F1] text-[#473633]">
    <!-- Navigation -->
    <header class="relative z-10 border-b border-[#473633]/10">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Navegación principal"
      >
        <a href="#inicio" class="flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8C9C8]">
            <Sparkles class="h-5 w-5 text-[#754E51]" />
          </span>

          <span>
            <span class="block font-serif text-2xl tracking-wide"> ROSA </span>
            <span class="block text-[10px] tracking-[0.3em] text-[#967B72]">
              NAIL & LASH STUDIO
            </span>
          </span>
        </a>

        <div class="hidden items-center gap-8 text-sm md:flex">
          <a href="#servicios" class="transition hover:text-[#A96F75]"> Servicios </a>
          <a href="#galeria" class="transition hover:text-[#A96F75]"> Nuestros trabajos </a>
          <a href="#contacto" class="transition hover:text-[#A96F75]"> Contacto </a>
        </div>

        <a
          :href="whatsappUrl('¡Hola! Quiero consultar por un turno en ROSA Studio.')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-[#A96F75] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#8F5960] sm:px-5"
        >
          Reservar
          <ArrowUpRight class="h-4 w-4" />
        </a>
      </nav>
    </header>

    <!-- Hero -->
    <section id="inicio" class="relative">
      <div class="mx-auto grid max-w-7xl md:min-h-162.5 md:grid-cols-2">
        <div class="flex flex-col justify-center px-6 py-20 md:px-10 lg:px-16 lg:py-24">
          <p
            class="mb-6 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#A96F75]"
          >
            <span class="h-px w-8 bg-[#A96F75]" />
            TU MOMENTO, TU ESTILO
          </p>

          <h1
            class="max-w-xl font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Un detalle
            <span class="italic text-[#A96F75]">lo cambia todo.</span>
          </h1>

          <p class="mt-7 max-w-md text-base leading-8 text-[#806F68]">
            Un espacio para vos, para mimarte y sentirte increíble. Descubrí nuestros servicios de
            uñas y pestañas.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <a
              href="#servicios"
              class="inline-flex items-center gap-2 rounded-full bg-[#A96F75] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8F5960]"
            >
              Descubrir servicios
              <ArrowUpRight class="h-4 w-4" />
            </a>

            <a
              href="#galeria"
              class="rounded-full border border-[#D8C3B9] px-6 py-4 text-sm font-semibold transition hover:bg-[#F0E6DF]"
            >
              Ver trabajos
            </a>
          </div>

          <div class="mt-12 flex items-center gap-4">
            <div class="flex -space-x-2">
              <span
                v-for="n in 3"
                :key="n"
                class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#FAF6F1] bg-[#E8C9C8]"
              >
                <Heart class="h-4 w-4 text-[#A96F75]" />
              </span>
            </div>

            <p class="text-xs leading-relaxed text-[#806F68]">
              Tu espacio de belleza<br />
              <span class="font-medium text-[#473633]"> Atención personalizada </span>
            </p>
          </div>
        </div>

        <div class="relative min-h-107.5 md:min-h-full">
          <img
            src="/images/demos/hero.jpg"
            alt="Detalle de manicura elegante en tonos nude"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-[#473633]/20 via-transparent to-white/10"
          />

          <div
            class="absolute bottom-6 left-6 rounded-2xl border border-white/50 bg-white/85 px-5 py-4 shadow-sm backdrop-blur-md sm:bottom-10 sm:left-10"
          >
            <p class="font-serif text-xl italic">Belleza en cada detalle</p>
            <p class="mt-1 text-xs tracking-wider text-[#806F68]">NAILS · LASHES · SELF CARE</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand statement -->
    <section class="bg-[#F0E5DD] px-6 py-16 md:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <Sparkles class="mx-auto h-6 w-6 text-[#A96F75]" />

        <p class="mt-5 text-xs font-semibold tracking-[0.25em] text-[#A96F75]">
          UN RATITO PARA VOS
        </p>

        <h2 class="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
          No es solo belleza.
          <span class="italic text-[#A96F75]">Es cómo te hace sentir.</span>
        </h2>

        <p class="mx-auto mt-5 max-w-xl leading-7 text-[#806F68]">
          Creemos en los pequeños detalles, en los momentos que te regalás y en salir de acá
          sintiéndote un poquito más vos.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section id="servicios" class="px-6 py-20 md:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p class="text-xs font-semibold tracking-[0.25em] text-[#A96F75]">NUESTROS SERVICIOS</p>
            <h2 class="mt-3 font-serif text-4xl sm:text-5xl">Tu próxima favorita</h2>
          </div>

          <p class="max-w-sm text-sm leading-6 text-[#806F68]">
            Elegí el servicio ideal para vos. Cada detalle está pensado para que disfrutes la
            experiencia.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="service in services"
            :key="service.name"
            class="group overflow-hidden rounded-2xl border border-[#E8DCD3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#A96F75]/10"
          >
            <div class="aspect-4/5 overflow-hidden bg-[#F0E5DD]">
              <img
                :src="service.image"
                :alt="service.name"
                loading="lazy"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div class="p-5">
              <p class="text-[10px] font-semibold tracking-[0.2em] text-[#A96F75]">
                {{ service.category }}
              </p>

              <h3 class="mt-2 font-serif text-xl">
                {{ service.name }}
              </h3>

              <p class="mt-3 min-h-12 text-sm leading-6 text-[#806F68]">
                {{ service.description }}
              </p>

              <div
                class="mt-5 flex items-center justify-between gap-3 border-t border-[#E8DCD3] pt-4"
              >
                <span class="text-sm font-semibold">
                  {{ service.price }}
                </span>

                <a
                  :href="whatsappUrl(`¡Hola! Quiero consultar por ${service.name}.`)"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Consultar por ${service.name}`"
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0E5DD] text-[#A96F75] transition hover:bg-[#E8C9C8]"
                >
                  <ArrowUpRight class="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>

        <p class="mt-6 text-xs text-[#967B72]">
          * Precios ilustrativos para esta demo. Se pueden personalizar según los servicios de cada
          salón.
        </p>
      </div>
    </section>

    <!-- Experience -->
    <section class="bg-[#473633] px-6 py-20 text-[#FAF6F1] md:py-24">
      <div class="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p class="text-xs font-semibold tracking-[0.25em] text-[#E8C9C8]">NUESTRA ESENCIA</p>

          <h2 class="mt-4 max-w-lg font-serif text-4xl leading-tight sm:text-5xl">
            Tu momento de desconectar, nuestra forma de cuidarte.
          </h2>

          <p class="mt-6 max-w-lg leading-7 text-[#D9C8C0]">
            Queremos que cada visita sea una experiencia linda, desde que llegás hasta que te vas.
            Escuchamos lo que buscás y cuidamos cada detalle.
          </p>

          <div class="mt-8 space-y-5">
            <div class="flex items-start gap-4">
              <span class="rounded-full bg-white/10 p-2">
                <Check class="h-5 w-5 text-[#E8C9C8]" />
              </span>
              <div>
                <h3 class="font-medium">Atención personalizada</h3>
                <p class="mt-1 text-sm leading-6 text-[#D9C8C0]">
                  Servicios adaptados a tu estilo y preferencias.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <span class="rounded-full bg-white/10 p-2">
                <Check class="h-5 w-5 text-[#E8C9C8]" />
              </span>
              <div>
                <h3 class="font-medium">Cuidado en cada detalle</h3>
                <p class="mt-1 text-sm leading-6 text-[#D9C8C0]">
                  Un espacio cuidado para que disfrutes tu momento.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <span class="rounded-full bg-white/10 p-2">
                <Check class="h-5 w-5 text-[#E8C9C8]" />
              </span>
              <div>
                <h3 class="font-medium">Turnos coordinados</h3>
                <p class="mt-1 text-sm leading-6 text-[#D9C8C0]">
                  Organizá tu visita de forma simple por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <img
            src="/images/demos/experience.jpg"
            alt="Ambiente cálido y delicado de un estudio de belleza"
            loading="lazy"
            class="aspect-4/5 w-full rounded-4xl object-cover"
          />

          <div
            class="absolute -bottom-5 -left-3 rounded-2xl bg-[#E8C9C8] p-5 text-[#473633] shadow-lg sm:-left-5"
          >
            <Heart class="h-6 w-6" />
            <p class="mt-2 font-serif text-xl italic">Hecho para vos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="galeria" class="px-6 py-20 md:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="text-center">
          <p class="text-xs font-semibold tracking-[0.25em] text-[#A96F75]">INSPIRATE</p>
          <h2 class="mt-3 font-serif text-4xl sm:text-5xl">Detalles que enamoran</h2>
          <p class="mx-auto mt-4 max-w-lg leading-7 text-[#806F68]">
            Ideas, colores y estilos para encontrar tu próximo look.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          <div
            v-for="(item, index) in gallery"
            :key="item.image"
            :class="['overflow-hidden rounded-2xl bg-[#F0E5DD]', index === 1 ? 'row-span-2' : '']"
          >
            <img
              :src="item.image"
              :alt="item.alt"
              loading="lazy"
              class="h-full min-h-48 w-full object-cover transition duration-500 hover:scale-105 md:min-h-64"
            />
          </div>
        </div>

        <div class="mt-8 text-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#A96F75] transition hover:text-[#754E51]"
          >
            <Instagram class="h-5 w-5" />
            Descubrí más en Instagram
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="px-6 pb-20">
      <div
        class="mx-auto grid max-w-7xl gap-8 rounded-4xl bg-[#F0E5DD] p-7 sm:p-10 md:grid-cols-2 md:items-center md:p-14"
      >
        <div>
          <p class="text-xs font-semibold tracking-[0.25em] text-[#A96F75]">TE ESPERAMOS</p>

          <h2 class="mt-4 font-serif text-4xl">Tu próximo momento empieza acá.</h2>

          <div class="mt-8 space-y-5">
            <div class="flex items-start gap-3">
              <MapPin class="mt-1 h-5 w-5 shrink-0 text-[#A96F75]" />
              <div>
                <p class="font-medium">Nuestra ubicación</p>
                <p class="mt-1 text-sm text-[#806F68]">Av. Siempre Viva 742, Buenos Aires</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <Clock class="mt-1 h-5 w-5 shrink-0 text-[#A96F75]" />
              <div>
                <p class="font-medium">Horarios de atención</p>
                <p class="mt-1 text-sm text-[#806F68]">Lunes a sábados · 9:00 a 19:00</p>
              </div>
            </div>
          </div>

          <a
            :href="whatsappUrl('¡Hola! Quiero consultar por disponibilidad de turnos.')"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-[#A96F75] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8F5960]"
          >
            <CalendarDays class="h-5 w-5" />
            Consultar disponibilidad
          </a>
        </div>

        <div
          class="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl bg-[#E8C9C8] p-8 text-center"
        >
          <div>
            <MapPin class="mx-auto h-9 w-9 text-[#754E51]" />
            <p class="mt-4 font-serif text-2xl">Encontrá tu espacio</p>
            <p class="mt-2 max-w-xs text-sm leading-6 text-[#754E51]">
              Agregá acá un mapa de Google Maps para que tus clientas puedan llegar fácilmente.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section id="contacto" class="px-6 py-20 text-center md:py-28">
      <Sparkles class="mx-auto h-7 w-7 text-[#A96F75]" />

      <h2 class="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
        Regalate un momento
        <span class="italic text-[#A96F75]">para vos.</span>
      </h2>

      <p class="mx-auto mt-5 max-w-md leading-7 text-[#806F68]">
        Elegí tu servicio favorito y coordinemos tu próximo turno. Te esperamos.
      </p>

      <a
        :href="whatsappUrl('¡Hola! Vi la página de ROSA Studio y quiero reservar un turno.')"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 inline-flex items-center gap-3 rounded-full bg-[#A96F75] px-7 py-4 font-semibold text-white shadow-lg shadow-[#A96F75]/20 transition hover:-translate-y-0.5 hover:bg-[#8F5960]"
      >
        <MessageCircle class="h-5 w-5" />
        Reservar por WhatsApp
      </a>
    </section>

    <!-- Footer -->
    <footer class="border-t border-[#473633]/10 px-6 py-8">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
      >
        <a href="#inicio" class="font-serif text-xl tracking-wider">
          ROSA <span class="text-[#A96F75]">STUDIO</span>
        </a>

        <p class="text-xs text-[#967B72]">
          © {{ new Date().getFullYear() }} ROSA Studio. Todos los derechos reservados.
        </p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-[#A96F75] transition hover:text-[#754E51]"
        >
          <Instagram class="h-5 w-5" />
        </a>
      </div>
    </footer>
  </main>
</template>
