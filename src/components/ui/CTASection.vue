<template>
  <section :class="['relative overflow-hidden', bgClass]">
    <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600">
      <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
    </div>

    <div class="relative z-10 container-custom section-padding text-center">
      <div class="max-w-3xl mx-auto space-y-6 text-white">
        <h2 class="heading-lg">{{ title }}</h2>
        <p v-if="description" class="text-xl leading-relaxed opacity-95">
          {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <router-link
            v-for="button in buttons"
            :key="button.text"
            :to="button.link"
            :class="button.primary ? 'bg-white text-primary-600 hover:bg-gray-100' : 'bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary-600'"
            class="px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            {{ button.text }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  buttons: {
    type: Array,
    default: () => [
      { text: 'Get Started', link: '/get-involved', primary: true },
      { text: 'Learn More', link: '/about', primary: false }
    ]
  },
  bgClass: {
    type: String,
    default: ''
  }
})
</script>
