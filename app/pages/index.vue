<template>
  <main>
    <LandingHeroSection id="hero" />
    <LandingWhyUsSection id="why-us" />
    <LandingEcosystemSection id="ecosystem" />
    <LandingClientBonusesSection id="bonuses" />
    <LandingPricingSection id="pricing" />
    <LandingReviewsSection id="reviews" />
    <LandingContactFormSection id="contact" />
  </main>
</template>

<script setup>
useSeoMeta({
  ogTitle: 'Horeca Da - Сучасна ресторанна бухгалтерія',
  ogDescription: 'Професійний фінансовий супровід, аудит та автоматизація для закладів Horeca.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
