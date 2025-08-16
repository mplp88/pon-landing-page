# Martín Ponce - Developer Landing Page

A modern, futuristic Vue.js single-page application (SPA) template designed for web developers to showcase their portfolio professionally. Features a sleek blue color palette, smooth animations, and responsive design.

## ✨ Features

- **Futuristic Design**: Modern gradient backgrounds, glowing effects, and smooth animations
- **Professional Layout**: Clean sections for hero introduction, project showcase, and contact information
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Vue 3 Composition API**: Built with modern Vue.js patterns and reactive data
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and functional contact form
- **Blue Color Palette**: Professional blue and cyan color scheme with subtle gradients

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**
```bash
git clone pon-landing-page
cd pon-landing-page
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── App.vue          # Main application component
└── main.js          # Application entry point
```

## 🎨 Customization

### Personal Information
Update the reactive data in `App.vue` to customize:
- Developer name and title
- Hero section description
- Project showcase items
- Contact information
- Social media links

### Styling
The template uses Tailwind CSS classes for all styling. Key design elements:
- **Colors**: Blue and cyan gradients (`from-blue-600`, `to-cyan-500`)
- **Animations**: Smooth transitions and hover effects
- **Typography**: Clean, modern font hierarchy
- **Layout**: Flexbox-based responsive design

### Projects Section
Add your projects by updating the `projects` array:
```js
const projects = ref([
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["Vue.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-url.com"
  }
])
```

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- **Mobile**: Base styles (default)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

## 🛠️ Built With

- **Vue.js 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## 📄 License

This template has MIT license, free to use for personal and commercial projects.
