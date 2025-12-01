<template>
  <div class="contact-page">
    <!-- Page Hero -->
    <section class="relative bg-gradient-to-br from-primary-600 to-purple-600 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 class="heading-xl">Contact Us</h1>
          <p class="text-xl leading-relaxed opacity-95">
            We'd love to hear from you. Reach out with questions, ideas, or just to say hello.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="heading-md mb-6">Get in Touch</h2>
              <p class="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you want to join our programs, volunteer, partner with us, or just learn more about our work,
                we're here to help.
              </p>
            </div>

            <!-- Contact Cards -->
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-gray-900 mb-1">Address</h3>
                  <p class="text-gray-600">Chhindwara, Madhya Pradesh, India</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-gray-900 mb-1">Email</h3>
                  <a href="mailto:dancewithwheels@gmail.com" class="text-primary-600 hover:text-primary-700 transition-colors">
                    dancewithwheels@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📱
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+918989082201" class="text-primary-600 hover:text-primary-700 transition-colors">
                    +91 8989082201
                  </a>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="card p-6 bg-gradient-to-br from-primary-50 to-purple-50">
              <h3 class="font-semibold text-lg text-gray-900 mb-3">Office Hours</h3>
              <div class="space-y-2 text-gray-700">
                <div class="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span class="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday:</span>
                  <span class="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday:</span>
                  <span class="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card p-8">
            <h3 class="heading-sm mb-6">Send us a Message</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="participant">Join as Participant</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="partnership">Partnership/CSR</option>
                  <option value="donation">Donation Query</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button type="submit" class="btn-primary w-full text-lg py-4">
                Send Message
                <svg class="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="h-96 bg-gray-200">
      <div class="w-full h-full flex items-center justify-center text-gray-500">
        <div class="text-center space-y-4">
          <div class="text-6xl">🗺️</div>
          <p class="text-lg">Google Maps Integration</p>
          <p class="text-sm">Add your Google Maps embed code here</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
          <div class="space-y-4 mt-12">
            <div v-for="(faq, index) in faqs" :key="index" class="card p-6">
              <h3 class="font-semibold text-lg text-gray-900 mb-2">{{ faq.question }}</h3>
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const handleSubmit = () => {
  alert('Form submission functionality would be connected to your backend here.')
}

const faqs = [
  {
    question: 'How can I join Dance With Wheels?',
    answer: 'You can join by filling out the participant registration form available in our Resources section or by contacting us directly. All our programs are free for women with disabilities.'
  },
  {
    question: 'Do I need prior dance experience?',
    answer: 'No prior dance experience is required! Our programs are designed for all skill levels, from complete beginners to experienced dancers.'
  },
  {
    question: 'Are your programs only for wheelchair users?',
    answer: 'While our primary focus is wheelchair dance, we welcome women with all types of disabilities. Our programs are designed to be inclusive and adaptive.'
  },
  {
    question: 'How can my organization partner with DWW?',
    answer: 'We welcome partnerships with organizations for CSR initiatives, event sponsorships, and program support. Please use the contact form or email us directly to discuss partnership opportunities.'
  },
  {
    question: 'Are donations tax-deductible?',
    answer: 'We are a registered charitable trust and our 80G certificate is currently under process. You will receive a donation receipt for your records.'
  }
]
</script>
