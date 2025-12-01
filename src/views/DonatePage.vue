<template>
  <div class="donate-page">
    <!-- Page Hero -->
    <section class="relative bg-gradient-to-br from-accent-600 to-accent-700 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div class="text-6xl mb-4">💛</div>
          <h1 class="heading-xl">Support Our Mission</h1>
          <p class="text-xl leading-relaxed opacity-95">
            Your support helps a girl with disabilities dance for the first time — not just with her body, but with her identity.
          </p>
        </div>
      </div>
    </section>

    <!-- Donation Amounts -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="Make an Impact"
          title="Choose Your Contribution"
          subtitle="Every contribution, big or small, makes a difference in someone's life"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          <div v-for="amount in donationAmounts" :key="amount.value" class="card p-8 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group">
            <div class="text-center space-y-4">
              <div class="text-5xl mb-4">{{ amount.icon }}</div>
              <div class="text-4xl font-display font-bold text-primary-600">₹{{ amount.value }}</div>
              <h3 class="font-semibold text-lg text-gray-900">{{ amount.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ amount.description }}</p>
              <button class="btn-primary w-full group-hover:bg-primary-700">
                Donate
              </button>
            </div>
          </div>
        </div>

        <!-- Custom Amount -->
        <div class="max-w-2xl mx-auto mt-12">
          <div class="card p-8">
            <h3 class="heading-sm text-center mb-6">Or Enter Custom Amount</h3>
            <div class="flex gap-4">
              <div class="relative flex-grow">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-semibold">₹</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  class="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-lg"
                />
              </div>
              <button class="btn-primary px-8 whitespace-nowrap">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Methods -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
      <div class="container-custom">
        <SectionHeading
          title="Payment Methods"
          subtitle="We accept multiple payment options for your convenience"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <!-- UPI -->
          <div class="card p-8 text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl">
              📱
            </div>
            <h3 class="font-semibold text-xl">UPI</h3>
            <p class="text-sm text-gray-600">Quick and easy payment via UPI apps</p>
            <div class="text-sm font-mono bg-gray-100 p-3 rounded-lg">
              dancewithwheels@upi
            </div>
          </div>

          <!-- Bank Transfer -->
          <div class="card p-8 text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl">
              🏦
            </div>
            <h3 class="font-semibold text-xl">Bank Transfer</h3>
            <p class="text-sm text-gray-600">Direct bank transfer (NEFT/RTGS/IMPS)</p>
            <button class="text-primary-600 font-semibold hover:text-primary-700 text-sm">
              View Bank Details
            </button>
          </div>

          <!-- International -->
          <div class="card p-8 text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
              🌍
            </div>
            <h3 class="font-semibold text-xl">International</h3>
            <p class="text-sm text-gray-600">International transfers via PayPal or Wise</p>
            <button class="text-primary-600 font-semibold hover:text-primary-700 text-sm">
              International Options
            </button>
          </div>
        </div>

        <!-- Tax Exemption Note -->
        <div class="max-w-3xl mx-auto mt-12 p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
          <div class="flex items-start space-x-4">
            <div class="text-3xl">ℹ️</div>
            <div>
              <h4 class="font-semibold text-lg text-gray-900 mb-2">Tax Exemption</h4>
              <p class="text-gray-700 text-sm leading-relaxed">
                Dance With Wheels is a registered charitable trust. Tax exemption certificate (80G) is under process.
                You will receive a donation receipt for your records upon completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionHeading
          badge="Your Impact"
          title="How Your Donation Helps"
          subtitle="See the real-world impact of your contribution"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div v-for="impact in impactItems" :key="impact.title" class="text-center space-y-4">
            <div class="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-4xl">
              {{ impact.icon }}
            </div>
            <h3 class="font-display font-semibold text-xl">{{ impact.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ impact.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Ways to Support -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <SectionHeading
          title="Other Ways to Support"
          subtitle="Financial donations aren't the only way to help"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <div class="card p-6 text-center space-y-4">
            <div class="text-4xl">🎁</div>
            <h3 class="font-semibold text-lg">Equipment Donation</h3>
            <p class="text-sm text-gray-600">Donate wheelchairs, dance equipment, or adaptive sports gear</p>
          </div>
          <div class="card p-6 text-center space-y-4">
            <div class="text-4xl">🤝</div>
            <h3 class="font-semibold text-lg">Volunteer</h3>
            <p class="text-sm text-gray-600">Share your time and skills to support our programs</p>
          </div>
          <div class="card p-6 text-center space-y-4">
            <div class="text-4xl">📢</div>
            <h3 class="font-semibold text-lg">Spread the Word</h3>
            <p class="text-sm text-gray-600">Share our mission with your network on social media</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection
      title="Questions About Donating?"
      description="We're here to help. Reach out to learn more about how your contribution makes a difference."
      :buttons="[
        { text: 'Contact Us', link: '/contact', primary: true },
        { text: 'Learn More', link: '/about', primary: false }
      ]"
    />
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CTASection from '@/components/ui/CTASection.vue'

const donationAmounts = [
  {
    value: '500',
    icon: '📡',
    title: 'Internet Support',
    description: 'Provide internet and training support for a participant for one month'
  },
  {
    value: '1500',
    icon: '🎪',
    title: 'Equipment',
    description: 'Contribute towards adaptive dance equipment for our community'
  },
  {
    value: '5000',
    icon: '⭐',
    title: 'Sponsor a Performer',
    description: 'Sponsor a dancer\'s participation in an event including training and costumes'
  },
  {
    value: '10000',
    icon: '🎉',
    title: 'Event Support',
    description: 'Support organizing workshops, events, and community gatherings'
  }
]

const impactItems = [
  {
    icon: '💃',
    title: 'Training & Development',
    description: 'Your donation funds dance training, workshops, and skill development programs for women with disabilities'
  },
  {
    icon: '🌐',
    title: 'Accessibility',
    description: 'We provide internet access, adaptive equipment, and resources to ensure everyone can participate'
  },
  {
    icon: '🎭',
    title: 'Events & Opportunities',
    description: 'Support events like Astitva 2025 that create platforms for visibility and empowerment'
  }
]
</script>
