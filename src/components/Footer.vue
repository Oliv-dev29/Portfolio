<script setup>
import { Heart, ArrowUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
    <!-- Decorative top gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>

    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 py-12">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <!-- Left - Copyright -->
        <div class="text-center sm:text-left">
          <p class="text-slate-400 text-sm sm:text-base flex items-center gap-2 justify-center sm:justify-start">
            © {{ currentYear }} <span class="font-semibold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Olive FANDOHAN</span>
            <span class="hidden sm:inline">•</span>
            <span class="flex items-center gap-1">
              Fait avec <Heart :size="16" class="text-red-500 animate-pulse" fill="currentColor" />
            </span>
          </p>
        </div>

        <!-- Right - Scroll to top -->
        <button
          @click="scrollToTop"
          class="group px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <span>Retour en haut</span>
          <ArrowUp :size="16" class="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </footer>
</template>
