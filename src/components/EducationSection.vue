<script setup>
import { ref, onMounted } from 'vue'
import { GraduationCap, Award, Calendar, MapPin, Trophy, BookOpen } from 'lucide-vue-next'

const isVisible = ref(false)

const education = [
  {
    type: 'certification',
    title: 'Certification en développement Data/IA',
    institution: 'Epitech Bénin (Coding Academie)',
    period: "07/2025 – aujourd'hui",
    location: 'Cotonou, Bénin',
    description:
      "Formation intensive en développement d'applications Data et Intelligence Artificielle",
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
]

const certifications = [
  {
    title: 'Postman Student Expert',
    issuer: 'Postman',
    icon: Trophy,
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
    id="education"
    class="relative py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    style="background-color: #fefae0"
  >
    <div class="relative max-w-7xl mx-auto">
      <!-- En-tête -->
      <div :class="['text-center mb-24', isVisible ? 'animate-fadeInDown' : 'opacity-0']">
        <h2
          class="font-display text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          style="color: #283618"
        >
          Formation
        </h2>

        <p class="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed" style="color: #606c38">
          Parcours alliant sciences de la santé, statistiques et technologies
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 hidden md:block rounded-full"
          style="background-color: #bc6c25"
        ></div>

        <div class="space-y-16">
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
                  class="relative p-4 rounded-full border-4 shadow-lg"
                  style="background-color: #bc6c25; border-color: #fefae0"
                >
                  <component :is="item.icon" :size="32" style="color: #fefae0" />
                </div>
              </div>
            </div>

            <!-- Carte de formation -->
            <div :class="['flex-1', index % 2 === 0 ? 'md:pr-20' : 'md:pl-20']">
              <div
                class="relative h-full p-8 bg-white rounded-2xl border-2 shadow-lg transition-all duration-300"
                style="border-color: #dda15e"
                @mouseenter="$event.currentTarget.style.borderColor = '#bc6c25'"
                @mouseleave="$event.currentTarget.style.borderColor = '#dda15e'"
              >
                <!-- Barre supérieure -->
                <div
                  class="absolute top-0 left-0 right-0 h-2 rounded-t-2xl"
                  style="background-color: #bc6c25"
                ></div>

                <!-- Badge type + statut -->
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-3">
                    <span
                      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border-2"
                      style="
                        background-color: rgba(188, 108, 37, 0.1);
                        color: #283618;
                        border-color: #bc6c25;
                      "
                    >
                      <Award v-if="item.type === 'certification'" :size="16" />
                      <GraduationCap v-else :size="16" />
                      {{ item.type === 'certification' ? 'Certification' : 'Diplôme' }}
                    </span>
                  </div>

                  <span
                    class="px-4 py-2 rounded-xl text-xs font-bold border-2"
                    :style="
                      item.status === 'En cours'
                        ? 'background-color: rgba(96, 108, 56, 0.1); color: #606c38; border-color: #606c38'
                        : 'background-color: rgba(221, 161, 94, 0.1); color: #bc6c25; border-color: #dda15e'
                    "
                  >
                    {{ item.status }}
                  </span>
                </div>

                <!-- Titre -->
                <h3 class="font-display text-3xl font-black mb-4" style="color: #283618">
                  {{ item.title }}
                </h3>

                <!-- Institution -->
                <p class="text-lg font-bold mb-6 flex items-center gap-2" style="color: #606c38">
                  <BookOpen :size="20" style="color: #bc6c25" />
                  {{ item.institution }}
                </p>

                <!-- Métadonnées -->
                <div class="flex flex-wrap gap-4 text-sm mb-6" style="color: #606c38">
                  <span
                    class="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style="background-color: rgba(221, 161, 94, 0.1)"
                  >
                    <Calendar :size="16" style="color: #bc6c25" />
                    <span class="font-semibold">{{ item.period }}</span>
                  </span>
                  <span
                    v-if="item.location"
                    class="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style="background-color: rgba(221, 161, 94, 0.1)"
                  >
                    <MapPin :size="16" style="color: #bc6c25" />
                    <span class="font-semibold">{{ item.location }}</span>
                  </span>
                </div>

                <!-- Description -->
                <p
                  class="text-base leading-relaxed mb-6 border-l-4 pl-4 italic"
                  style="color: #606c38; border-color: #bc6c25"
                >
                  {{ item.description }}
                </p>

                <!-- Compétences acquises -->
                <div class="pt-6 border-t" style="border-color: #dda15e">
                  <p class="text-xs font-bold mb-3 uppercase tracking-wide" style="color: #606c38">
                    Compétences acquises
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="skill in item.skills"
                      :key="skill"
                      class="px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all duration-300"
                      style="
                        background-color: rgba(188, 108, 37, 0.1);
                        color: #283618;
                        border-color: #bc6c25;
                      "
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

      <!-- Certifications additionnelles -->
      <div
        :class="['mt-24', isVisible ? 'animate-fadeInUp' : 'opacity-0']"
        style="animation-delay: 0.8s"
      >
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2"
            style="background-color: rgba(188, 108, 37, 0.1); border-color: #bc6c25"
          >
            <Trophy :size="24" style="color: #bc6c25" />
            <h3 class="text-2xl font-black" style="color: #283618">Autres Certifications</h3>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="relative p-8 bg-white rounded-2xl border-2 shadow-lg transition-all duration-300"
            style="border-color: #dda15e"
            @mouseenter="$event.currentTarget.style.borderColor = '#bc6c25'"
            @mouseleave="$event.currentTarget.style.borderColor = '#dda15e'"
          >
            <div class="flex items-center gap-4">
              <div class="p-4 rounded-xl" style="background-color: #bc6c25">
                <component :is="cert.icon" :size="32" style="color: #fefae0" />
              </div>

              <div>
                <p class="font-display text-xl font-black mb-1" style="color: #283618">
                  {{ cert.title }}
                </p>
                <p class="text-sm font-semibold" style="color: #606c38">{{ cert.issuer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
