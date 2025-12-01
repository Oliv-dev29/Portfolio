<script setup>
import { ref, onMounted } from 'vue'
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-vue-next'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const isVisible = ref(false)
const { element: sectionRef, isVisible: isInView } = useScrollAnimation(0.1)

const education = [
  {
    type: 'certification',
    title: 'Certification en développement Data/IA',
    institution: 'Epitech Bénin (Coding Academie)',
    period: "07/2025 – aujourd'hui",
    location: 'Cotonou, Bénin',
    description: 'Formation intensive en développement web fullstack et Data /IA',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Engineering'],
    icon: GraduationCap,
    status: 'En cours',
  },
  {
    type: 'diploma',
    title: 'Master en Biostatistique',
    institution: "LABEF / Université D'Abomey-Calavi",
    period: "11/2022 – aujourd'hui",
    description: 'Spécialisation en analyse statistique appliquée aux sciences de la vie',
    skills: ['Statistiques avancées', 'R', 'SPSS', 'Analyse de données'],
    icon: GraduationCap,
    status: 'En cours',
  },
  {
    type: 'certification',
    title: 'Certification en Data Science',
    institution: 'Isheero / Africa Techup Tour Bénin',
    period: '03/2024 – 09/2024',
    location: 'Cotonou, Bénin',
    description: 'Formation complète en science des données et machine learning',
    skills: ['Python', 'Pandas', 'scikit-learn', 'Data Visualization'],
    icon: Award,
    status: 'Complété',
  },
  {
    type: 'diploma',
    title: 'Licence en Santé Publique et Épidémiologie',
    institution: 'ENATSE / Université De Parakou',
    period: '01/2018 – 12/2018',
    location: 'Parakou, Bénin',
    description:
      "Formation en santé publique avec focus sur l'épidémiologie et l'analyse de données de santé",
    skills: ['Épidémiologie', 'Santé publique', 'Biostatistiques', 'Analyse de données'],
    icon: BookOpen,
    status: 'Complété',
  },
  {
    type: 'certification',
    title: 'Postman Student Expert Certification',
    institution: 'Postman',
    period: '2025',
    location: '',
    description:
      'Certification officielle Postman validant la maîtrise des API: requêtes, collections, variables, tests automatisés, documentation et workflows.',
    skills: ['Postman', 'API Testing', 'Collections', 'Automatisation', 'Documentation API'],
    icon: Award,
    status: 'Complété',
  },
]

// Section des certifications détachée supprimée pour intégrer Postman dans la timeline

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="education"
    ref="sectionRef"
    :class="[
      'relative py-16 px-6 sm:px-12 lg:px-20 overflow-hidden transition-all duration-1000',
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    ]"
  >
    <div class="relative max-w-7xl mx-auto">
      <!-- En-tête -->
      <div :class="['text-center mb-12', isVisible ? 'animate-fadeInDown' : 'opacity-0']">
        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="w-12 h-1 bg-purple-500"></div>
          <span class="text-sm font-semibold text-purple-400 uppercase tracking-wider"
            >Formation</span
          >
          <div class="w-12 h-1 bg-purple-500"></div>
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight tracking-tighter text-white"
        >
          Formation
        </h2>

        <p
          class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300 px-4"
        >
          Parcours alliant sciences de la santé, statistiques et technologies
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 hidden md:block rounded-full bg-purple-500/30"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(item, index) in education"
            :key="index"
            :class="[
              'relative flex flex-col md:flex-row gap-8 md:gap-12',
              index % 2 === 0 ? 'md:flex-row-reverse' : '',
              isVisible ? 'animate-fadeInUp' : 'opacity-0',
            ]"
            :style="`animation-delay: ${0.2 + index * 0.15}s`"
          >
            <!-- Icône timeline centrale -->
            <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
              <div class="relative group">
                <div
                  class="relative p-4 rounded-full border-4 border-purple-500/30 shadow-lg shadow-purple-500/30 bg-gradient-to-br from-purple-500 to-indigo-600"
                >
                  <component :is="item.icon" :size="32" class="text-white" />
                </div>
              </div>
            </div>

            <!-- Carte de formation -->
            <div :class="['flex-1', index % 2 === 0 ? 'md:pr-20' : 'md:pl-20']">
              <div
                class="card-pro relative h-full p-3 sm:p-4 md:p-4 transition-all duration-300 hover:border-purple-500/50"
              >
                <!-- Barre supérieure -->
                <div
                  class="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-purple-500 to-indigo-600"
                ></div>

                <!-- Badge type + statut -->
                <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <span
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold border-2 border-purple-500/50 bg-purple-500/20 text-purple-300"
                    >
                      <Award v-if="item.type === 'certification'" :size="16" />
                      <GraduationCap v-else :size="16" />
                      {{ item.type === 'certification' ? 'Certification' : 'Diplôme' }}
                    </span>
                  </div>

                  <span
                    class="px-3 py-1.5 rounded-xl text-xs font-bold border-2"
                    :class="
                      item.status === 'En cours'
                        ? 'bg-green-500/20 text-green-300 border-green-500/50'
                        : 'bg-purple-500/20 text-purple-300 border-purple-500/50'
                    "
                  >
                    {{ item.status }}
                  </span>
                </div>

                <!-- Titre -->
                <h3 class="font-display text-xl sm:text-2xl md:text-3xl font-black mb-3 text-white">
                  {{ item.title }}
                </h3>

                <!-- Institution -->
                <p
                  class="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2 text-gray-300"
                >
                  <BookOpen :size="18" class="sm:w-5 sm:h-5 text-purple-400" />
                  {{ item.institution }}
                </p>
                <!-- Métadonnées -->
                <div class="flex flex-wrap gap-4 text-sm mb-4 text-gray-400">
                  <span class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10">
                    <Calendar :size="16" class="text-purple-400" />
                    <span class="font-semibold">{{ item.period }}</span>
                  </span>
                  <span
                    v-if="item.location"
                    class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10"
                  >
                    <MapPin :size="16" class="text-purple-400" />
                    <span class="font-semibold">{{ item.location }}</span>
                  </span>
                </div>

                <!-- Description -->
                <p
                  class="text-base leading-relaxed mb-4 border-l-4 border-purple-500 pl-3 italic text-gray-300"
                >
                  {{ item.description }}
                </p>

                <!-- Compétences acquises -->
                <div class="pt-4 border-t border-purple-500/30">
                  <p class="text-xs font-bold mb-3 uppercase tracking-wide text-gray-400">
                    Compétences acquises
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="skill in item.skills"
                      :key="skill"
                      class="px-3 py-1.5 rounded-xl text-sm font-bold border-2 border-purple-500/50 bg-purple-500/20 text-purple-300 transition-all duration-300 hover:bg-purple-500/30"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Espace vide pour alternance -->
            <div class="hidden md:block flex-1"></div>
          </div>
        </div>
      </div>

      <!-- Section des certifications supprimée -->
    </div>
  </section>
</template>
