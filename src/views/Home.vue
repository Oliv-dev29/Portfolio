<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CvSection from '@/components/CvSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'

// Smooth scroll behavior for the whole page
onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
})

onUnmounted(() => {
  document.documentElement.style.scrollBehavior = 'auto'
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavBar />

    <!-- Main Content -->
    <main class="w-full">
      <!-- À propos -->
      <AboutSection />

      <!-- Compétences -->
      <SkillsSection />

      <!-- Formation -->
      <EducationSection />

      <!-- Portfolio -->
      <ProjectsSection />

      <!-- Autres expériences -->
      <ExperienceSection />

      <!-- CV -->
      <CvSection />

      <!-- Contact -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
