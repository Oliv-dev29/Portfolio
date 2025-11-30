<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Sparkles } from 'lucide-vue-next'

const navLinks = [
  { id: 'about', label: 'Accueil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
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
  <!-- Barre de progression du scroll -->
  <div
    class="fixed top-0 left-0 right-0 h-1 z-[100]"
    style="background-color: rgba(254, 250, 224, 0.1)"
  >
    <div
      class="h-full transition-all duration-300"
      style="background-color: #bc6c25"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>

  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'glass py-4' : 'bg-transparent py-6',
    ]"
    :style="
      isScrolled
        ? 'border-bottom: 1px solid rgba(188, 108, 37, 0.2); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);'
        : ''
    "
  >
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
      <div class="flex items-center justify-between">
        <!-- Logo sobre -->
        <button @click="scrollToSection('about')" class="group relative">
          <div class="relative flex items-center gap-3">
            <div class="relative">
              <div
                class="px-4 py-2 rounded-xl transition-all duration-500 group-hover:scale-105"
                style="background-color: #bc6c25"
              >
                <span class="font-display text-xl font-black text-white">OF</span>
              </div>
            </div>
            <div class="hidden sm:block">
              <div
                class="font-display text-xl font-black"
                :style="isScrolled ? 'color: #283618;' : 'color: #fefae0;'"
              >
                Olive Fandohan
              </div>
              <div class="text-xs font-medium" style="color: #bc6c25">
                Data Analyst • Frontend Dev
              </div>
            </div>
          </div>
        </button>

        <!-- Navigation desktop -->
        <div class="hidden lg:flex items-center gap-1">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="relative px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300"
            :style="
              activeSection === link.id
                ? 'background-color: #bc6c25; color: white;'
                : isScrolled
                  ? 'color: #283618;'
                  : 'color: rgba(254, 250, 224, 0.8);'
            "
            @mouseover="
              $event.target.style.backgroundColor =
                activeSection !== link.id ? 'rgba(188, 108, 37, 0.1)' : ''
            "
            @mouseout="
              $event.target.style.backgroundColor =
                activeSection !== link.id ? 'transparent' : '#bc6c25'
            "
          >
            {{ link.label }}
          </button>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <button @click="scrollToSection('contact')" class="btn-primary">Contactez-moi</button>
        </div>

        <!-- Menu mobile -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-3 rounded-lg transition-all duration-300"
          :style="
            isMobileMenuOpen
              ? 'background-color: #bc6c25; color: white;'
              : isScrolled
                ? 'background-color: rgba(254, 250, 224, 0.5); color: #283618;'
                : 'background-color: rgba(254, 250, 224, 0.1); color: white;'
          "
        >
          <X v-if="isMobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden glass-dark shadow-xl mt-4"
        style="border-top: 1px solid rgba(188, 108, 37, 0.2)"
      >
        <div class="px-6 py-8 space-y-2 max-w-[1600px] mx-auto">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="block w-full text-left px-6 py-4 rounded-lg text-base font-semibold transition-all duration-300"
            :style="
              activeSection === link.id
                ? 'background-color: #bc6c25; color: white;'
                : 'color: rgba(254, 250, 224, 0.9);'
            "
          >
            {{ link.label }}
          </button>

          <button @click="scrollToSection('contact')" class="w-full mt-6 btn-primary text-base">
            Contactez-moi
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
