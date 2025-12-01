<template>
  <div class="card group cursor-pointer h-full">
    <div class="relative overflow-hidden h-48 bg-gradient-to-br from-primary-400 to-purple-600">
      <div class="absolute inset-0 flex items-center justify-center text-6xl transform group-hover:scale-110 transition-transform duration-300">
        {{ icon }}
      </div>
    </div>
    <div class="p-6 space-y-4">
      <h3 class="heading-sm text-gray-900">{{ title }}</h3>
      <p class="text-gray-600 leading-relaxed">{{ description }}</p>
      <div v-if="features && features.length" class="space-y-2">
        <div v-for="feature in features" :key="feature" class="flex items-start space-x-2">
          <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-sm text-gray-700">{{ feature }}</span>
        </div>
      </div>
      <button v-if="showButton" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center group">
        Learn More
        <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '🎭'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  showButton: {
    type: Boolean,
    default: true
  }
})
</script>
