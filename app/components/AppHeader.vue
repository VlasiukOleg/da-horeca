<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Чому саме ми?",
    to: "#why-us",
  },
  {
    label: "Партнери",
    to: "#ecosystem",
  },
  {
    label: "Бонуси",
    to: "#bonuses",
  },
  {
    label: "Послуги",
    to: "#pricing",
  },
  {
    label: "Відгуки",
    to: "#reviews",
  },
  {
    label: "Контакти",
    to: "#contact",
  },
]);

const handleScrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <UHeader
    mode="drawer"
    class="bg-brand-500 border-b border-brand-600 shadow-sm"
  >
    <template #title>
      <div class="flex items-center gap-2">
        <img src="/logo-white.png" alt="Horeca Da" class="h-8" />
      </div>
    </template>

    <!-- Navigation styled directly with Nuxt UI props if supported, or via CSS -->
    <div class="header-nav">
      <UNavigationMenu :items="items" variant="link" />
    </div>

    <template #right>
      <UColorModeButton />
      <UButton
        label="Записатись на консультацію"
        variant="solid"
        class="ml-2 hidden bg-white lg:flex  text-brand-700 hover:bg-gray-100 font-semibold"
        @click="handleScrollToContact"
      />
    </template>

    <template #body>
      <div class="header-nav-mobile">
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </div>
    </template>
  </UHeader>
</template>

<style>
/* Override navigation menu text colors to be white on the brand background for desktop */
.header-nav a, .header-nav button {
  color: white !important;
}
.header-nav a:hover, .header-nav button:hover {
  opacity: 0.8;
}

/* For mobile drawer, text should be brand colored on white bg */
.header-nav-mobile a, .header-nav-mobile button {
  color: var(--color-brand-700) !important;
  font-weight: 500;
}
.header-nav-mobile a:hover, .header-nav-mobile button:hover {
  color: var(--color-brand-500) !important;
}

/* Make the mobile burger menu button a solid white box with dark icon */
header button:not(.bg-white) {
  background-color: white !important;
  color: var(--color-brand-700) !important;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
header button:not(.bg-white):hover {
  background-color: #f3f4f6 !important;
}
</style>
