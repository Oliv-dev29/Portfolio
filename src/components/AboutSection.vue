<script setup>
import { ref, onMounted } from 'vue'
import {
  Upload,
  Mail,
  ArrowRight,
  Briefcase,
  Award,
  Code,
  Database,
  Sparkles,
  Zap,
} from 'lucide-vue-next'

const profileImage = ref(null)
const isUploading = ref(false)
const isVisible = ref(false)

const stats = [
  { value: '4+', label: "Années d'expérience", icon: Award },
  { value: '20+', label: 'Projets réalisés', icon: Code },
  { value: '100%', label: 'Satisfaction client', icon: Sparkles },
]

const handleImageUpload = async (e) => {
  const file = e.target.files[0]
  if (file) {
    isUploading.value = true
    try {
      profileImage.value = URL.createObjectURL(file)
    } catch (error) {
      console.error('Upload failed:', error)
    }
    isUploading.value = false
  }
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
  >
    <!-- Arrière-plan professionnel -->
    <div class="absolute inset-0" style="background-color: #283618"></div>

    <!-- Motif subtil -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0"
        style="
          background-image:
            linear-gradient(rgba(96, 108, 56, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 108, 56, 0.3) 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>
    </div>

    <!-- Accents décoratifs -->
    <div
      class="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-float"
      style="background-color: rgba(96, 108, 56, 0.15)"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float"
      style="background-color: rgba(221, 161, 94, 0.1); animation-delay: -3s"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-float"
      style="background-color: rgba(188, 108, 37, 0.1); animation-delay: -6s"
    ></div>

    <div class="relative w-full max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Contenu gauche -->
        <div :class="['space-y-10', isVisible ? 'animate-fadeInLeft' : 'opacity-0']">
          <div class="badge-premium">
            <Briefcase :size="20" />
            <span>Data Analyst • fullStack Developer</span>
          </div>

          <div class="space-y-6">
            <h1
              class="font-display text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter"
            >
              <span class="text-white">Olive Marthe</span><br />
              <span class="gradient-text" style="color: #dda15e"> FANDOHAN </span>
            </h1>

            <div class="flex items-center gap-3">
              <div
                class="h-px flex-1"
                style="background: linear-gradient(to right, transparent, #dda15e, transparent);"
              ></div>
              <Zap :size="24" class="animate-pulse" style="color: #dda15e;" />
              <div
                class="h-px flex-1"
                style="background: linear-gradient(to right, transparent, #dda15e, transparent);"
              ></div>
            </div>

            <p class="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed" style="color: #fefae0;">
              Je transforme les <span class="font-bold" style="color: #dda15e;">données brutes</span> en
              <span class="font-bold" style="color: #dda15e;">expériences visuelles</span> exceptionnelles
            </p>
          </div>

          <p class="text-lg text-slate-400 leading-relaxed max-w-xl">
            Spécialisée en data science et développement frontend moderne, je crée des solutions
            digitales qui allient <strong class="text-white">puissance analytique</strong> et
            <strong class="text-white">design d'exception</strong>.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              :class="[
                'card-pro p-6 text-center group hover-lift-3d',
                isVisible ? 'animate-scaleIn' : 'opacity-0',
              ]"
              :style="`animation-delay: ${0.2 + index * 0.1}s`"
            >
              <component
                :is="stat.icon"
                :size="32"
                class="mx-auto mb-3 transition-colors duration-500"
                :style="`color: ${index === 0 ? '#bc6c25' : index === 1 ? '#dda15e' : '#606c38'};`"
              />
              <div class="text-3xl font-black text-white mb-1" style="color: #dda15e;">{{ stat.value }}</div>
              <div class="text-xs font-medium" style="color: #fefae0;">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="#contact"
              class="btn-elegant group inline-flex items-center justify-center gap-3"
            >
              <span>Démarrons votre projet</span>
              <ArrowRight
                :size="20"
                class="group-hover:translate-x-2 transition-transform duration-500"
              />
            </a>
            <a href="#projects" class="btn-outline inline-flex items-center justify-center gap-2">
              <Code :size="20" />
              <span>Explorer mes projets</span>
            </a>
          </div>

          <!-- Contact -->
          <div class="flex items-center gap-4 pt-6" style="border-top: 1px solid #606c38;">
            <div class="p-3 rounded-xl" style="background-color: rgba(221, 161, 94, 0.1); border: 2px solid #dda15e;">
              <Mail :size="20" style="color: #dda15e;" />
            </div>
            <a
              href="mailto:olive.fandohan@epitech.eu"
              class="font-semibold transition-colors duration-300"
              style="color: #fefae0;"
              onmouseover="this.style.color='#dda15e'"
              onmouseout="this.style.color='#fefae0'"
            >
              olive.fandohan@epitech.eu
            </a>
          </div>
        </div>

        <!-- Photo avec effets premium -->
        <div
          :class="[
            'flex justify-center lg:justify-end',
            isVisible ? 'animate-fadeInRight' : 'opacity-0',
          ]"
          style="animation-delay: 0.3s"
        >
          <div class="relative group">
            <!-- Halo -->
            <div
              class="absolute -inset-4 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              style="background-color: #bc6c25;"
            ></div>

            <!-- Anneaux décoratifs -->
            <div
              class="absolute -inset-8 border-2 rounded-full"
              style="border-color: rgba(221, 161, 94, 0.3);"
            ></div>
            <div class="absolute -inset-12 border rounded-full" style="border-color: rgba(96, 108, 56, 0.2);"></div>

            <!-- Conteneur photo -->
            <div
              class="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full overflow-hidden p-1 hover-lift-3d"
              style="background-color: #bc6c25;"
            >
              <div class="w-full h-full rounded-full overflow-hidden" style="background-color: #283618;">
                <img
                  v-if="profileImage"
                  :src="profileImage"
                  alt="Olive FANDOHAN"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  v-else
                  class="w-full h-full flex flex-col items-center justify-center"
                  style="background-color: #283618;"
                >
                  <label
                    class="cursor-pointer flex flex-col items-center gap-6 transition-colors duration-500"
                    style="color: #fefae0;"
                    onmouseover="this.style.color='#dda15e'"
                    onmouseout="this.style.color='#fefae0'"
                  >
                    <div
                      :class="[
                        'p-8 rounded-3xl glass transition-all duration-500',
                        isUploading ? 'animate-pulse' : '',
                      ]"
                      style="border: 2px solid #bc6c25;"
                    >
                      <Upload :size="48" />
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-white mb-2">Ajoutez votre photo</div>
                      <div class="text-sm" style="color: #dda15e;">PNG, JPG jusqu'à 10MB</div>
                    </div>
                    <input
                      type="file"
                      class="hidden"
                      accept="image/*"
                      @change="handleImageUpload"
                    />
                  </label>
                </div>
              </div>

              <!-- Badge de statut -->
              <div
                v-if="profileImage"
                class="absolute bottom-8 right-8 glass px-6 py-3 rounded-full border border-white/20 backdrop-blur-xl"
              >
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div
                      class="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"
                    ></div>
                  </div>
                  <span class="text-sm font-bold text-white"
                    >Disponible pour de nouveaux projets</span
                  >
                </div>
              </div>
            </div>

            <!-- Particules flottantes -->
            <div
              class="absolute top-10 right-10 w-4 h-4 rounded-full blur-sm animate-float"
              style="background-color: #dda15e;"
            ></div>
            <div
              class="absolute bottom-20 left-10 w-3 h-3 rounded-full blur-sm animate-float"
              style="background-color: #bc6c25; animation-delay: -2s;"
            ></div>
            <div
              class="absolute top-1/2 right-5 w-2 h-2 rounded-full blur-sm animate-float"
              style="background-color: #606c38; animation-delay: -4s;"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicateur de scroll -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div
        class="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
        style="border-color: #dda15e;"
      >
        <div class="w-1 h-2 rounded-full animate-pulse" style="background-color: #dda15e;"></div>
      </div>
    </div>
  </section>
</template>
