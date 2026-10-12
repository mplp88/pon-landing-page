<script setup lang="ts">
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  MoonStar,
  Music2,
  Sparkles,
  Users,
  X,
} from 'lucide-vue-next'

const showContactModal = ref(false)
const menuOpen = ref(false)

const whatsappNumber = '5491136456357'
const instagramUrl = 'https://www.instagram.com/mibellalunadancegym/'
// TODO: Confirmar la dirección exacta y reemplazar si fuera necesario.
const mapsUrl = 'https://maps.app.goo.gl/ptmZp1QRu2bzPM78A'

// Disciplinas ilustrativas para la demo. Confirmar la oferta actual con el estudio antes de publicar.
const classes = [
  {
    name: 'Danza clásica y contemporánea',
    category: 'Técnica y expresión',
    description:
      'Un espacio para desarrollar técnica, musicalidad y expresión a través del movimiento.',
    image: '/images/demos/mi-bella-luna/danza-clasica.jpg',
    alt: 'Bailarina practicando danza clásica en un estudio',
  },
  {
    name: 'Ritmos urbanos',
    category: 'Energía y movimiento',
    description: 'Coreografías, coordinación y toda la energía de bailar en grupo.',
    image: '/images/demos/mi-bella-luna/ritmos-urbanos.jpg',
    alt: 'Grupo de bailarines practicando una coreografía urbana',
  },
  {
    name: 'Danza y expresión',
    category: 'Creatividad y confianza',
    description:
      'Un lugar para explorar el movimiento, compartir y ganar confianza sobre el escenario.',
    image: '/images/demos/mi-bella-luna/danza-expresion.jpg',
    alt: 'Grupo de bailarinas ensayando una coreografía',
  },
]

