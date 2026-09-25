# Martín Ponce — Freelance Web Developer

Personal portfolio and freelance web development website built with Nuxt, Vue 3 and Tailwind CSS.

The website showcases my experience, services, selected projects and interactive examples of websites that can be built for businesses and professionals.

🌐 **Live website:** https://www.martinponce.com.ar

## ✨ Features

- **Bilingual website** — English and Spanish with localized routes and SEO
- **Responsive design** — Optimized for mobile, tablet and desktop
- **Custom web development services** — Landing pages, professional websites and web applications
- **Interactive landing page demos** — Different designs for businesses and professionals
- **Project showcase** — Real-world projects and future applications
- **SEO optimized** — Localized metadata, Open Graph tags, canonical URLs and sitemap
- **Modern UI** — Dark blue and cyan visual identity with subtle gradients and animations
- **Smooth navigation** — Section scrolling and responsive navigation
- **Contact form** — Integrated with a backend API
- **Reusable components** — Shared layouts and components across the website

## 🛠️ Tech Stack

### Frontend

- **Nuxt** — Full-stack Vue framework
- **Vue 3** — Composition API
- **TypeScript**
- **Tailwind CSS**
- **Lucide Vue Next** — Icons
- **Nuxt i18n** — Internationalization

### Infrastructure

- **Vercel** — Hosting and deployment
- **Custom API** — Contact form backend
- **Google Search Console** — Search performance monitoring

## 📁 Project Structure

```text
.
├── components/
│   ├── demos/
│   │   ├── BarberLanding.vue
│   │   ├── ProfessionalLanding.vue
│   │   └── RestaurantLanding.vue
│   ├── AboutSection.vue
│   ├── ContactSection.vue
│   ├── DemoBackButton.vue
│   ├── DemoPreview.vue
│   ├── FooterComponent.vue
│   ├── HeaderComponent.vue
│   ├── ProjectsSection.vue
│   ├── ServicesSection.vue
│   ├── UnderConstruction.vue
│   └── ...
│
├── layouts/
│   ├── default.vue
│   └── demo.vue
│
├── locales/
│   ├── en.ts
│   └── es.ts
│
├── pages/
│   ├── index.vue
│   ├── services/
│   │   ├── landing-pages.vue
│   │   ├── web-sites.vue
│   │   └── web-apps.vue
│   └── demos/
│       ├── barber-shop.vue
│       ├── restaurant.vue
│       └── professional.vue
│
├── public/
│   ├── images/
│   │   └── demos/
│   ├── favicon.png
│   ├── robots.txt
│   └── sitemap.xml
│
├── nuxt.config.ts
├── package.json
└── tsconfig.json
```

## 🌍 Internationalization

The website supports two languages:

- 🇬🇧 English — default locale
- 🇪🇸 Spanish

English uses the root route while Spanish uses the `/es` prefix.

Examples:

```text
/                          → English homepage
/es                        → Spanish homepage

/services/landing-pages    → English
/es/services/landing-pages → Spanish
```

The language selector allows visitors to switch between both versions while preserving the current page whenever possible.

## 💼 Services

The website presents three main development services:

### Landing Pages

Conversion-oriented single-page websites for businesses, professionals, products and campaigns.

### Professional Websites

Multi-section websites designed to establish a professional online presence, including content and informational pages.

### Custom Web Applications

Web applications built around specific business requirements and workflows.

## 🧪 Interactive Demos

The Landing Pages service includes interactive examples demonstrating how the same development approach can be adapted to different types of projects.

Current examples include:

- **Barbershop**
- **Restaurant**
- **Independent professional**

Each demo has its own visual identity and layout while sharing the same underlying component architecture.

## 📂 Selected Projects

The portfolio includes real projects developed for clients and personal projects.

One of the current examples is:

**Maternidad y Emociones**  
Professional website with service presentation and blog functionality.

🌐 https://maternidadyemociones.com.ar

Additional projects and applications will be added as they are completed.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/mplp88/pon-landing-page.git
cd pon-landing-page
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## ⚙️ Configuration

The project uses Nuxt configuration for:

- Internationalization
- SEO
- Site metadata
- Tailwind CSS
- Runtime configuration
- Deployment settings

Before deploying your own version, review:

```text
nuxt.config.ts
```

and the localized content in:

```text
locales/
```

## 🎨 Design

The visual identity combines:

- Dark navy and blue backgrounds
- Cyan accents
- Subtle gradients
- Glass-like surfaces
- Responsive layouts
- Minimal animations
- Lucide icons

The design intentionally balances a **technical and modern aesthetic with a professional presentation**, avoiding an overly futuristic or cyberpunk appearance.

## 📈 Performance & SEO

Performance is an important part of the project.

The website is optimized for:

- Responsive images
- Semantic HTML
- SEO metadata
- Open Graph metadata
- Localized pages
- Canonical URLs
- Sitemap
- Robots directives
- Mobile performance

## 📄 License

This project is the personal portfolio and freelance website of Martín Ponce.

The source code is publicly available for reference and learning purposes. Reuse of the complete website, branding, content or personal information is not permitted without authorization.
