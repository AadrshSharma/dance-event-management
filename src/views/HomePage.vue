<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Who We Are Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-slide-in-right">
            <SectionHeading
              badge="About Us"
              title="Who We Are"
              subtitle=""
              size="md"
              class="text-left"
            />
            <p class="text-lg text-gray-700 leading-relaxed">
              Dance With Wheels (DWW) is a <strong>disability-led non-profit organisation</strong> empowering girls and women with disabilities across India through wheelchair dance, adaptive sports, skill development, and emotional well-being.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              We believe that dance is not just art — it's <strong>identity, expression, and freedom</strong>.
            </p>
            <router-link to="/about" class="btn-primary inline-flex">
              Learn Our Story
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </router-link>
          </div>
          <div class="relative h-96 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div class="absolute inset-0 flex items-center justify-center text-9xl">💃</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
      <div class="container-custom">
        <SectionHeading
          badge="Our Impact"
          title="Making a Difference"
          subtitle="Together, we're building a movement that empowers women with disabilities"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <AnimatedCounter
            :end-value="20"
            suffix="+"
            label="Women Empowered"
          />
          <AnimatedCounter
            :end-value="10"
            suffix="+"
            label="Events & Workshops"
          />
          <AnimatedCounter
            :end-value="8"
            suffix="+"
            label="States Reached"
          />
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-display font-bold text-primary-600 mb-2">
              🤝
            </div>
            <div class="text-gray-600 font-medium">Supported by International Funders</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Program Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="card overflow-hidden">
            <div class="grid md:grid-cols-2">
              <div class="bg-gradient-to-br from-accent-400 to-accent-600 p-12 flex items-center justify-center">
                <div class="text-center text-white space-y-4">
                  <div class="text-7xl">🎉</div>
                  <div class="text-3xl font-display font-bold">Astitva 2025</div>
                  <div class="text-lg">Featured Event</div>
                </div>
              </div>
              <div class="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <div class="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                    🌟 Featured Program
                  </div>
                  <h3 class="heading-md mb-4">Astitva 2025</h3>
                  <p class="text-gray-700 leading-relaxed mb-6">
                    India's First Offline Wheelchair Dance & Empowerment Event celebrating identity, art, and accessibility.
                  </p>
                </div>
                <router-link to="/events" class="btn-accent inline-flex self-start">
                  Know More
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Callout Quote Section -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-purple-600 text-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <svg class="w-16 h-16 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote class="text-3xl md:text-4xl font-display font-bold leading-tight">
            We dance not to escape life —<br>we dance to show the world we belong.
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Programs Preview -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <SectionHeading
          badge="What We Do"
          title="Our Programs"
          subtitle="Intentionally designed by and for women with disabilities"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <ProgramCard
            icon="💃"
            title="Wheelchair Dance"
            description="Weekly virtual and in-person sessions led by trained wheelchair dancers."
            :show-button="false"
          />
          <ProgramCard
            icon="💪"
            title="Health & Well-being"
            description="Guidance on fitness, mobility, mental well-being, and independence."
            :show-button="false"
          />
          <ProgramCard
            icon="🏃‍♀️"
            title="Adaptive Sports"
            description="Introducing women to para athletics, marathons, and accessible sports."
            :show-button="false"
          />
          <ProgramCard
            icon="👑"
            title="Leadership"
            description="Workshops, peer mentoring, and confidence-building sessions."
            :show-button="false"
          />
        </div>
        <div class="text-center mt-12">
          <router-link to="/programs" class="btn-primary">
            Explore All Programs
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection
      title="You can be part of this change"
      description="Join us in empowering women with disabilities through dance, sports, and community building."
      :buttons="[
        { text: 'Join', link: '/get-involved', primary: true },
        { text: 'Donate', link: '/donate', primary: false },
        { text: 'Sponsor', link: '/get-involved', primary: false }
      ]"
    />
  </div>
</template>

<script setup>
import HeroSection from '@/components/ui/HeroSection.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
import ProgramCard from '@/components/ui/ProgramCard.vue'
import CTASection from '@/components/ui/CTASection.vue'
</script>
