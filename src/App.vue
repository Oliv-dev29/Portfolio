<script setup>
import { onMounted, onUnmounted } from 'vue'

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
    <router-view />
  </div>
</template>
