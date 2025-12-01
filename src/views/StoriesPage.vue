<template>
  <div class="stories-page">
    <!-- Page Hero -->
    <section class="relative bg-gradient-to-br from-primary-600 to-purple-600 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 class="heading-xl">Stories</h1>
          <p class="text-xl leading-relaxed opacity-95">
            Real journeys of courage, confidence, and transformation
          </p>
        </div>
      </div>
    </section>

    <!-- Impact Stories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="Impact"
          title="Impact Stories"
          subtitle="Transformative journeys of women who found their voice through dance"
        />
        <div class="grid md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          <div v-for="(story, index) in impactStories" :key="index" class="card overflow-hidden group">
            <div class="relative h-64 bg-gradient-to-br from-primary-400 to-purple-600 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {{ story.icon }}
              </div>
            </div>
            <div class="p-8 space-y-4">
              <h3 class="heading-sm text-gray-900">{{ story.title }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ story.excerpt }}</p>
              <button class="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center group">
                Read Full Story
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Carousel -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
      <div class="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What People Say"
          subtitle="Hear from our participants, families, and supporters"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :quote="testimonial.quote"
            :author-name="testimonial.author"
            :author-role="testimonial.role"
          />
        </div>
      </div>
    </section>

    <!-- Media & Press -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="In the News"
          title="Media & Press"
          subtitle="Dance With Wheels in articles, videos, and interviews"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div v-for="(media, index) in mediaItems" :key="index" class="card group cursor-pointer">
            <div class="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {{ media.icon }}
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                  {{ media.type }}
                </span>
              </div>
            </div>
            <div class="p-6 space-y-3">
              <div class="text-sm text-gray-600">{{ media.source }} • {{ media.date }}</div>
              <h3 class="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                {{ media.title }}
              </h3>
              <p class="text-sm text-gray-600 line-clamp-2">{{ media.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Share Your Story CTA -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-purple-600">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center text-white space-y-8">
          <h2 class="heading-lg">Share Your Story</h2>
          <p class="text-xl leading-relaxed opacity-95">
            Your journey can inspire others. Share your experience with Dance With Wheels and help us spread the message of empowerment.
          </p>
          <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl">
            Submit Your Story
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'

const impactStories = [
  {
    title: 'Finding My Identity Through Dance',
    excerpt: 'From feeling invisible to performing on stage, discover how wheelchair dance transformed my life and gave me the confidence to chase my dreams.',
    icon: '✨'
  },
  {
    title: 'From Isolation to Community',
    excerpt: 'The story of how a small WhatsApp group became a lifeline, connecting me with amazing women who understand my journey and celebrate my strength.',
    icon: '🤝'
  },
  {
    title: 'Breaking Barriers, Building Confidence',
    excerpt: 'How adaptive sports and dance training helped me overcome self-doubt and discover capabilities I never knew I had.',
    icon: '💪'
  },
  {
    title: 'A Mother\'s Perspective',
    excerpt: 'Watching my daughter transform from shy and withdrawn to confident and expressive has been the greatest gift. Thank you, Dance With Wheels.',
    icon: '❤️'
  }
]

const testimonials = [
  {
    quote: 'Dance With Wheels gave me something I thought I had lost — my identity. Through dance, I found my voice and my purpose.',
    author: 'Sneha M.',
    role: 'Participant'
  },
  {
    quote: 'The community here is incredible. For the first time, I feel understood, supported, and celebrated for who I am.',
    author: 'Riya K.',
    role: 'Participant'
  },
  {
    quote: 'This organization is not just teaching dance — it\'s building leaders and changing lives. I\'m grateful to be part of this movement.',
    author: 'Anjali P.',
    role: 'Participant'
  },
  {
    quote: 'As a volunteer, I\'ve witnessed the transformative power of this community. Every session is filled with joy, strength, and hope.',
    author: 'Meera S.',
    role: 'Volunteer'
  },
  {
    quote: 'Supporting Dance With Wheels has been one of our most meaningful partnerships. The impact they create is truly remarkable.',
    author: 'Corporate Partner',
    role: 'CSR Partner'
  },
  {
    quote: 'My daughter has found her passion and her community here. The confidence she\'s gained is beyond anything we could have imagined.',
    author: 'Parent',
    role: 'Family Member'
  }
]

const mediaItems = [
  {
    type: 'Article',
    icon: '📰',
    source: 'Local News',
    date: 'Jan 2025',
    title: 'Dance With Wheels: Empowering Women Across India',
    description: 'How a small WhatsApp group became a nationwide movement for disability rights and empowerment.'
  },
  {
    type: 'Video',
    icon: '🎥',
    source: 'Social Media',
    date: 'Dec 2024',
    title: 'Behind the Scenes: Astitva 2025',
    description: 'An exclusive look at the preparation for India\'s first offline wheelchair dance event.'
  },
  {
    type: 'Interview',
    icon: '🎙️',
    source: 'Podcast',
    date: 'Nov 2024',
    title: 'Founder\'s Journey: From Dream to Reality',
    description: 'Priya Sharma shares the inspiring story of how Dance With Wheels was born.'
  }
]
</script>
