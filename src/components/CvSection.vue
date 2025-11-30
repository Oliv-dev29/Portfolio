<script setup>
import { ref, onMounted } from 'vue'
import { Eye, FileText } from 'lucide-vue-next'

const cvUrl =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692b0d2d0fc4960e9ebcd6de/d88d7b9a9_Olive-FANDOHAN_CV_vf2.pdf'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section id="cv" class="relative py-16 px-6 sm:px-12 lg:px-20 overflow-hidden">
    <div class="relative w-full max-w-4xl mx-auto">
      <!-- Header -->
      <div :class="['text-center space-y-8', isVisible ? 'animate-fadeInUp' : 'opacity-0']">
        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="w-12 h-1 bg-purple-500"></div>
          <span class="text-sm font-semibold text-purple-400 uppercase tracking-wider">Mon CV</span>
          <div class="w-12 h-1 bg-purple-500"></div>
        </div>

        <h2 class="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span class="text-white">Curriculum</span>
          <span
            class="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Vitae
          </span>
        </h2>

        <p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
          Découvrez mon parcours complet, mes compétences et mes réalisations professionnelles
        </p>

        <!-- Bouton CV -->
        <div class="flex justify-center">
          <a
            :href="cvUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click.prevent="window.open(cvUrl, '_blank')"
            class="group relative overflow-hidden px-12 py-6 rounded-2xl font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-4 cursor-pointer"
          >
            <div
              class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            ></div>
            <FileText :size="28" class="relative z-10" />
            <span class="relative z-10">Voir mon CV</span>
            <Eye :size="24" class="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <!-- Info complémentaire -->
        <p class="text-sm text-gray-500 mt-8">Le document s'ouvrira dans un nouvel onglet</p>
      </div>
    </div>
  </section>
</template>
