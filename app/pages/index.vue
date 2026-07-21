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
  ogTitle: 'Horeca Da - сучасна ресторанна бухгалтерія',
  ogDescription: 'Професійний фінансовий супровід, аудит та автоматизація для закладів Horeca.',
  ogImage: 'https://da-horeca.vercel.app/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
