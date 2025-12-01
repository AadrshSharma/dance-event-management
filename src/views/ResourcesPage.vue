<template>
  <div class="resources-page">
    <!-- Page Hero -->
    <section class="relative bg-gradient-to-br from-primary-600 to-purple-600 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 class="heading-xl">Resources</h1>
          <p class="text-xl leading-relaxed opacity-95">
            Articles, reports, and downloads to support disability rights and inclusive living
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Articles -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="Latest Articles"
          title="Blog"
          subtitle="Insights on disability rights, adaptive dance, confidence, and independence"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <article v-for="post in blogPosts" :key="post.title" class="card group cursor-pointer">
            <div class="relative h-48 bg-gradient-to-br from-primary-400 to-purple-600 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {{ post.icon }}
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                  {{ post.category }}
                </span>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-center space-x-4 text-sm text-gray-600">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>
              <h3 class="font-display font-semibold text-xl text-gray-900 group-hover:text-primary-600 transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">{{ post.excerpt }}</p>
              <button class="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center group">
                Read More
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Downloads Section -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
      <div class="container-custom">
        <SectionHeading
          badge="Documents"
          title="Downloads"
          subtitle="Access our reports, policies, and participation forms"
        />
        <div class="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <div v-for="download in downloads" :key="download.title" class="card p-6 hover:shadow-2xl transition-all group cursor-pointer">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {{ download.icon }}
              </div>
              <div class="flex-grow">
                <h3 class="font-semibold text-lg text-gray-900 mb-2">{{ download.title }}</h3>
                <p class="text-sm text-gray-600 mb-4">{{ download.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">{{ download.size }} • {{ download.format }}</span>
                  <button class="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Resources -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="Watch & Learn"
          title="Video Resources"
          subtitle="Tutorials, performances, and inspirational content"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div v-for="video in videos" :key="video.title" class="card group cursor-pointer">
            <div class="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-6xl">
                🎥
              </div>
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div class="absolute bottom-4 right-4">
                <span class="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs font-semibold text-white">
                  {{ video.duration }}
                </span>
              </div>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                {{ video.title }}
              </h3>
              <p class="text-sm text-gray-600">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- External Resources -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <SectionHeading
          title="External Resources"
          subtitle="Helpful links and organizations in the disability space"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <a v-for="resource in externalResources" :key="resource.title" href="#" class="card p-6 hover:shadow-xl transition-all group">
            <div class="flex items-start space-x-4">
              <div class="text-3xl">{{ resource.icon }}</div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                  {{ resource.title }}
                </h3>
                <p class="text-sm text-gray-600">{{ resource.description }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-purple-600">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center text-white space-y-8">
          <h2 class="heading-lg">Stay Updated</h2>
          <p class="text-xl leading-relaxed opacity-95">
            Subscribe to our newsletter for the latest articles, events, and resources
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button class="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const blogPosts = [
  {
    title: 'The Power of Wheelchair Dance',
    excerpt: 'How dance transforms lives and builds confidence for women with disabilities',
    category: 'Dance',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    icon: '💃'
  },
  {
    title: 'Breaking Barriers: Adaptive Sports in India',
    excerpt: 'Exploring the landscape of adaptive sports and opportunities for women with disabilities',
    category: 'Sports',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    icon: '🏃‍♀️'
  },
  {
    title: 'Building Independence Through Community',
    excerpt: 'The importance of peer support networks in disability empowerment',
    category: 'Community',
    date: 'Jan 5, 2025',
    readTime: '6 min read',
    icon: '🤝'
  },
  {
    title: 'Disability Rights in India: A Guide',
    excerpt: 'Understanding your rights and navigating accessibility in India',
    category: 'Rights',
    date: 'Dec 28, 2024',
    readTime: '10 min read',
    icon: '⚖️'
  },
  {
    title: 'Mental Health & Disability',
    excerpt: 'Addressing mental well-being and building resilience in the disability community',
    category: 'Health',
    date: 'Dec 20, 2024',
    readTime: '8 min read',
    icon: '🧠'
  },
  {
    title: 'Leadership Skills for Women',
    excerpt: 'Developing leadership capabilities and advocacy skills',
    category: 'Leadership',
    date: 'Dec 15, 2024',
    readTime: '6 min read',
    icon: '👑'
  }
]

const downloads = [
  {
    title: 'Annual Report 2024',
    description: 'Our impact, programs, and achievements from the past year',
    format: 'PDF',
    size: '2.5 MB',
    icon: '📊'
  },
  {
    title: 'Organizational Policies',
    description: 'Our governance structure, policies, and operational guidelines',
    format: 'PDF',
    size: '1.2 MB',
    icon: '📋'
  },
  {
    title: 'Participant Registration Form',
    description: 'Form to join Dance With Wheels programs',
    format: 'PDF',
    size: '500 KB',
    icon: '📝'
  },
  {
    title: 'Volunteer Application',
    description: 'Application form for volunteers interested in joining our team',
    format: 'PDF',
    size: '450 KB',
    icon: '🤝'
  },
  {
    title: 'Partnership Proposal',
    description: 'Information for organizations interested in partnering with us',
    format: 'PDF',
    size: '3.1 MB',
    icon: '🏢'
  },
  {
    title: 'Accessibility Guidelines',
    description: 'Best practices for creating accessible events and spaces',
    format: 'PDF',
    size: '1.8 MB',
    icon: '♿'
  }
]

const videos = [
  {
    title: 'Introduction to Wheelchair Dance',
    description: 'Learn the basics of wheelchair dance in this beginner tutorial',
    duration: '15:30'
  },
  {
    title: 'Astitva 2025 Highlights',
    description: 'Relive the magic of India\'s first offline wheelchair dance event',
    duration: '8:45'
  },
  {
    title: 'Participant Success Stories',
    description: 'Inspiring journeys of transformation and empowerment',
    duration: '12:20'
  }
]

const externalResources = [
  {
    title: 'Rights of Persons with Disabilities Act',
    description: 'Official government resource on disability rights in India',
    icon: '⚖️'
  },
  {
    title: 'Accessible India Campaign',
    description: 'National campaign for accessible infrastructure',
    icon: '🏛️'
  },
  {
    title: 'Paralympic Committee of India',
    description: 'Information on para sports and adaptive athletics',
    icon: '🏅'
  },
  {
    title: 'Disability Organizations Directory',
    description: 'Comprehensive list of disability organizations in India',
    icon: '📖'
  },
  {
    title: 'Assistive Technology Resources',
    description: 'Information on adaptive equipment and technology',
    icon: '🔧'
  },
  {
    title: 'Mental Health Support',
    description: 'Mental health resources for persons with disabilities',
    icon: '💚'
  }
]
</script>
