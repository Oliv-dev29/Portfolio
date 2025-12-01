<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  ArrowLeft,
  Calendar,
  Github,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight,
} from 'lucide-vue-next'
import { projectsData } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const currentImageIndex = ref(0)
const isVisible = ref(false)

const project = computed(() => {
  const id = parseInt(route.params.id)
  return projectsData.find((p) => p.id === id)
})

const nextImage = () => {
  if (project.value && project.value.images) {
    currentImageIndex.value = (currentImageIndex.value + 1) % project.value.images.length
  }
}

const prevImage = () => {
  if (project.value && project.value.images) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + project.value.images.length) % project.value.images.length
  }
}

const goBack = () => {
  router.push({ name: 'Home', hash: '#projects' })
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div
    v-if="project"
    class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
  >
    <!-- Header avec bouton retour -->
    <div
      class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4">
        <button
          @click="goBack"
          class="group flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" />
          Retour au portfolio
        </button>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="pt-24 pb-20 px-6 sm:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <!-- En-tête du portfolio -->
        <div :class="['mb-12 sm:mb-16', isVisible ? 'animate-fadeInDown' : 'opacity-0']">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <span class="text-sm font-semibold text-blue-400 uppercase tracking-wider">{{
              project.category
            }}</span>
          </div>

          <h1
            class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white"
          >
            {{ project.title }}
          </h1>

          <div class="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
            <div class="flex items-center gap-2">
              <Calendar :size="18" />
              <span>{{ project.period }}</span>
            </div>
            <span class="w-1 h-1 rounded-full bg-blue-500"></span>
            <span>{{ project.institution }}</span>
          </div>

          <p class="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl">
            {{ project.description }}
          </p>
        </div>

        <!-- Galerie d'images -->
        <div
          v-if="project.images && project.images.length > 0"
          :class="['mb-12 sm:mb-16', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
          style="animation-delay: 0.2s"
        >
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              :src="project.images[currentImageIndex]"
              :alt="`${project.title} - Image ${currentImageIndex + 1}`"
              class="w-full h-96 sm:h-[500px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

            <!-- Navigation des images -->
            <div
              v-if="project.images.length > 1"
              class="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                @click="prevImage"
                class="p-3 rounded-full bg-slate-900/80 backdrop-blur-sm text-white hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft :size="24" />
              </button>
              <button
                @click="nextImage"
                class="p-3 rounded-full bg-slate-900/80 backdrop-blur-sm text-white hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight :size="24" />
              </button>
            </div>

            <!-- Indicateurs -->
            <div
              v-if="project.images.length > 1"
              class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
            >
              <button
                v-for="(img, index) in project.images"
                :key="index"
                @click="currentImageIndex = index"
                :class="[
                  'w-2 h-2 rounded-full transition-all duration-300',
                  currentImageIndex === index
                    ? 'bg-blue-500 w-8'
                    : 'bg-slate-600 hover:bg-slate-500',
                ]"
              ></button>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <!-- Colonne principale -->
          <div class="lg:col-span-2 space-y-8 sm:space-y-12">
            <!-- Description détaillée -->
            <div
              :class="[
                'card-pro p-6 sm:p-8 rounded-2xl',
                isVisible ? 'animate-fadeInUp' : 'opacity-0',
              ]"
              style="animation-delay: 0.3s"
            >
              <h2
                class="font-display text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3"
              >
                <div class="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                Description détaillée
              </h2>
              <div
                class="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
                v-html="project.detailedDescription"
              ></div>
            </div>

            <!-- Fonctionnalités -->
            <div
              v-if="project.features"
              :class="[
                'card-pro p-6 sm:p-8 rounded-2xl',
                isVisible ? 'animate-fadeInUp' : 'opacity-0',
              ]"
              style="animation-delay: 0.4s"
            >
              <h2
                class="font-display text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3"
              >
                <div
                  class="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"
                ></div>
                Fonctionnalités principales
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in project.features"
                  :key="index"
                  class="flex items-start gap-3 text-gray-300"
                >
                  <CheckCircle2 :size="20" class="text-green-400 mt-1 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Défis -->
            <div
              v-if="project.challenges"
              :class="[
                'card-pro p-6 sm:p-8 rounded-2xl',
                isVisible ? 'animate-fadeInUp' : 'opacity-0',
              ]"
              style="animation-delay: 0.5s"
            >
              <h2
                class="font-display text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3"
              >
                <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                Défis rencontrés
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="(challenge, index) in project.challenges"
                  :key="index"
                  class="flex items-start gap-3 text-gray-300"
                >
                  <Target :size="20" class="text-orange-400 mt-1 flex-shrink-0" />
                  <span>{{ challenge }}</span>
                </li>
              </ul>
            </div>

            <!-- Apprentissages -->
            <div
              v-if="project.learnings"
              :class="[
                'card-pro p-6 sm:p-8 rounded-2xl',
                isVisible ? 'animate-fadeInUp' : 'opacity-0',
              ]"
              style="animation-delay: 0.6s"
            >
              <h2
                class="font-display text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3"
              >
                <div
                  class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                ></div>
                Apprentissages clés
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="(learning, index) in project.learnings"
                  :key="index"
                  class="flex items-start gap-3 text-gray-300"
                >
                  <Lightbulb :size="20" class="text-purple-400 mt-1 flex-shrink-0" />
                  <span>{{ learning }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Technologies -->
            <div
              :class="[
                'card-pro p-6 rounded-2xl sticky top-24',
                isVisible ? 'animate-fadeInUp' : 'opacity-0',
              ]"
              style="animation-delay: 0.3s"
            >
              <h3 class="font-display text-xl font-bold mb-4 text-white">Technologies</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-4 py-2 rounded-xl text-sm font-bold border border-blue-500/50 bg-blue-500/20 text-blue-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Liens -->
            <div
              :class="['card-pro p-6 rounded-2xl', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
              style="animation-delay: 0.4s"
            >
              <h3 class="font-display text-xl font-bold mb-4 text-white">Liens</h3>
              <div class="space-y-3">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-white transition-all duration-300 group"
                >
                  <div class="flex items-center gap-3">
                    <Github :size="20" />
                    <span class="font-semibold">GitHub</span>
                  </div>
                  <ExternalLink
                    :size="16"
                    class="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-300 group"
                >
                  <div class="flex items-center gap-3">
                    <ExternalLink :size="20" />
                    <span class="font-semibold">Démo en ligne</span>
                  </div>
                  <ExternalLink
                    :size="16"
                    class="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>

            <!-- Informations -->
            <div
              :class="['card-pro p-6 rounded-2xl', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
              style="animation-delay: 0.5s"
            >
              <h3 class="font-display text-xl font-bold mb-4 text-white">Informations</h3>
              <div class="space-y-3 text-gray-300">
                <div>
                  <p class="text-sm text-gray-500 mb-1">Catégorie</p>
                  <p class="font-semibold">{{ project.category }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">Période</p>
                  <p class="font-semibold">{{ project.period }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">Institution</p>
                  <p class="font-semibold">{{ project.institution }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Message d'erreur si le portfolio n'existe pas -->
  <div
    v-else
    class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center"
  >
    <div class="text-center">
      <h1 class="text-4xl font-bold text-white mb-4">Portfolio non trouvé</h1>
      <button
        @click="goBack"
        class="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
      >
        Retour aux projets
      </button>
    </div>
  </div>
</template>

<style scoped>
.prose :deep(h3) {
  @apply text-xl font-bold text-white mt-6 mb-3;
}

.prose :deep(p) {
  @apply mb-4;
}

.prose :deep(ul) {
  @apply space-y-2 ml-6;
}

.prose :deep(li) {
  @apply list-disc text-gray-300;
}
</style>
