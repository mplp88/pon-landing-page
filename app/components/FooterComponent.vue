<script setup>
const brandName = ref('Martín Ponce')
</script>

<template>
  <!-- Footer -->
  <footer class="py-8 border-t border-slate-700">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <p class="text-slate-400">© {{ new Date().getFullYear() }} {{ brandName }}.</p>
    </div>
  </footer>
</template>
