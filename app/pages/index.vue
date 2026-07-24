<script setup lang="ts">
const { data: page } = await useAsyncData('home-page', () => {
  return queryCollection('content').path('/').first()
})
</script>

<template>
  <main>
    <LandingHeroSection id="hero" :hero="page?.hero" />
    <LandingWhyUsSection id="why-us" />
    <LandingClientsSection id="clients" />
    <LandingEcosystemSection id="ecosystem" />
    <LandingClientBonusesSection id="bonuses" />
    <LandingPricingSection id="pricing" />
    <LandingReviewsSection id="reviews" />
    <LandingContactFormSection id="contact" />
  </main>
</template>
