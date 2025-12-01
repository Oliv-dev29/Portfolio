<script setup>
import { ref, onMounted, computed } from 'vue'
import {
  Upload,
  Mail,
  ArrowRight,
  Briefcase,
  Award,
  Code,
  Database,
  Sparkles,
  Zap,
} from 'lucide-vue-next'

const isVisible = ref(false)
const typedSubtitle = ref('')
const typedDescription = ref('')
const showCursor = ref(true)

const formattedDescription = computed(() => {
  return typedDescription.value
    .replace(
      /4\+ années d'expérience/g,
      '<span class="text-blue-400 font-semibold">4+ années d\'expérience</span>',
    )
    .replace(
      /développement web moderne/g,
      '<span class="text-cyan-400 font-semibold">développement web moderne</span>',
    )
})

const stats = [
  { value: '4+', label: "Années d'expérience", icon: Award },
  { value: '20+', label: 'Portfolio réalisé', icon: Code },
  { value: '100%', label: 'Satisfaction client', icon: Sparkles },
]

const typeWriter = (text, target, delay = 50) => {
  let index = 0
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (index < text.length) {
        target.value += text.charAt(index)
        index++
      } else {
        clearInterval(interval)
        resolve()
      }
    }, delay)
  })
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // Démarrer les animations typing
  setTimeout(async () => {
    await typeWriter('Data Analyst & Full Stack Developer', typedSubtitle, 60)
    await new Promise((resolve) => setTimeout(resolve, 300))
    await typeWriter(
      "Passionnée par la transformation des données en insights actionnables, je combine 4+ années d'expérience en analyse de données avec une expertise en développement web moderne pour créer des solutions innovantes et impactantes.",
      typedDescription,
      30,
    )
    showCursor.value = false
  }, 800)
})
</script>

<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center pt-32 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden"
  >
    <div class="relative w-full max-w-7xl mx-auto">
      <!-- Hero centré avec photo en haut -->
      <div class="text-center space-y-12">
        <!-- Photo professionnelle centrée -->
        <div
          :class="['flex justify-center', isVisible ? 'animate-fade-in' : 'opacity-0']"
          style="animation-delay: 0.1s"
        >
          <div class="relative group">
            <!-- Halo bleu -->
            <div
              class="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            ></div>

            <!-- Conteneur photo -->
            <div
              class="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl backdrop-blur-sm"
            >
              <div class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="../assets/img/olive.jpeg"
                  alt="Olive FANDOHAN"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Titre et introduction -->
        <div
          :class="['max-w-4xl mx-auto space-y-6', isVisible ? 'animate-slide-up' : 'opacity-0']"
          style="animation-delay: 0.2s"
        >
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
          >
            <span
              class="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Olive Marthe FANDOHAN
            </span>
          </h1>

          <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <div class="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <p
              class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 min-h-[1.5em]"
            >
              {{ typedSubtitle
              }}<span v-if="showCursor && typedSubtitle.length < 38" class="animate-pulse">|</span>
            </p>
            <div class="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <p
            class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto px-4 min-h-[4em]"
          >
            <span v-html="formattedDescription"></span
            ><span v-if="showCursor" class="animate-pulse">|</span>
          </p>
        </div>

        <!-- Stats Cards -->
        <div
          :class="[
            'grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4',
            isVisible ? 'animate-fade-in' : 'opacity-0',
          ]"
          style="animation-delay: 0.3s"
        >
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="card-pro group hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6"
          >
            <div class="flex flex-col items-center gap-3">
              <div
                class="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300"
              >
                <component :is="stat.icon" :size="32" class="text-blue-400" />
              </div>
              <div
                class="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                {{ stat.value }}
              </div>
              <div class="text-sm font-medium text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div
          :class="[
            'flex flex-col sm:flex-row items-center justify-center gap-4 px-4',
            isVisible ? 'animate-fade-in' : 'opacity-0',
          ]"
          style="animation-delay: 0.4s"
        >
          <a
            href="#contact"
            class="btn-primary inline-flex items-center justify-center gap-3 group w-full sm:w-auto"
          >
            <span>Démarrons mon portfolio</span>
            <ArrowRight :size="20" class="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            class="card-pro inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            <Code :size="20" class="text-cyan-400" />
            <span class="text-white font-semibold">Voir mon portfolio</span>
          </a>
        </div>

        <!-- Contact Email -->
        <div
          :class="[
            'inline-flex items-center gap-3 px-6 py-3 card-pro',
            isVisible ? 'animate-fade-in' : 'opacity-0',
          ]"
          style="animation-delay: 0.5s"
        >
          <Mail :size="20" class="text-blue-400" />
          <a
            href="mailto:olive.fandohan@epitech.eu"
            class="font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            olive.fandohan@epitech.eu
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
