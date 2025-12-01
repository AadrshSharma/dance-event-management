<template>
  <div class="card p-8 h-full">
    <div class="flex flex-col h-full">
      <!-- Quote Icon -->
      <div class="text-primary-600 mb-4">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      <!-- Quote -->
      <blockquote class="text-gray-700 leading-relaxed mb-6 flex-grow">
        "{{ quote }}"
      </blockquote>

      <!-- Author -->
      <div class="flex items-center space-x-4 border-t pt-6">
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
          {{ authorInitial }}
        </div>
        <div>
          <div class="font-semibold text-gray-900">{{ authorName }}</div>
          <div class="text-sm text-gray-600">{{ authorRole }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  quote: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  authorRole: {
    type: String,
    default: 'Participant'
  }
})

const authorInitial = computed(() => props.authorName.charAt(0).toUpperCase())
</script>
