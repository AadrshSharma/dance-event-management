<template>
  <header class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span class="text-2xl">💃</span>
          </div>
          <div class="hidden md:block">
            <div class="font-display font-bold text-xl text-gray-900">Dance With Wheels</div>
            <div class="text-xs text-gray-600">Turning Wheels Into Wings</div>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            active-class="text-primary-600"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/donate" class="btn-primary text-sm">
            Donate
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="mobileMenuOpen" class="lg:hidden py-4 border-t">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            {{ item.name }}
          </router-link>
          <router-link
            to="/donate"
            @click="mobileMenuOpen = false"
            class="block mt-4 text-center btn-primary"
          >
            Donate
          </router-link>
        </div>
      </transition>
    </nav>
  </header>

  <!-- Spacer for fixed header -->
  <div class="h-20"></div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Events', path: '/events' },
  { name: 'Stories', path: '/stories' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' }
]
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
