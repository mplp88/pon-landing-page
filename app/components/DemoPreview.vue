<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const container = ref<HTMLElement | null>(null)
const containerWidth = ref(0)

const DESIGN_WIDTH = 1200

const scale = computed(() => {
  if (!containerWidth.value) {
    return 1
  }

  return containerWidth.value / DESIGN_WIDTH
})

let observer: ResizeObserver | null = null

onMounted(() => {
  if (!container.value) {
    return
  }

  observer = new ResizeObserver(([entry]) => {
    containerWidth.value = entry!.contentRect.width
  })

  observer.observe(container.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="container" class="relative h-full w-full overflow-hidden">
    <!-- Virtual viewport -->
    <div
      class="absolute left-1/2 top-0"
      :style="{
        width: `${DESIGN_WIDTH}px`,
        transform: 'translateX(-50%)',
      }"
    >
      <!-- Scaled content -->
      <div
        :style="{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
