<template>
  <div class="text-center max-w-3xl mx-auto mb-12">
    <div v-if="badge" class="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
      {{ badge }}
    </div>
    <h2 :class="headingClass" class="mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  }
})

const headingClass = computed(() => {
  const sizes = {
    sm: 'heading-sm',
    md: 'heading-md',
    lg: 'heading-lg',
    xl: 'heading-xl'
  }
  return sizes[props.size]
})
</script>
