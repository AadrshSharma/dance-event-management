<template>
  <div class="about-page">
    <!-- Page Hero -->
    <section class="relative bg-gradient-to-br from-primary-600 to-purple-600 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 class="heading-xl">About Us</h1>
          <p class="text-xl leading-relaxed opacity-95">
            From a small WhatsApp group to a powerful movement empowering women with disabilities across India
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto space-y-8">
          <SectionHeading
            badge="Our Journey"
            title="Our Story"
            subtitle=""
          />
          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed">
              Dance With Wheels began as a small WhatsApp group in 2024, where 3–4 wheelchair users practiced dance together online.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              What started as a support circle grew into a powerful movement — connecting women across India, building confidence, identity, and community.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Today, DWW is a <strong>registered charitable trust</strong> supported by <strong>Women Win (ONSIDE Fund)</strong> to create accessible platforms, leadership opportunities, and dance training for women with disabilities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision, Mission & Values -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <!-- Vision -->
          <div class="card p-8 space-y-4">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
              🔭
            </div>
            <h3 class="heading-sm">Vision</h3>
            <p class="text-gray-700 leading-relaxed">
              To build the largest network of women with disabilities in India, helping them lead confident, independent, and creative lives through dance, movement, leadership, and community.
            </p>
          </div>

          <!-- Mission -->
          <div class="card p-8 space-y-4">
            <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-3xl">
              🎯
            </div>
            <h3 class="heading-sm">Mission</h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Encourage women with disabilities to pursue dance and sports</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Create accessible spaces for visibility, leadership, and expression</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Foster disability representation and gender inclusion</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Build a nationwide support network promoting dignity and independence</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Values -->
        <div class="text-center mb-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div v-for="value in values" :key="value.name" class="text-center space-y-3 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
            <div class="text-4xl">{{ value.icon }}</div>
            <div class="font-semibold text-gray-900">{{ value.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team & Governance -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="Leadership"
          title="Team & Governance"
          subtitle="Meet the dedicated individuals leading our movement"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <div v-for="member in team" :key="member.name" class="card p-8 text-center space-y-4 hover:shadow-2xl transition-shadow">
            <div class="w-24 h-24 mx-auto bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {{ member.name.split(' ').map(n => n[0]).join('') }}
            </div>
            <div>
              <h3 class="font-display font-semibold text-xl text-gray-900">{{ member.name }}</h3>
              <p class="text-primary-600 font-medium">{{ member.role }}</p>
            </div>
            <p class="text-sm text-gray-600">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection
      title="Join Our Movement"
      description="Be part of a community that's breaking barriers and empowering women with disabilities"
      :buttons="[
        { text: 'Get Involved', link: '/get-involved', primary: true },
        { text: 'View Programs', link: '/programs', primary: false }
      ]"
    />
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CTASection from '@/components/ui/CTASection.vue'

const values = [
  { name: 'Inclusion', icon: '✨' },
  { name: 'Representation', icon: '🎭' },
  { name: 'Dignity', icon: '👑' },
  { name: 'Feminist Principles', icon: '💪' },
  { name: 'Leadership', icon: '🌟' },
  { name: 'Community', icon: '🤝' }
]

const team = [
  {
    name: 'Priya Sharma',
    role: 'Founder & Managing Trustee',
    description: 'Leading the vision and strategic direction of Dance With Wheels'
  },
  {
    name: 'Karishma Sharma',
    role: 'Co-Trustee & Program Coordinator',
    description: 'Managing programs and coordinating community initiatives'
  },
  {
    name: 'Our Team',
    role: 'Trainers, Volunteers & Mentors',
    description: 'Dedicated individuals supporting our participants every step of the way'
  }
]
</script>
