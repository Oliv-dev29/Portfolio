<script setup>
import { ref } from 'vue'
import { Briefcase, Calendar, MapPin, ChevronRight, ExternalLink } from 'lucide-vue-next'

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
  <section id="experience" class="py-24 bg-slate-50/50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p class="text-indigo-600 font-semibold tracking-wide uppercase text-base mb-4">
          Mon parcours
        </p>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
          Expériences professionnelles
        </h2>
        <p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Plus de 4 années d'expérience en analyse de données et suivi-évaluation
        </p>
      </div>

      <!-- Experiences -->
      <div class="max-w-4xl mx-auto space-y-6">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          :class="[
            'relative bg-white rounded-2xl border transition-all duration-500 overflow-hidden',
            expandedId === exp.id
              ? 'border-indigo-200 shadow-xl shadow-indigo-500/10'
              : 'border-slate-200 shadow-sm hover:shadow-md',
          ]"
        >
          <!-- Gradient bar -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
          ></div>

          <!-- Header -->
          <button
            @click="expandedId = expandedId === exp.id ? null : exp.id"
            class="w-full p-6 text-left"
          >
            <div class="flex items-start gap-4">
              <!-- Company logo placeholder -->
              <div
                class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl"
              >
                {{ exp.company.charAt(0) }}
              </div>

              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      {{ exp.title }}
                    </h3>
                    <p class="text-indigo-600 font-medium text-lg md:text-xl">{{ exp.company }}</p>
                  </div>
                  <ChevronRight
                    :class="[
                      'flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300',
                      expandedId === exp.id ? 'rotate-90' : '',
                    ]"
                  />
                </div>

                <div class="flex flex-wrap gap-4 mt-4 text-base md:text-lg text-slate-500">
                  <span class="flex items-center gap-2">
                    <Calendar :size="18" />
                    {{ exp.period }}
                  </span>
                  <span class="flex items-center gap-2">
                    <MapPin :size="18" />
                    {{ exp.location }}
                  </span>
                  <span class="px-3 py-1 bg-slate-100 rounded-full text-sm md:text-base">
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
            <div class="px-6 pb-6 pt-2 border-t border-slate-100">
              <p class="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed">
                {{ exp.description }}
              </p>

              <!-- Responsibilities -->
              <div class="mb-8">
                <h4
                  class="text-base md:text-lg font-semibold text-slate-800 mb-4 uppercase tracking-wide"
                >
                  Responsabilités
                </h4>
                <ul class="space-y-3">
                  <li
                    v-for="(item, index) in exp.responsibilities"
                    :key="index"
                    class="flex items-start gap-3 text-slate-600 text-base md:text-lg"
                  >
                    <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Tools -->
              <div>
                <h4
                  class="text-base md:text-lg font-semibold text-slate-800 mb-4 uppercase tracking-wide"
                >
                  Outils & Technologies
                </h4>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="tool in exp.tools"
                    :key="tool"
                    class="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-base md:text-lg font-medium"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="mt-16 text-center">
        <p class="text-slate-600 mb-4">Intéressé par mon profil ?</p>
        <a
          href="#cv"
          @click.prevent="document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })"
          class="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
        >
          Télécharger mon CV complet
          <ExternalLink :size="16" />
        </a>
      </div>
    </div>
  </section>
</template>