const openWhatsApp = (
  message = 'Hola, quisiera recibir información sobre las clases de Mi Bella Luna.',
) => {
  if (!whatsappNumber) {
    showContactModal.value = true
    return
  }

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  )
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <main
    class="min-h-screen overflow-hidden bg-[#fffaff] font-sans text-[#30233b] selection:bg-[#ead7f5]"
  >
    <!-- Demo notice: quitar cuando el estudio apruebe el diseño y el contenido. -->
    <div class="bg-[#342344] px-4 py-2 text-center text-xs font-medium tracking-wide text-white/85">
      Propuesta de diseño · Demo conceptual para Mi Bella Luna
    </div>

    <!-- Header -->
    <header class="absolute z-30 w-full border-b border-white/15 text-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#inicio"
          class="group flex items-center gap-3"
          aria-label="Mi Bella Luna, inicio"
          @click="closeMenu"
        >
          <span
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm"
          >
            <MoonStar class="h-6 w-6 text-[#f1d5ff]" />
          </span>
          <span class="leading-tight">
            <span class="block text-sm font-black uppercase tracking-[0.19em] md:text-base"
              >Mi Bella Luna</span
            >
            <span
              class="mt-1 block text-[9px] font-semibold uppercase tracking-[0.24em] text-white/75 md:text-[10px]"
              >Estudio de danza</span
            >
          </span>
        </a>

        <nav
          class="hidden items-center gap-8 text-sm font-semibold md:flex"
          aria-label="Navegación principal"
        >
          <a href="#nosotros" class="transition hover:text-[#f1d5ff]">Nosotras</a>
          <a href="#clases" class="transition hover:text-[#f1d5ff]">Clases</a>
          <a href="#espacio" class="transition hover:text-[#f1d5ff]">Nuestro espacio</a>
          <a
            href="#contacto"
            class="rounded-full bg-white px-5 py-3 text-[#493157] transition hover:bg-[#f1d5ff]"
            >Conocé las clases</a
          >
        </nav>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 md:hidden"
          :aria-expanded="menuOpen"
          aria-label="Abrir menú"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
      <nav
        v-if="menuOpen"
        class="space-y-1 border-t border-white/15 bg-[#342344]/95 px-5 py-4 backdrop-blur-md md:hidden"
        aria-label="Navegación móvil"
      >
        <a
          href="#nosotros"
          class="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-white/10"
          @click="closeMenu"
          >Nosotras</a
        >
        <a
          href="#clases"
          class="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-white/10"
          @click="closeMenu"
          >Clases</a
        >
        <a
          href="#espacio"
          class="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-white/10"
          @click="closeMenu"
          >Nuestro espacio</a
        >
        <a
          href="#contacto"
          class="block rounded-xl bg-white px-3 py-3 text-sm font-bold text-[#493157]"
          @click="closeMenu"
          >Conocé las clases</a
        >
      </nav>
    </header>

    <!-- Hero -->
    <section
      id="inicio"
      class="relative isolate flex min-h-180 items-center overflow-hidden bg-[#342344] md:min-h-197.5"
    >
      <img
        src="/images/demos/mi-bella-luna/hero.jpg"
        alt="Bailarinas en movimiento durante un ensayo"
        class="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        class="absolute inset-0 -z-10 bg-linear-to-r from-[#24152f]/95 via-[#342344]/70 to-[#342344]/15"
      />
      <div
        class="absolute inset-0 -z-10 bg-linear-to-t from-[#24152f]/55 via-transparent to-[#24152f]/25"
      />
      <div
        class="pointer-events-none absolute -right-24 top-36 -z-10 h-80 w-80 rounded-full bg-[#c68de4]/20 blur-3xl md:right-16 md:h-112 md:w-md"
      />

      <div class="mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div class="max-w-3xl text-white">
          <p
            class="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#f0d5ff] md:text-sm"
          >
            <span class="h-px w-9 bg-[#e7b9ff]" />
            15 años creciendo con vos
          </p>
          <h1
            class="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Tu pasión por la danza
            <span class="mt-2 block font-serif font-medium italic text-[#edceff]"
              >tiene su lugar.</span
            >
          </h1>
          <p class="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-xl md:leading-8">
            Un espacio para expresarte, aprender y crecer a través del movimiento. Vení a descubrir
            todo lo que la danza puede despertar en vos.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#clases"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-[#edceff] px-7 py-4 text-sm font-extrabold text-[#352141] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Descubrí nuestras clases <ArrowRight class="h-4 w-4" />
            </a>
            <button
              type="button"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              @click="openWhatsApp()"
            >
              <MessageCircle class="h-4 w-4" /> Consultanos por WhatsApp
            </button>
          </div>
          <div
            class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-white/75 md:text-sm"
          >
            <span class="inline-flex items-center gap-2"
              ><Heart class="h-4 w-4 text-[#edceff]" /> Pasión por enseñar</span
            >
            <span class="inline-flex items-center gap-2"
              ><Music2 class="h-4 w-4 text-[#edceff]" /> Arte y movimiento</span
            >
            <span class="inline-flex items-center gap-2"
              ><Users class="h-4 w-4 text-[#edceff]" /> Comunidad</span
            >
          </div>
        </div>
      </div>
      <a
        href="#nosotros"
        class="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white md:flex"
      >
        Seguí descubriendo <ArrowDown class="h-4 w-4" />
      </a>
    </section>

    <!-- Intro / trayectoria -->
    <section id="nosotros" class="relative px-5 py-20 md:px-8 md:py-28">
      <div
        class="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20"
      >
        <div class="relative mx-auto w-full max-w-lg">
          <div
            class="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[3rem] border-l border-t border-[#c8a4d9] md:-left-6 md:-top-6 md:h-36 md:w-36"
          />
          <div class="aspect-4/5 overflow-hidden rounded-[11rem_11rem_1.5rem_1.5rem] bg-[#eee2f4]">
            <img
              src="/images/demos/mi-bella-luna/estudio.jpg"
              alt="Interior de un estudio de danza"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="absolute -bottom-6 -right-2 flex h-32 w-32 flex-col items-center justify-center rounded-full border-8 border-[#fffaff] bg-[#e9d3f4] text-center text-[#493157] shadow-xl md:-right-8 md:h-36 md:w-36"
          >
            <span class="font-serif text-4xl font-bold leading-none">15</span>
            <span class="mt-1 text-[9px] font-extrabold uppercase tracking-[0.15em]"
              >años de danza</span
            >
          </div>
        </div>

        <div class="pt-5 md:pt-0">
          <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9465aa]">
            Mucho más que bailar
          </p>
          <h2 class="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Un espacio único para crecer cada día.
          </h2>
          <p class="mt-6 text-lg leading-8 text-[#6f6277]">
            Hace 15 años que Mi Bella Luna abre sus puertas para compartir la pasión por la danza.
            Queremos que cada persona encuentre un lugar donde aprender, expresarse y disfrutar del
            camino.
          </p>
          <p class="mt-4 leading-7 text-[#6f6277]">
            Porque cada paso cuenta, cada logro se celebra y cada historia tiene su propio ritmo.
          </p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-[#eadfee] bg-white p-5">
              <Sparkles class="h-6 w-6 text-[#a779bc]" />
              <h3 class="mt-3 font-bold">Aprender y descubrir</h3>
              <p class="mt-2 text-sm leading-6 text-[#7b6c82]">
                Un entorno para desarrollar habilidades y explorar nuevas formas de expresión.
              </p>
            </div>
            <div class="rounded-2xl border border-[#eadfee] bg-white p-5">
              <Heart class="h-6 w-6 text-[#a779bc]" />
              <h3 class="mt-3 font-bold">Compartir la pasión</h3>
              <p class="mt-2 text-sm leading-6 text-[#7b6c82]">
                La alegría de bailar, trabajar en equipo y celebrar cada avance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Classes -->
    <section id="clases" class="bg-[#f5edf8] px-5 py-20 md:px-8 md:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9465aa]">
            Encontrá tu ritmo
          </p>
          <h2 class="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Hay una danza para vos.
          </h2>
          <p class="mt-5 leading-7 text-[#75677d]">
            Conocé algunas de las propuestas que podrían formar parte de nuestra escuela y
            consultanos cuál es la indicada para vos.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(danceClass, index) in classes"
            :key="danceClass.name"
            class="group overflow-hidden rounded-3xl border border-[#e7d8ed] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#79568a]/10"
          >
            <div class="relative aspect-4/3 overflow-hidden bg-[#e6d7ed]">
              <img
                :src="danceClass.image"
                :alt="danceClass.alt"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span
                class="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#60436e]"
                >{{ danceClass.category }}</span
              >
              <span
                class="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#edceff] text-[#493157]"
                ><Music2 class="h-5 w-5"
              /></span>
            </div>
            <div class="p-6 md:p-7">
              <p class="text-xs font-bold tracking-[0.18em] text-[#a17bb1]">0{{ index + 1 }}</p>
              <h3 class="mt-2 text-xl font-extrabold">{{ danceClass.name }}</h3>
              <p class="mt-3 text-sm leading-6 text-[#7b6c82]">{{ danceClass.description }}</p>
              <button
                type="button"
                class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#79518c] transition hover:gap-3"
                @click="
                  openWhatsApp(
                    `Hola, quisiera consultar por las clases de ${danceClass.name} en Mi Bella Luna.`,
                  )
                "
              >
                Consultar por esta clase <ArrowRight class="h-4 w-4" />
              </button>
            </div>
          </article>
        </div>
        <p class="mt-7 text-center text-xs leading-5 text-[#897a91]">
          Las disciplinas de esta sección son ilustrativas y deben confirmarse con el estudio.
        </p>
      </div>
    </section>

    <!-- Space / community -->
    <section id="espacio" class="px-5 py-20 md:px-8 md:py-28">
      <div class="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <div class="order-2 md:order-1">
          <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9465aa]">
            Cada paso, una historia
          </p>
          <h2 class="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Crecer juntas también es parte de la danza.
          </h2>
          <p class="mt-6 text-lg leading-8 text-[#6f6277]">
            Ensayos, desafíos, escenarios y pequeños grandes logros. La danza nos invita a
            superarnos, compartir y crear recuerdos que van mucho más allá de una coreografía.
          </p>
          <div class="mt-8 space-y-4">
            <div class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0e2f6] text-[#805b93]"
                ><CalendarDays class="h-5 w-5"
              /></span>
              <div>
                <h3 class="font-bold">Un camino para disfrutar</h3>
                <p class="mt-1 text-sm leading-6 text-[#7b6c82]">
                  Cada clase es una oportunidad para aprender algo nuevo y avanzar a tu propio
                  ritmo.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0e2f6] text-[#805b93]"
                ><Users class="h-5 w-5"
              /></span>
              <div>
                <h3 class="font-bold">Una comunidad que acompaña</h3>
                <p class="mt-1 text-sm leading-6 text-[#7b6c82]">
                  Compartir la experiencia hace que cada logro se disfrute todavía más.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0e2f6] text-[#805b93]"
                ><CheckCircle2 class="h-5 w-5"
              /></span>
              <div>
                <h3 class="font-bold">Quince años de trayectoria</h3>
                <p class="mt-1 text-sm leading-6 text-[#7b6c82]">
                  Una historia que sigue creciendo con cada persona que se suma.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 grid grid-cols-2 gap-4 md:order-2">
          <img
            src="/images/demos/mi-bella-luna/comunidad-1.jpg"
            alt="Bailarinas compartiendo un ensayo"
            class="mt-10 aspect-3/4 w-full rounded-[8rem_8rem_1.25rem_1.25rem] object-cover"
            loading="lazy"
          />
          <img
            src="/images/demos/mi-bella-luna/comunidad-2.jpg"
            alt="Presentación de danza en un escenario"
            class="aspect-3/4 w-full rounded-[1.25rem_1.25rem_8rem_8rem] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section
      id="contacto"
      class="relative isolate overflow-hidden bg-[#342344] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div
        class="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#a779bc]/20 blur-3xl"
      />
      <div
        class="absolute -bottom-36 -right-20 -z-10 h-96 w-96 rounded-full bg-[#d8a8ef]/15 blur-3xl"
      />
      <div class="mx-auto max-w-4xl text-center">
        <span
          class="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10"
          ><MoonStar class="h-7 w-7 text-[#edceff]"
        /></span>
        <p class="mt-7 text-xs font-extrabold uppercase tracking-[0.25em] text-[#edceff]">
          Tu próxima historia puede empezar hoy
        </p>
        <h2
          class="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl"
        >
          ¿Bailamos?
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          Escribinos para conocer las clases, consultar edades y horarios, y encontrar la propuesta
          ideal para vos.
        </p>
        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-[#edceff] px-7 py-4 text-sm font-extrabold text-[#352141] transition hover:bg-white"
            @click="openWhatsApp()"
          >
            <MessageCircle class="h-4 w-4" /> Consultar por WhatsApp
          </button>
          <a
            :href="mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            ><MapPin class="h-4 w-4" /> Cómo llegar</a
          >
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#24172d] px-5 py-8 text-white/65 md:px-8">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"
      >
        <a href="#inicio" class="flex items-center gap-3 text-white">
          <MoonStar class="h-6 w-6 text-[#edceff]" />
          <span
            ><span class="block text-xs font-black uppercase tracking-[0.18em]">Mi Bella Luna</span
            ><span class="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/55"
              >Estudio de danza</span
            ></span
          >
        </a>
        <p class="text-xs">15 años compartiendo nuestra pasión por la danza.</p>
        <a
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-bold transition hover:text-white"
          >Instagram <ArrowRight class="ml-1 inline h-3 w-3"
        /></a>
      </div>
      <p class="mx-auto mt-6 max-w-7xl text-center text-[10px] text-white/35">
        Demo conceptual no oficial. Contenido e imágenes sujetos a aprobación del estudio.
      </p>
    </footer>

    <!-- Contact modal shown until the real WhatsApp number is configured -->
    <Teleport to="body">
      <div
        v-if="showContactModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-[#201429]/75 p-5 backdrop-blur-sm"
        @click.self="showContactModal = false"
      >
        <section
          class="w-full max-w-md rounded-3xl bg-[#fffaff] p-7 text-[#30233b] shadow-2xl md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="text-xs font-extrabold uppercase tracking-[0.2em] text-[#9465aa]"
                >Hablemos</span
              >
              <h2 id="contact-modal-title" class="mt-2 text-2xl font-black">
                Conocé Mi Bella Luna
              </h2>
            </div>
            <button
              type="button"
              class="rounded-full p-2 text-[#7b6c82] transition hover:bg-[#f0e2f6]"
              aria-label="Cerrar"
              @click="showContactModal = false"
            >
              <X class="h-5 w-5" />
            </button>
          </div>
          <p class="mt-4 text-sm leading-6 text-[#7b6c82]">
            En la versión final, este botón abrirá una conversación directa por WhatsApp. Mientras
            tanto, podés visitar el perfil de Instagram del estudio.
          </p>
          <a
            :href="instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#493157] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#60436e]"
            ><ArrowRight class="h-4 w-4" /> Visitar Instagram</a
          >
          <button
            type="button"
            class="mt-3 w-full rounded-full px-5 py-3 text-sm font-bold text-[#6f6277] transition hover:bg-[#f0e2f6]"
            @click="showContactModal = false"
          >
            Cerrar
          </button>
        </section>
      </div>
    </Teleport>
  </main>
</template>
