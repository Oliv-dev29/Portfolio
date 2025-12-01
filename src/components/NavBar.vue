<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const navLinks = [
  { id: 'about', label: 'Accueil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Portfolios' },
  { id: 'experience', label: 'Expérience' },
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('about')
const scrollProgress = ref(0)

const handleScroll = () => {
  const scrollPosition = window.scrollY
  isScrolled.value = scrollPosition > 50

  // Calcul de la progression du scroll
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollPosition / windowHeight) * 100

  const sections = navLinks.map((link) => document.getElementById(link.id))
  const scrollPos = window.scrollY + 100

  sections.forEach((section, index) => {
    if (section) {
      const top = section.offsetTop
      const height = section.offsetHeight
      if (scrollPos >= top && scrollPos < top + height) {
        activeSection.value = navLinks[index].id
      }
    }
  })
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const top = element.offsetTop - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Barre de progression du scroll - gradient cyan-bleu -->
  <div class="fixed top-0 left-0 right-0 h-1 z-[100] bg-slate-900/50">
    <div
      class="h-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>

  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/10 py-4'
        : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between">
        <!-- Logo minimaliste avec initiales -->
        <button @click="scrollToSection('about')" class="group">
          <div class="flex items-center gap-3">
            <!-- Cercle avec initiales -->
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
            >
              <span class="text-white font-bold text-lg">OF</span>
            </div>
            <!-- Nom (visible uniquement sur desktop) -->
            <div class="hidden sm:block">
              <div class="font-bold text-lg text-white transition-colors duration-300">
                Olive FANDOHAN
              </div>
              <div
                class="text-xs bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium"
              >
                Data Analyst • Full Stack Dev
              </div>
            </div>
          </div>
        </button>

        <!-- Navigation desktop - épurée -->
        <div class="hidden lg:flex items-center gap-2">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            :class="[
              'px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300',
              activeSection === link.id
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10',
            ]"
          >
            {{ link.label }}
          </button>

          <!-- Bouton toggle thème -->
          <button
            @click="toggleTheme"
            class="p-3 rounded-lg transition-all duration-300 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white"
            title="Changer de thème"
          >
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>
        </div>

        <!-- Bouton CTA -->
        <div class="hidden lg:block">
          <button @click="scrollToSection('contact')" class="btn-primary text-base px-6 py-3">
            Me contacter
          </button>
        </div>

        <!-- Menu hamburger mobile -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :class="[
            'lg:hidden p-2.5 rounded-lg transition-all duration-300',
            isMobileMenuOpen
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
              : 'bg-white/10 text-white hover:bg-white/20',
          ]"
        >
          <X v-if="isMobileMenuOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden mt-4 card-pro shadow-lg shadow-blue-500/20 rounded-2xl mx-6 overflow-hidden"
      >
        <div class="p-4 space-y-1">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            :class="[
              'block w-full text-left px-5 py-3 rounded-lg text-lg font-semibold transition-all duration-300',
              activeSection === link.id
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                : 'text-gray-300 hover:bg-white/10 hover:text-white',
            ]"
          >
            {{ link.label }}
          </button>

          <button @click="scrollToSection('contact')" class="w-full mt-3 btn-primary text-base">
            Me contacter
          </button>

          <!-- Bouton toggle thème mobile -->
          <button
            @click="toggleTheme"
            class="w-full mt-2 px-5 py-3 rounded-lg text-lg font-semibold transition-all duration-300 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center gap-2"
          >
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
            <span>{{ isDark ? 'Mode clair' : 'Mode sombre' }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
