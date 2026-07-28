<script setup lang="ts">
defineProps<{
  data?: {
    title?: string;
    categories?: string[];
    logos?: string[];
  }
}>()
</script>
<template>
  <section class="py-16 md:py-24  bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
    <UContainer>
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{{ data?.title }}</h2>
        <div class="flex flex-wrap justify-center gap-3 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-medium text-sm md:text-base">
          <span v-for="(category, index) in data?.categories" :key="index" class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full shadow-sm"><UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-brand-500" />{{ category }}</span>
        </div>
      </div>
      <UMarquee pause-on-hover class="py-4">
        <div v-for="(logo, index) in data?.logos" :key="index" class="shrink-0 w-28 md:w-36 lg:w-40 h-16 md:h-20">
          <img 
            :src="logo" 
            :alt="`Клієнт ${index + 1}`" 
            loading="lazy"
            class="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          />
        </div>
      </UMarquee>
    </UContainer>
  </section>
</template>
