<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
    <HeaderComponent />

    <main>
      <slot></slot>
    </main>

    <FooterComponent />
  </div>

  <ToastProvider />
</template>
