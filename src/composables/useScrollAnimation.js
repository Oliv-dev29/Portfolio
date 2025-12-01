import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(threshold = 0.1) {
  const isVisible = ref(false)
  const element = ref(null)

  const handleScroll = () => {
    if (!element.value) return

    const rect = element.value.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    // L'élément est visible s'il est dans le viewport
    if (rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0) {
      isVisible.value = true
    }
  }

  onMounted(() => {
    handleScroll() // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    element,
    isVisible,
  }
}
