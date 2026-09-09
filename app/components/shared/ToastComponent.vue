<template>
  <ToastProvider>
    <!-- Vista general de los toasts -->
    <ToastViewport
      class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
    />

    <!-- Ejemplo de un Toast -->
    <ToastRoot :class="toastVariants({ variant: 'default' })" default-open>
      <div>
        <ToastTitle class="text-sm font-semibold tracking-wide"> Notificación </ToastTitle>
        <ToastDescription class="text-sm opacity-90">
          Este es un mensaje de ejemplo
        </ToastDescription>
      </div>

      <ToastAction
        alt-text="Acción"
        class="inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-blue-500/30 bg-blue-600/20 px-3 text-sm font-medium text-blue-100 backdrop-blur-sm transition-all hover:bg-blue-500/30 hover:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50"
      >
        Acción
      </ToastAction>

      <ToastClose
        class="absolute right-2 top-2 rounded-md p-1 text-blue-300/70 opacity-0 transition-all hover:text-blue-100 hover:bg-blue-500/20 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 group-hover:opacity-100"
      >
        <X class="h-4 w-4" />
      </ToastClose>
    </ToastRoot>
  </ToastProvider>
</template>

<script setup>
import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastViewport,
} from 'radix-vue'
import { X } from 'lucide-vue-next'
import { cva } from 'class-variance-authority'

// Variantes del toast (igual que en React)
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-6 pr-8 shadow-2xl backdrop-blur-sm transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default:
          'border-blue-500/30 bg-gradient-to-r from-slate-900/95 to-blue-900/95 text-blue-50 shadow-blue-500/20 ring-1 ring-blue-500/20',
        destructive:
          'border-red-500/30 bg-gradient-to-r from-slate-900/95 to-red-900/95 text-red-50 shadow-red-500/20 ring-1 ring-red-500/20',
        success:
          'border-cyan-500/30 bg-gradient-to-r from-slate-900/95 to-cyan-900/95 text-cyan-50 shadow-cyan-500/20 ring-1 ring-cyan-500/20',
        warning:
          'border-amber-500/30 bg-gradient-to-r from-slate-900/95 to-amber-900/95 text-amber-50 shadow-amber-500/20 ring-1 ring-amber-500/20',
        info: 'border-blue-400/30 bg-gradient-to-r from-slate-900/95 to-blue-800/95 text-blue-100 shadow-blue-400/20 ring-1 ring-blue-400/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
</script>
