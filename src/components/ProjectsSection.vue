<script setup>
import { ref, computed } from 'vue'
import {
  ExternalLink,
  Github,
  Calendar,
  ArrowUpRight,
  Code,
  Database,
  Globe,
} from 'lucide-vue-next'

const projects = [
  {
    id: 1,
    title: 'Analyse de Sentiment',
    category: 'Data Science',
    period: '11/2025',
    institution: 'EPITECH Bénin',
    description:
      "Analyse automatisée des avis et messages en ligne pour identifier les sentiments exprimés par les utilisateurs. Mise en place d'un système de traitement en continu permettant d'obtenir des insights en temps réel.",
    technologies: ['Python', 'Kafka', 'NLTK', 'spaCy', 'scikit-learn'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    icon: Database,
  },
  {
    id: 2,
    title: 'Deep Learning',
    category: 'Machine Learning',
    period: '11/2025',
    institution: 'EPITECH Bénin',
    description:
      "Développement d'un modèle de deep learning pour prédire des résultats à partir de données structurées et non structurées.",
    technologies: ['TensorFlow', 'Python', 'Keras', 'NumPy'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    icon: Code,
  },
  {
    id: 3,
    title: 'Yowl Community',
    category: 'Web Development',
    period: '10/2025',
    institution: 'EPITECH Bénin',
    description:
      'YOWL permet de laisser son avis et de partager des contenus sur internet. Plateforme communautaire complète avec extension navigateur.',
    technologies: ['Laravel', 'Vue.js', 'JavaScript', 'MySQL'],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60',
    icon: Globe,
  },
  {
    id: 4,
    title: 'TWP - Task Management',
    category: 'Web Development',
    period: '09/2025',
    institution: 'EPITECH Bénin',
    description:
      'TWP est une plateforme de planification type Trello qui facilite la gestion de tâches en équipe avec une interface intuitive.',
    technologies: ['Vue.js', 'Tailwind CSS', 'API WordPress'],
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60',
    icon: Code,
  },
]

const categories = ['Tous', 'Web Development', 'Data Science', 'Machine Learning']

const activeCategory = ref('Tous')
const hoveredProject = ref(null)
const isVisible = ref(false)

const filteredProjects = computed(() => {
  return activeCategory.value === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory.value)
})

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
    class="relative py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    style="background-color: #283618"
  >
    <div class="relative max-w-7xl mx-auto">
      <!-- En-tête -->
      <div :class="['text-center mb-20', isVisible ? 'animate-fadeInDown' : 'opacity-0']">
        <h2
          class="font-display text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          style="color: #fefae0"
        >
          Projets
        </h2>

        <p class="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed" style="color: #dda15e">
          Réalisations en développement web et data science
        </p>
      </div>

      <!-- Filtres -->
      <div
        :class="['flex justify-center mb-16', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
        style="animation-delay: 0.2s"
      >
        <div
          class="inline-flex rounded-2xl p-2 gap-2 border"
          style="background-color: rgba(254, 250, 224, 0.05); border-color: rgba(221, 161, 94, 0.3)"
        >
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative',
              activeCategory === cat ? '' : 'hover:bg-white/5',
            ]"
            :style="
              activeCategory === cat
                ? 'background-color: #bc6c25; color: #fefae0'
                : 'color: #dda15e'
            "
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Grille de projets -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :class="['group relative', isVisible ? 'animate-scaleIn' : 'opacity-0']"
          :style="`animation-delay: ${0.3 + index * 0.1}s`"
        >
          <div
            class="relative h-full rounded-2xl overflow-hidden border-2 shadow-lg transition-all duration-300"
            style="background-color: #fefae0; border-color: #dda15e"
            @mouseenter="$event.currentTarget.style.borderColor = '#bc6c25'"
            @mouseleave="$event.currentTarget.style.borderColor = '#dda15e'"
          >
            <!-- Image -->
            <div class="relative h-72 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/20"></div>

              <!-- Badge catégorie -->
              <div class="absolute top-6 left-6">
                <div
                  class="flex items-center gap-2 px-4 py-2 rounded-full border"
                  style="background-color: rgba(188, 108, 37, 0.9); border-color: #bc6c25"
                >
                  <component :is="project.icon" :size="16" style="color: #fefae0" />
                  <span class="text-sm font-bold" style="color: #fefae0">{{
                    project.category
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Contenu -->
            <div class="p-8">
              <div class="flex items-center gap-3 text-sm mb-4" style="color: #606c38">
                <Calendar :size="18" />
                <span>{{ project.period }}</span>
                <span class="w-1 h-1 rounded-full" style="background-color: #dda15e"></span>
                <span>{{ project.institution }}</span>
              </div>

              <h3 class="font-display text-3xl font-black mb-4" style="color: #283618">
                {{ project.title }}
              </h3>

              <p class="text-base leading-relaxed mb-6" style="color: #606c38">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-300"
                  style="
                    background-color: rgba(188, 108, 37, 0.1);
                    color: #283618;
                    border-color: #bc6c25;
                  "
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Indicateur de coin -->
            <div
              class="absolute top-6 right-6 w-3 h-3 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
            ></div>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div
        :class="['text-center mt-20', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
        style="animation-delay: 0.8s"
      >
        <p class="text-slate-400 text-lg mb-6">Intéressé par mes projets ?</p>
        <a href="#contact" class="btn-elegant inline-flex items-center gap-3">
          <span>Discutons de votre projet</span>
          <ArrowUpRight :size="20" />
        </a>
      </div>
    </div>
  </section>
</template>
