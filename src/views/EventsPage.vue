<template>
  <div class="events-page">
    <!-- Page Hero -->
    <section class="relative bg-gradient-to-br from-accent-600 to-accent-700 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 class="heading-xl">Events</h1>
          <p class="text-xl leading-relaxed opacity-95">
            Celebrating identity, art, and accessibility through transformative events
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Event: Astitva 2025 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="card overflow-hidden">
            <div class="bg-gradient-to-br from-accent-400 to-accent-600 p-12 text-center text-white">
              <div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                🌟 Featured Event
              </div>
              <h2 class="text-5xl md:text-6xl font-display font-bold mb-4">Astitva 2025</h2>
              <p class="text-2xl mb-8">India's First Offline Wheelchair Dance & Empowerment Event</p>
              <div class="flex items-center justify-center space-x-8 text-lg">
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>2025</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>India</span>
                </div>
              </div>
            </div>

            <div class="p-8 md:p-12 space-y-8">
              <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed">
                  Astitva 2025 is a historic celebration of identity, art, and accessibility — bringing together women wheelchair dancers from across India for performances, workshops, and empowerment sessions.
                </p>
                <p class="text-gray-700 leading-relaxed">
                  This groundbreaking event celebrates the strength, creativity, and resilience of women with disabilities, creating a platform for visibility and recognition.
                </p>
              </div>

              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-primary-50 p-6 rounded-xl">
                  <div class="text-3xl mb-3">💃</div>
                  <h3 class="font-semibold text-lg mb-2">Dance Performances</h3>
                  <p class="text-gray-700 text-sm">Showcase your talent on a national platform</p>
                </div>
                <div class="bg-purple-50 p-6 rounded-xl">
                  <div class="text-3xl mb-3">🎓</div>
                  <h3 class="font-semibold text-lg mb-2">Workshops</h3>
                  <p class="text-gray-700 text-sm">Learn from expert trainers and mentors</p>
                </div>
                <div class="bg-pink-50 p-6 rounded-xl">
                  <div class="text-3xl mb-3">🤝</div>
                  <h3 class="font-semibold text-lg mb-2">Networking</h3>
                  <p class="text-gray-700 text-sm">Connect with women from across India</p>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <router-link to="/get-involved" class="btn-accent text-lg px-8 py-4">
                  Register as Participant
                </router-link>
                <router-link to="/get-involved" class="btn-secondary text-lg px-8 py-4">
                  Attend as Audience
                </router-link>
                <router-link to="/get-involved" class="btn-primary text-lg px-8 py-4">
                  Sponsor This Event
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <SectionHeading
          badge="Our Journey"
          title="Past Events"
          subtitle="Celebrating the moments that brought us together"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div v-for="event in pastEvents" :key="event.title" class="card group cursor-pointer">
            <div class="relative h-48 bg-gradient-to-br from-primary-400 to-purple-600 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {{ event.icon }}
              </div>
            </div>
            <div class="p-6 space-y-3">
              <div class="text-sm text-primary-600 font-semibold">{{ event.date }}</div>
              <h3 class="font-display font-semibold text-xl text-gray-900">{{ event.title }}</h3>
              <p class="text-gray-600">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Calendar -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="What's Next"
          title="Upcoming Workshops"
          subtitle="Join us for these exciting upcoming sessions"
        />
        <div class="max-w-4xl mx-auto space-y-6 mt-12">
          <div v-for="workshop in upcomingWorkshops" :key="workshop.title" class="card p-6 hover:shadow-2xl transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div class="flex items-start space-x-4 flex-grow">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {{ workshop.icon }}
                </div>
                <div class="flex-grow">
                  <h3 class="font-display font-semibold text-xl text-gray-900 mb-2">{{ workshop.title }}</h3>
                  <p class="text-gray-600 mb-3">{{ workshop.description }}</p>
                  <div class="flex flex-wrap gap-3 text-sm text-gray-600">
                    <div class="flex items-center space-x-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>{{ workshop.date }}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{{ workshop.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn-primary whitespace-nowrap">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection
      title="Want to Host an Event with Us?"
      description="Partner with Dance With Wheels to create inclusive and empowering events"
      :buttons="[
        { text: 'Get in Touch', link: '/contact', primary: true },
        { text: 'Partner with Us', link: '/get-involved', primary: false }
      ]"
    />
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CTASection from '@/components/ui/CTASection.vue'

const pastEvents = [
  {
    title: 'Virtual Dance Competition 2025',
    date: 'January 2025',
    icon: '🏆',
    description: 'Our first virtual dance competition brought together talented wheelchair dancers from across India.'
  },
  {
    title: 'Independence Day Celebration',
    date: 'August 2024',
    icon: '🇮🇳',
    description: 'A special performance celebrating freedom, independence, and the power of expression.'
  },
  {
    title: 'Teachers Day Special',
    date: 'September 2024',
    icon: '👩‍🏫',
    description: 'Honoring the mentors and trainers who guide and inspire our community.'
  }
]

const upcomingWorkshops = [
  {
    title: 'Beginner Wheelchair Dance Workshop',
    description: 'Learn the basics of wheelchair dance with our experienced instructors',
    date: 'Coming Soon',
    time: 'TBA',
    icon: '💃'
  },
  {
    title: 'Fitness & Mobility Session',
    description: 'Practical exercises and tips for improving fitness and mobility',
    date: 'Coming Soon',
    time: 'TBA',
    icon: '💪'
  },
  {
    title: 'Leadership Development Workshop',
    description: 'Build confidence and leadership skills with expert guidance',
    date: 'Coming Soon',
    time: 'TBA',
    icon: '👑'
  }
]
</script>
