<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()

// Smooth scroll behavior for the whole page
onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
  initTheme()
})

onUnmounted(() => {
  document.documentElement.style.scrollBehavior = 'auto'
})
</script>

<template>
  <div class="min-h-screen">
    <router-view />
  </div>
</template>
