<script setup>
import { ref } from 'vue'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  Sparkles,
} from 'lucide-vue-next'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'olive.fandohan@epitech.eu',
    href: 'mailto:olive.fandohan@epitech.eu',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+229 01 96 79 23 23',
    href: 'tel:+22901967923 23',
    gradient: 'from-green-500 to-emerald-500',
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/olive-fandohan-244136283',
    color: 'from-[#0077B5] to-[#00A0DC]',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/olive-fandohan',
    color: 'from-slate-800 to-slate-600',
  },
]

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1500))
  console.log('Form submitted:', formData.value)
  isSubmitting.value = false
}
</script>

<template>
  <section
    id="contact"
    class="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-mesh-gradient overflow-hidden"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative w-full max-w-[1600px] mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 sm:mb-20">
        <div
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200/50 shadow-lg mb-6"
        >
          <MessageSquare :size="20" class="text-primary-600" />
          <span class="text-sm font-semibold text-primary-700">Contactez-moi</span>
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Travaillons
          <span class="gradient-text">ensemble</span>
        </h2>

        <p class="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Un projet en tête ? Une question ? Je suis toujours ouverte à de nouvelles opportunités de
          collaboration.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <!-- Contact Info - 2 colonnes -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Contact Cards -->
          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="card-glass p-6 sm:p-8 group cursor-pointer"
            >
              <div class="flex items-start gap-5">
                <div
                  :class="[
                    'p-4 rounded-2xl bg-gradient-to-br text-white shadow-lg group-hover:scale-110 transition-transform duration-300',
                    info.gradient,
                  ]"
                >
                  <component :is="info.icon" :size="28" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-base font-bold text-slate-900 mb-2">{{ info.label }}</p>
                  <a
                    v-if="info.href"
                    :href="info.href"
                    class="text-base sm:text-lg text-slate-600 hover:text-primary-600 transition-colors break-all"
                  >
                    {{ info.value }}
                  </a>
                  <p v-else class="text-base sm:text-lg text-slate-600 break-all">
                    {{ info.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="card-glass p-6 sm:p-8">
            <h3 class="font-display text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles :size="24" class="text-primary-600" />
              Réseaux sociaux
            </h3>
            <div class="flex flex-col gap-4">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'px-6 py-4 rounded-xl bg-gradient-to-r text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-between group',
                  link.color,
                ]"
              >
                <div class="flex items-center gap-3">
                  <component :is="link.icon" :size="24" />
                  <span>{{ link.label }}</span>
                </div>
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Form - 3 colonnes -->
        <div class="lg:col-span-3">
          <div class="card-glass p-8 sm:p-10 lg:p-12">
            <h3 class="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Envoyez un message
            </h3>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-base font-semibold text-slate-900 mb-3">
                    Votre nom
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="input-modern"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label for="email" class="block text-base font-semibold text-slate-900 mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="input-modern"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-base font-semibold text-slate-900 mb-3">
                  Sujet
                </label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  required
                  class="input-modern"
                  placeholder="De quoi souhaitez-vous parler ?"
                />
              </div>

              <div>
                <label for="message" class="block text-base font-semibold text-slate-900 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="input-modern resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg group"
              >
                <Send
                  :size="24"
                  class="inline-block group-hover:translate-x-1 transition-transform"
                />
                <span class="ml-2">{{
                  isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'
                }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 text-center">
        <div class="card-glass inline-flex items-center gap-4 px-8 py-6">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p class="text-lg font-semibold text-slate-900">
            Disponible pour des projets freelance et collaborations
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
