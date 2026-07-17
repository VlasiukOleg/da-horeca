<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Політика конфіденційності",
    to: "/",
    target: "_blank",
  },
];
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
