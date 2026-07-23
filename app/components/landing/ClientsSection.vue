<script setup lang="ts">
// Масив з посиланнями на логотипи клієнтів (файли мають лежати в папці public)
// Просто заміни ці назви на назви твоїх підготовлених файлів
const clientLogos = [
  '/sereda-logo.png',
  '/avangarden-logo.png',
  '/zironka-logo.png',
  '/kicunya-logo.png',
  '/boca-logo.png',
  '/fsc-logo.png',
  '/obiwan-logo.png',
]
</script>

<template>
  <section class="py-8  bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
    <UContainer>
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Наші клієнти</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Компанії, які вже довіряють нам свій бізнес.
        </p>
      </div>

      <UMarquee pause-on-hover class="py-4">
        <div v-for="(logo, index) in clientLogos" :key="index" class="mx-1 md:mx-6 lg:mx-8 flex items-center justify-center">
          <img 
            :src="logo" 
            :alt="`Клієнт ${index + 1}`" 
            class="h-16 md:h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          />
        </div>
      </UMarquee>
    </UContainer>
  </section>
</template>
