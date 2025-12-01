<script setup>
import { ref, onMounted } from 'vue'
import { Code2, Database, Globe } from 'lucide-vue-next'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const isVisible = ref(false)
const { element: sectionRef, isVisible: isInView } = useScrollAnimation(0.1)

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

// Outils de gestion de portfolios
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
    ref="sectionRef"
    :class="[
      'relative py-16 px-6 sm:px-8 lg:px-12 overflow-hidden transition-all duration-1000',
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    ]"
  >
    <div class="relative w-full max-w-7xl mx-auto">
      <!-- En-tête de section avec thème sombre -->
      <div :class="['text-center mb-12', isVisible ? 'animate-slide-up' : 'opacity-0']">
        <div class="flex items-center justify-center gap-3 mb-12">
          <div class="w-12 h-1 bg-blue-500"></div>
          <span class="text-sm font-semibold text-blue-400 uppercase tracking-wider"
            >MES COMPÉTENCES</span
          >
          <div class="w-12 h-1 bg-blue-500"></div>
        </div>

        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-white"
        >
          À votre service !
        </h2>

        <p
          class="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Je vous invite à consulter le panel non exhaustif de mes compétences ci-dessous
        </p>
      </div>

      <!-- Data Science & IA -->
      <div
        :class="['mb-12', isVisible ? 'animate-fade-in' : 'opacity-0']"
        style="animation-delay: 0.1s"
      >
        <div class="flex items-center gap-4 mb-10">
          <div
            class="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30"
          >
            <Database :size="28" class="text-white" />
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">
              Data Science & Intelligence Artificielle
            </h3>
            <p class="text-sm sm:text-base text-gray-400">Analyse de données et machine learning</p>
          </div>
        </div>

        <div class="overflow-x-auto pb-4 scrollbar-hide">
          <div class="flex gap-5 min-w-max animate-scroll-x">
            <div
              v-for="(tech, index) in dataTechs"
              :key="tech.name"
              :class="[
                'group perspective flex-shrink-0 w-40',
                isVisible ? 'animate-zoom-in' : 'opacity-0',
              ]"
              :style="`animation-delay: ${0.2 + index * 0.03}s`"
            >
              <div
                class="card-pro p-6 text-center cursor-pointer transition-all duration-500 transform-style-3d group-hover:rotate-y-180"
              >
                <!-- Face avant -->
                <div class="backface-hidden">
                  <div class="flex items-center justify-center mb-4">
                    <div class="relative w-14 h-14 flex items-center justify-center">
                      <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 object-contain" />
                    </div>
                  </div>

                  <div class="text-sm font-semibold text-gray-300">
                    {{ tech.name }}
                  </div>
                </div>

                <!-- Face arrière -->
                <div
                  class="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center border border-cyan-500/50"
                >
                  <div class="text-center">
                    <div class="text-cyan-400 font-bold text-sm mb-2">{{ tech.name }}</div>
                    <div class="text-xs text-gray-400">Data & IA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Développement Web -->
      <div
        :class="['mb-20', isVisible ? 'animate-fade-in' : 'opacity-0']"
        style="animation-delay: 0.2s"
      >
        <div class="flex items-center gap-4 mb-10">
          <div
            class="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/30"
          >
            <Code2 :size="28" class="text-white" />
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">Développement Web</h3>
            <p class="text-sm sm:text-base text-gray-400">Frameworks et technologies modernes</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          <div
            v-for="(tech, index) in webTechs"
            :key="tech.name"
            :class="['group perspective', isVisible ? 'animate-zoom-in' : 'opacity-0']"
            :style="`animation-delay: ${0.3 + index * 0.05}s`"
          >
            <div
              class="card-pro p-8 text-center cursor-pointer transition-all duration-500 transform-style-3d group-hover:rotate-y-180"
            >
              <!-- Face avant -->
              <div class="backface-hidden">
                <div class="flex items-center justify-center mb-5">
                  <div class="relative w-16 h-16 flex items-center justify-center">
                    <img :src="tech.icon" :alt="tech.name" class="w-14 h-14 object-contain" />
                  </div>
                </div>

                <div class="text-base font-semibold text-gray-300">
                  {{ tech.name }}
                </div>
              </div>

              <!-- Face arrière -->
              <div
                class="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center border border-blue-500/50"
              >
                <div class="text-center">
                  <div class="text-blue-400 font-bold text-base mb-2">{{ tech.name }}</div>
                  <div class="text-sm text-gray-400">Web Dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gestion & Collaboration -->
      <div :class="['', isVisible ? 'animate-fade-in' : 'opacity-0']" style="animation-delay: 0.3s">
        <div class="flex items-center gap-4 mb-10">
          <div
            class="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg shadow-purple-500/30"
          >
            <Globe :size="28" class="text-white" />
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">Gestion & Collaboration</h3>
            <p class="text-sm sm:text-base text-gray-400">Outils de productivité</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-3xl">
          <div
            v-for="(tool, index) in projectManagementTools"
            :key="tool.name"
            :class="['group perspective', isVisible ? 'animate-zoom-in' : 'opacity-0']"
            :style="`animation-delay: ${0.4 + index * 0.1}s`"
          >
            <div
              class="card-pro p-8 text-center cursor-pointer transition-all duration-500 transform-style-3d group-hover:rotate-y-180"
            >
              <!-- Face avant -->
              <div class="backface-hidden">
                <div class="flex items-center justify-center mb-5">
                  <div class="relative w-16 h-16 flex items-center justify-center">
                    <img :src="tool.icon" :alt="tool.name" class="w-14 h-14 object-contain" />
                  </div>
                </div>

                <div class="text-base font-semibold text-gray-300">
                  {{ tool.name }}
                </div>
              </div>

              <!-- Face arrière -->
              <div
                class="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center border border-purple-500/50"
              >
                <div class="text-center">
                  <div class="text-purple-400 font-bold text-base mb-2">{{ tool.name }}</div>
                  <div class="text-sm text-gray-400">Gestion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
