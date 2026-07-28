<script setup lang="ts">
import { computed } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const { data: page } = await useAsyncData('home-page-footer', () => {
  return queryCollection('content').path('/').first()
})

const items = computed<NavigationMenuItem[]>(() => {
  if (route.path === '/policy') {
    return [
      {
        label: page.value?.footer?.homeText || "Головна",
        to: "/",
      },
    ];
  }
  
  return [
    {
      label: page.value?.footer?.policyText || "Політика конфіденційності",
      to: "/policy",
    },
  ];
});
</script>

<template>
  <UFooter class="bg-brand-500 text-white border-t border-brand-600" :ui="{ 
    root: 'border-t border-brand-600', 
    bottom: 'sm: py-4' 
  }">
    <template #left>
      <p class="text-white/80 text-sm">
        Copyright © {{ new Date().getFullYear() }} {{ page?.footer?.copyright || 'Horeca Da. Всі права захищені.' }}
      </p>
    </template>

    <div class="footer-nav">
      <UNavigationMenu :items="items" variant="link" />
    </div>

    <template #right>
      <a v-if="page?.footer?.phone" :href="'tel:' + String(page.footer.phone)" class="text-white hover:opacity-80 transition-opacity text-sm font-medium">
        {{ String(page.footer.phone).replace(/(\+?380)(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5').replace('++', '+') }}
      </a>
    </template>
  </UFooter>
</template>

<style>
.footer-nav a, .footer-nav button {
  color: white !important;
}
.footer-nav a:hover, .footer-nav button:hover {
  opacity: 0.8;
}
</style>
