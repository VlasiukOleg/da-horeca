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
  '/sereda-logo.png',
  '/avangarden-logo.png',
  '/zironka-logo.png',
  '/kicunya-logo.png',
  '/boca-logo.png',
  '/fsc-logo.png',
  '/obiwan-logo.png',
  '/sereda-logo.png',
  '/avangarden-logo.png',
  '/zironka-logo.png',
  '/kicunya-logo.png',
  '/boca-logo.png',
  '/fsc-logo.png',
  '/obiwan-logo.png',
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
  <section class="py-16 md:py-24  bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
    <UContainer>
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">З ким ми працюємо</h2>
        <div class="flex flex-wrap justify-center gap-3 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-medium text-sm md:text-base">
          <span class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full shadow-sm"><UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-brand-500" />Кав’ярні та кав’ярні-пекарні</span>
          <span class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full shadow-sm"><UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-brand-500" />Кафе та бари</span>
          <span class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full shadow-sm"><UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-brand-500" />Ресторани та мережеві проєкти</span>
          <span class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full shadow-sm"><UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-brand-500" />Мультиформатні заклади</span>
        </div>
      </div>

      <UMarquee pause-on-hover class="py-4">
        <div v-for="(logo, index) in clientLogos" :key="index" class="mx-4 md:mx-6 lg:mx-8 flex items-center justify-center shrink-0">
          <img 
            :src="logo" 
            :alt="`Клієнт ${index + 1}`" 
            class="h-16 md:h-20 w-auto max-w-none object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          />
        </div>
      </UMarquee>
    </UContainer>
  </section>
</template>
