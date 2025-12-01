<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image/Video Placeholder -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-primary-800 to-pink-900">
      <div class="absolute inset-0 bg-black/40"></div>
      <!-- You can replace this with an actual image or video -->
      <div class="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    </div>

    <!-- Animated Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce-slow" style="animation-delay: 1s;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-custom text-center text-white px-4">
      <div class="max-w-5xl mx-auto space-y-8 animate-fade-in">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-slide-up">
          <span class="text-sm font-medium">🌟 Empowering Women with Disabilities</span>
        </div>

        <!-- Main Heading -->
        <h1 class="heading-xl text-white drop-shadow-lg animate-slide-up" style="animation-delay: 0.1s;">
          {{ title }}
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
          {{ subtitle }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.3s;">
          <router-link :to="primaryButton.link" class="btn-primary px-8 py-4 text-lg">
            {{ primaryButton.text }}
            <svg class="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
          <router-link :to="secondaryButton.link" class="btn-secondary px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-primary-600">
            {{ secondaryButton.text }}
            <svg class="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </router-link>
        </div>

        <!-- Stats Preview -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up" style="animation-delay: 0.4s;">
          <div v-for="stat in stats" :key="stat.value" class="text-center">
            <div class="text-3xl md:text-4xl font-bold">{{ stat.value }}</div>
            <div class="text-sm md:text-base text-gray-200 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Turning Wheels Into Wings'
  },
  subtitle: {
    type: String,
    default: 'Empowering girls and women with disabilities through wheelchair dance, sports, confidence, and community.'
  },
  primaryButton: {
    type: Object,
    default: () => ({ text: 'Join the Movement', link: '/get-involved' })
  },
  secondaryButton: {
    type: Object,
    default: () => ({ text: 'Donate', link: '/donate' })
  },
  stats: {
    type: Array,
    default: () => [
      { value: '20+', label: 'Women Empowered' },
      { value: '10+', label: 'Events Held' },
      { value: '8+', label: 'States Reached' },
      { value: '100%', label: 'Dedicated' }
    ]
  }
})
</script>
