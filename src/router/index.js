import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/programs',
    name: 'Programs',
    component: () => import('../views/ProgramsPage.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/EventsPage.vue')
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () => import('../views/StoriesPage.vue')
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('../views/GetInvolvedPage.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/DonatePage.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/ResourcesPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
