<script setup>
import { ref, onMounted } from 'vue'
import { Download, Eye, FileText, Calendar, FileCheck, Sparkles } from 'lucide-vue-next'

const cvUrl =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692b0d2d0fc4960e9ebcd6de/d88d7b9a9_Olive-FANDOHAN_CV_vf2.pdf'

const isVisible = ref(false)
const stats = [
  { icon: FileText, label: 'Laravel • Vue.js • React', color: 'from-blue-500 to-cyan-500' },
  { icon: FileCheck, label: '15+ Projets livrés', color: 'from-purple-500 to-pink-500' },
  { icon: Calendar, label: 'Format PDF', color: 'from-green-500 to-emerald-500' },
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="cv"
    class="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
  >
    <!-- Animated background particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"
        style="animation-delay: -3s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
      ></div>
    </div>

    <div class="relative w-full max-w-[1400px] mx-auto">
      <!-- Header -->
      <div :class="['text-center mb-16 sm:mb-20', isVisible ? 'animate-fadeInUp' : 'opacity-0']">
        <div
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-lg mb-6 backdrop-blur-xl"
        >
          <FileText :size="20" class="text-purple-400 animate-glow" />
          <span
            class="text-sm font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
          >
            Mon CV
          </span>
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span class="text-white">Olive</span>
          <span class="gradient-text"> FANDOHAN</span>
        </h2>

        <p class="text-xl sm:text-2xl text-slate-300 mb-3">
          Data Analyst & Biostatisticienne • 4+ ans d'expérience
        </p>

        <p class="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Téléchargez ou visualisez mon CV pour découvrir mon parcours complet et mes réalisations
        </p>
      </div>

      <!-- Main Content -->
      <div
        :class="[
          'grid lg:grid-cols-2 gap-12 xl:gap-16 items-center',
          isVisible ? 'animate-fadeInUp' : 'opacity-0',
        ]"
        style="animation-delay: 0.2s"
      >
        <!-- Left - CV Card -->
        <div class="relative group">
          <!-- Glow effects -->
          <div
            class="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 animate-gradient"
          ></div>
          <div
            class="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity animate-gradient"
          ></div>

          <!-- Card Container -->
          <div
            class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl"
          >
            <!-- Icon Badge -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 animate-pulse"
                ></div>
                <div
                  class="relative bg-gradient-to-br from-purple-600 to-pink-600 p-5 rounded-2xl shadow-xl"
                >
                  <FileText :size="36" class="text-white" />
                </div>
              </div>
            </div>

            <!-- CV Preview -->
            <div class="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950 mt-8">
              <iframe
                :src="`${cvUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`"
                class="w-full h-full"
                title="CV Olive FANDOHAN"
                loading="lazy"
              />
            </div>

            <!-- Info Banner -->
            <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
              <div
                class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 shadow-xl backdrop-blur-xl border border-white/10"
              >
                <div class="flex items-center justify-center gap-3 text-white">
                  <Sparkles :size="20" class="animate-glow" />
                  <span class="font-semibold text-sm sm:text-base">Olive FANDOHAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Info & Actions -->
        <div class="space-y-8 lg:space-y-10">
          <!-- Info Section -->
          <div class="space-y-6">
            <h3 class="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Data Analyst & Biostatisticienne
            </h3>
            <p class="text-lg text-slate-300 leading-relaxed">4+ ans d'expérience</p>
            <p class="text-base text-slate-400 leading-relaxed">
              Mon CV détaille l'ensemble de mon parcours professionnel, mes compétences techniques
              en développement web et data science, ainsi que mes réalisations majeures.
            </p>
          </div>

          <!-- Stats Badges -->
          <div class="grid grid-cols-1 gap-4">
            <div v-for="(stat, index) in stats" :key="index" class="group relative overflow-hidden">
              <div
                :class="[
                  'absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity rounded-2xl',
                  stat.color,
                ]"
              ></div>
              <div
                class="relative flex items-center gap-4 p-5 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300"
              >
                <div :class="['p-3 rounded-xl bg-gradient-to-br text-white shadow-lg', stat.color]">
                  <component :is="stat.icon" :size="24" />
                </div>
                <span class="font-semibold text-white text-base">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              :href="cvUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 rounded-full font-bold text-base border-2 border-slate-600 text-white bg-slate-800/50 hover:bg-slate-700/50 hover:border-slate-500 backdrop-blur-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <Eye :size="20" />
              <span>Visualiser en plein écran</span>
            </a>

            <a
              :href="cvUrl"
              download="Olive_FANDOHAN_CV.pdf"
              class="group relative overflow-hidden px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <div
                class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              ></div>
              <Download :size="20" class="relative z-10" />
              <span class="relative z-10">Télécharger le CV</span>
            </a>
          </div>

          <!-- Footer Info -->
          <div class="pt-6 border-t border-slate-700/50">
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2 text-slate-400">
                <Calendar :size="16" />
                <span>Dernière mise à jour : Novembre 2025</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-slate-400">Document au format PDF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
