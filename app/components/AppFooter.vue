<script setup lang="ts">
import { computed } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => {
  if (route.path === '/policy') {
    return [
      {
        label: "Головна",
        to: "/",
      },
    ];
  }
  
  return [
    {
      label: "Політика конфіденційності",
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
        Copyright © {{ new Date().getFullYear() }} Horeca Da. Всі права захищені.
      </p>
    </template>

    <div class="footer-nav">
      <UNavigationMenu :items="items" variant="link" />
    </div>

    <template #right>
      <a href="tel:+380997120883" class="text-white hover:opacity-80 transition-opacity text-sm font-medium">
        +380 99 712 08 83
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
