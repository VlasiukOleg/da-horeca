<script setup lang="ts">
const { data: page } = await useAsyncData('home-page', () => {
  return queryCollection('content').path('/').first()
})
</script>

<template>
  <main>
    <LandingHeroSection id="hero" :hero="page?.hero" />
    <LandingWhyUsSection id="why-us" :data="page?.whyUs" />
    <LandingClientsSection id="clients" :data="page?.clients" />
    <LandingEcosystemSection id="ecosystem" :data="page?.ecosystem" />
    <LandingClientBonusesSection id="bonuses" :data="page?.clientBonuses" />
    <LandingPricingSection id="pricing" :data="page?.pricing" />
    <LandingReviewsSection id="reviews" />
    <LandingContactFormSection id="contact" />
  </main>
</template>
