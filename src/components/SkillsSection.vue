<script setup>
import { ref, onMounted } from 'vue'
import { Code2, Database, Globe } from 'lucide-vue-next'

const isVisible = ref(false)

// Technologies Web
const webTechs = [
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
]

// Technologies Data & IA
const dataTechs = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Kafka',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  },
  {
    name: 'scikit-learn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  },
  {
    name: 'Keras',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  },
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  },
  {
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
]

// Outils de gestion de projets
const projectManagementTools = [
  {
    name: 'Trello',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg',
  },
  {
    name: 'Notion',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="skills"
    class="relative py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    style="background-color: #fefae0"
  >
    <div class="relative w-full max-w-7xl mx-auto">
      <!-- En-tête de section -->
      <div :class="['text-center mb-24', isVisible ? 'animate-fadeInDown' : 'opacity-0']">
        <h2
          class="font-display text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          style="color: #283618"
        >
          Compétences
        </h2>

        <p class="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed" style="color: #606c38">
          Technologies maîtrisées pour créer des solutions modernes et performantes
        </p>
      </div>

      <!-- Data Science & IA -->
      <div
        :class="['mb-24', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
        style="animation-delay: 0.2s"
      >
        <div class="flex items-center justify-center gap-4 mb-12">
          <div class="h-px flex-1 max-w-32" style="background-color: #dda15e"></div>
          <div
            class="flex items-center gap-3 px-6 py-3 rounded-full border-2"
            style="background-color: rgba(188, 108, 37, 0.1); border-color: #bc6c25"
          >
            <Database :size="24" style="color: #bc6c25" />
            <h3 class="text-2xl font-black" style="color: #283618">
              Data Science & Intelligence Artificielle
            </h3>
          </div>
          <div class="h-px flex-1 max-w-32" style="background-color: #dda15e"></div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            v-for="(tech, index) in dataTechs"
            :key="tech.name"
            :class="['group relative', isVisible ? 'animate-scaleIn' : 'opacity-0']"
            :style="`animation-delay: ${0.3 + index * 0.05}s`"
          >
            <div
              class="relative p-8 rounded-2xl bg-white border-2 shadow-lg transition-all duration-300"
              style="border-color: #dda15e"
              @mouseenter="$event.currentTarget.style.borderColor = '#bc6c25'"
              @mouseleave="$event.currentTarget.style.borderColor = '#dda15e'"
            >
              <div class="flex items-center justify-center mb-4">
                <div
                  class="relative w-16 h-16 flex items-center justify-center rounded-xl bg-white"
                >
                  <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 object-contain" />
                </div>
              </div>

              <div class="text-center">
                <div class="font-bold" style="color: #283618">
                  {{ tech.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Développement Web -->
      <div
        :class="['mb-24', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
        style="animation-delay: 0.4s"
      >
        <div class="flex items-center justify-center gap-4 mb-12">
          <div class="h-px flex-1 max-w-32" style="background-color: #dda15e"></div>
          <div
            class="flex items-center gap-3 px-6 py-3 rounded-full border-2"
            style="background-color: rgba(188, 108, 37, 0.1); border-color: #bc6c25"
          >
            <Code2 :size="24" style="color: #bc6c25" />
            <h3 class="text-2xl font-black" style="color: #283618">Développement Web</h3>
          </div>
          <div class="h-px flex-1 max-w-32" style="background-color: #dda15e"></div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div
            v-for="(tech, index) in webTechs"
            :key="tech.name"
            :class="['group relative', isVisible ? 'animate-scaleIn' : 'opacity-0']"
            :style="`animation-delay: ${0.5 + index * 0.1}s`"
          >
            <div
              class="relative p-10 rounded-2xl bg-white border-2 shadow-lg transition-all duration-300"
              style="border-color: #dda15e"
              @mouseenter="$event.currentTarget.style.borderColor = '#bc6c25'"
              @mouseleave="$event.currentTarget.style.borderColor = '#dda15e'"
            >
              <div class="flex items-center justify-center mb-5">
                <div
                  class="relative w-20 h-20 flex items-center justify-center rounded-xl bg-white"
                >
                  <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 object-contain" />
                </div>
              </div>

              <div class="text-center">
                <div class="font-bold text-lg" style="color: #283618">
                  {{ tech.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gestion de Projets -->
      <div
        :class="['', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
        style="animation-delay: 0.6s"
      >
        <div class="flex items-center justify-center gap-4 mb-12">
          <div class="h-px flex-1 max-w-32" style="background-color: #dda15e"></div>
          <div
            class="flex items-center gap-3 px-6 py-3 rounded-full border-2"
            style="background-color: rgba(188, 108, 37, 0.1); border-color: #bc6c25"
          >
            <Globe :size="24" style="color: #bc6c25" />
            <h3 class="text-2xl font-black" style="color: #283618">Gestion & Collaboration</h3>
          </div>
          <div class="h-px flex-1 max-w-32" style="background-color: #dda15e"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div
            v-for="(tech, index) in projectManagementTools"
            :key="tech.name"
            :class="['group relative', isVisible ? 'animate-scaleIn' : 'opacity-0']"
            :style="`animation-delay: ${0.7 + index * 0.1}s`"
          >
            <div
              class="relative p-10 rounded-2xl bg-white border-2 shadow-lg transition-all duration-300"
              style="border-color: #dda15e"
              @mouseenter="$event.currentTarget.style.borderColor = '#bc6c25'"
              @mouseleave="$event.currentTarget.style.borderColor = '#dda15e'"
            >
              <div class="flex items-center justify-center mb-5">
                <div
                  class="relative w-20 h-20 flex items-center justify-center rounded-xl bg-white"
                >
                  <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 object-contain" />
                </div>
              </div>

              <div class="text-center">
                <div class="font-bold text-lg" style="color: #283618">
                  {{ tech.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
