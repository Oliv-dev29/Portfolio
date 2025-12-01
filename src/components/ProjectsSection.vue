<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  ExternalLink,
  Github,
  Calendar,
  ArrowUpRight,
  Code,
  Database,
  Globe,
} from 'lucide-vue-next'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { projectsData } from '@/data/projects'

const router = useRouter()
const { element: sectionRef, isVisible: isInView } = useScrollAnimation(0.1)

// Map icon names to components
const iconMap = {
  Database: Database,
  Code: Code,
  Globe: Globe,
}

// Map projects with icon components
const projects = projectsData.map((project) => ({
  ...project,
  icon: iconMap[project.icon] || Code,
}))

const categories = ['Tous', 'Web Development', 'Data Science', 'Machine Learning']

const activeCategory = ref('Tous')
const hoveredProject = ref(null)
const isVisible = ref(false)

const filteredProjects = computed(() => {
  return activeCategory.value === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory.value)
})

const openProjectDetail = (projectId) => {
  router.push({ name: 'ProjectDetail', params: { id: projectId } })
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<script>
import { onMounted } from 'vue'
</script>

<template>
  <section
    id="projects"
    ref="sectionRef"
    :class="[
      'relative py-16 px-6 sm:px-12 lg:px-20 overflow-hidden transition-all duration-1000',
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    ]"
  >
    <div class="relative max-w-7xl mx-auto">
      <!-- En-tête -->
      <div :class="['text-center mb-20', isVisible ? 'animate-fadeInDown' : 'opacity-0']">
        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="w-12 h-1 bg-orange-500"></div>
          <span class="text-sm font-semibold text-orange-400 uppercase tracking-wider"
            >Mes portfolios</span
          >
          <div class="w-12 h-1 bg-orange-500"></div>
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight tracking-tighter text-white"
        >
          Portfolios
        </h2>

        <p
          class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300 px-4"
        >
          Réalisations en développement web et data science
        </p>
      </div>

      <!-- Filtres -->
      <div
        :class="['flex justify-center mb-16 px-4', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
        style="animation-delay: 0.2s"
      >
        <div class="inline-flex flex-wrap justify-center rounded-2xl p-2 gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 relative',
              activeCategory === cat
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                : 'text-white hover:bg-slate-800/50',
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Grille de portfolios -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :class="['group relative cursor-pointer', isVisible ? 'animate-scaleIn' : 'opacity-0']"
          :style="`animation-delay: ${0.3 + index * 0.1}s`"
          @click="openProjectDetail(project.id)"
        >
          <div
            class="card-pro relative h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-orange-500/50 hover:shadow-orange-500/20 hover:shadow-xl hover:-translate-y-2"
          >
            <!-- Image -->
            <div class="relative h-72 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"
              ></div>

              <!-- Badge catégorie -->
              <div class="absolute top-6 left-6">
                <div
                  class="flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/50 bg-orange-500/20 backdrop-blur-sm"
                >
                  <component :is="project.icon" :size="16" class="text-orange-400" />
                  <span class="text-sm font-bold text-orange-300">{{ project.category }}</span>
                </div>
              </div>

              <!-- Badge "Voir plus" au survol -->
              <div
                class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div
                  class="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm"
                >
                  <span>Voir plus</span>
                  <ArrowUpRight :size="16" />
                </div>
              </div>
            </div>

            <!-- Contenu -->
            <div class="p-4 sm:p-6 md:p-8">
              <div
                class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mb-4 text-gray-400"
              >
                <Calendar :size="16" class="sm:w-[18px] sm:h-[18px]" />
                <span>{{ project.period }}</span>
                <span class="w-1 h-1 rounded-full bg-orange-500"></span>
                <span class="hidden sm:inline">{{ project.institution }}</span>
              </div>

              <h3
                class="font-display text-xl sm:text-2xl md:text-3xl font-black mb-4 text-white group-hover:text-orange-400 transition-colors duration-300"
              >
                {{ project.title }}
              </h3>

              <p class="text-sm sm:text-base leading-relaxed mb-6 text-gray-300 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies.slice(0, 4)"
                  :key="tech"
                  class="px-4 py-2 rounded-xl text-sm font-bold border border-orange-500/50 bg-orange-500/20 text-orange-300 transition-all duration-300 hover:bg-orange-500/30"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 4"
                  class="px-4 py-2 rounded-xl text-sm font-bold border border-orange-500/50 bg-orange-500/20 text-orange-300"
                >
                  +{{ project.technologies.length - 4 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
