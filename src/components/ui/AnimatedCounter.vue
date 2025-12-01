<template>
  <div class="text-center">
    <div class="text-5xl md:text-6xl font-display font-bold text-primary-600 mb-2">
      {{ displayValue }}{{ suffix }}
    </div>
    <div class="text-gray-600 font-medium">{{ label }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  endValue: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  suffix: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  }
})

const displayValue = ref(0)

const animateValue = () => {
  const startValue = 0
  const startTime = Date.now()

  const animate = () => {
    const currentTime = Date.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)

    displayValue.value = Math.floor(startValue + (props.endValue - startValue) * easeOutQuad(progress))

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  animate()
}

const easeOutQuad = (t) => t * (2 - t)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  observer.observe(document.querySelector('.text-5xl'))
})
</script>
