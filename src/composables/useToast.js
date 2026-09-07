import { ref } from 'vue'

const ToastVariant = {
  default: 'default',
  destructive: 'destructive',
  success: 'success',
  warning: 'warning',
  info: 'info',
}

const toasts = ref([])
let idCounter = 0

export function useToast() {
  function addToast(toast) {
    const id = ++idCounter
    toasts.value.push({ id, ...toast })
    // auto dismiss
    setTimeout(() => dismissToast(id), 4000)
  }

  function dismissToast(id) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return {
    toasts,
    ToastVariant,
    addToast,
    dismissToast,
  }
}
