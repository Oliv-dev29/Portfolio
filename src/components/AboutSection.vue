<script setup>
import { ref, onMounted } from 'vue'
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

const profileImage = ref(null)
const isUploading = ref(false)
const isVisible = ref(false)

const stats = [
  { value: '4+', label: "Années d'expérience", icon: Award },
  { value: '20+', label: 'Projets réalisés', icon: Code },
  { value: '100%', label: 'Satisfaction client', icon: Sparkles },
]

const handleImageUpload = async (e) => {
  const file = e.target.files[0]
  if (file) {
    isUploading.value = true
    try {
      const reader = new FileReader()
      reader.onload = (event) => {
        profileImage.value = event.target.result

        localStorage.setItem('portfolioProfileImage', event.target.result)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Upload failed:', error)
    }
    isUploading.value = false
  }
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // Restaurer l'image depuis localStorage si elle existe
  const savedImage = localStorage.getItem('portfolioProfileImage')
  if (savedImage) {
    profileImage.value = savedImage
  }
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
                  v-if="profileImage"
                  :src="profileImage"
                  alt="Olive FANDOHAN"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div v-else class="w-full h-full flex flex-col items-center justify-center">
                  <label class="cursor-pointer flex flex-col items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      @change="handleImageUpload"
                      class="hidden"
                    />
                    <Upload :size="40" class="text-blue-400" />
                    <span class="text-sm text-blue-400 font-semibold">Ajouter une photo</span>
                  </label>
                </div>
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
              Olive Marthe Fandohan
            </span>
          </h1>

          <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <div class="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-300">
              Data Analyst & Full Stack Developer
            </p>
            <div class="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <p
            class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Passionnée par la transformation des données en insights actionnables, je combine
            <span class="text-blue-400 font-semibold">4+ années d'expérience</span> en analyse de
            données avec une expertise en
            <span class="text-cyan-400 font-semibold">développement web moderne</span> pour créer
            des solutions innovantes et impactantes.
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
            <span>Démarrons un projet</span>
            <ArrowRight :size="20" class="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            class="card-pro inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            <Code :size="20" class="text-cyan-400" />
            <span class="text-white font-semibold">Voir mes projets</span>
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

    <!-- Indicateur de scroll -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div
        class="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2"
      >
        <div class="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
</template>
