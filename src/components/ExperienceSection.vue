<script setup>
import { ref } from 'vue'
import { Briefcase, Calendar, MapPin, ChevronRight, ExternalLink } from 'lucide-vue-next'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { element: sectionRef, isVisible: isInView } = useScrollAnimation(0.1)

const experiences = [
  {
    id: 1,
    title: 'Assistante Chargée de Suivi & Évaluation',
    company: 'Cabinet Cosinus Conseils',
    type: 'Temps plein',
    period: '01/2019 – 10/2024',
    duration: '5 ans 10 mois',
    location: 'Cotonou, Bénin',
    description: "Analyse de données pour mesurer l'impact en nutrition, agriculture et santé.",
    responsibilities: [
      "Analyse de données pour mesurer l'impact des projets en nutrition, agriculture et santé",
      "Conception d'indicateurs de performance et tableaux de bord",
      'Création de visualisations et outils de suivi-performance',
      'Rédaction de rapports et recommandations stratégiques',
      "Formation des acteurs locaux aux outils d'analyse",
    ],
    tools: ['Excel', 'Power BI', 'KoboToolbox', 'SPSS'],
    color: 'indigo',
  },
]

const expandedId = ref(1)
</script>

<template>
  <section
    id="experience"
    ref="sectionRef"
    :class="[
      'py-16 transition-all duration-1000',
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-1 bg-green-500"></div>
          <p class="text-green-400 font-semibold tracking-wide uppercase text-base">Mon parcours</p>
          <div class="w-12 h-1 bg-green-500"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Autres expériences
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Plus de 4 années d'expérience en analyse de données et suivi-évaluation
        </p>
      </div>

      <!-- Experiences -->
      <div class="max-w-4xl mx-auto space-y-6">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          :class="[
            'card-pro relative rounded-2xl transition-all duration-500 overflow-hidden',
            expandedId === exp.id
              ? 'border-green-500/50 shadow-xl shadow-green-500/20'
              : 'hover:shadow-md',
          ]"
        >
          <!-- Gradient bar -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
          ></div>

          <!-- Header -->
          <button
            @click="expandedId = expandedId === exp.id ? null : exp.id"
            class="w-full p-4 sm:p-6 text-left"
          >
            <div class="flex items-start gap-3 sm:gap-4">
              <!-- Company logo placeholder -->
              <div
                class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-500/30"
              >
                {{ exp.company.charAt(0) }}
              </div>

              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <h3
                      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2"
                    >
                      {{ exp.title }}
                    </h3>
                    <p class="text-green-400 font-medium text-base sm:text-lg md:text-xl">
                      {{ exp.company }}
                    </p>
                  </div>
                  <ChevronRight
                    :class="[
                      'flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300',
                      expandedId === exp.id ? 'rotate-90' : '',
                    ]"
                  />
                </div>

                <div class="flex flex-wrap gap-4 mt-4 text-base md:text-lg text-gray-400">
                  <span class="flex items-center gap-2">
                    <Calendar :size="18" />
                    {{ exp.period }}
                  </span>
                  <span class="flex items-center gap-2">
                    <MapPin :size="18" />
                    {{ exp.location }}
                  </span>
                  <span
                    class="px-3 py-1 bg-green-500/20 rounded-full text-sm md:text-base text-green-300"
                  >
                    {{ exp.duration }}
                  </span>
                </div>
              </div>
            </div>
          </button>

          <!-- Expanded content -->
          <div
            :class="[
              'overflow-hidden transition-all duration-500',
              expandedId === exp.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
            ]"
          >
            <div class="px-6 pb-6 pt-2 border-t border-green-500/30">
              <p class="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                {{ exp.description }}
              </p>

              <!-- Responsibilities -->
              <div class="mb-8">
                <h4
                  class="text-base md:text-lg font-semibold text-white mb-4 uppercase tracking-wide"
                >
                  Responsabilités
                </h4>
                <ul class="space-y-3">
                  <li
                    v-for="(item, index) in exp.responsibilities"
                    :key="index"
                    class="flex items-start gap-3 text-gray-300 text-base md:text-lg"
                  >
                    <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Tools -->
              <div>
                <h4
                  class="text-base md:text-lg font-semibold text-white mb-4 uppercase tracking-wide"
                >
                  Outils & Technologies
                </h4>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="tool in exp.tools"
                    :key="tool"
                    class="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-base md:text-lg font-medium border border-green-500/30"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
