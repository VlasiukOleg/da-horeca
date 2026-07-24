<template>
  <section class="py-16 md:py-24 lg:py-16 relative overflow-hidden" id="hero">
    <UContainer>
      <div class="max-w-3xl mx-auto text-center">
        <!-- Logo Image container -->
        <div class="flex justify-center mb-2">
          <img src="/logo.webp" alt="Horeca Da" fetchpriority="high" class="h-20 md:h-28 lg:h-32 object-contain" />
        </div>
        
        <!-- Варіант 1: Темна плашка (Badge) з нахилом -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl text-gray-600 dark:text-gray-300 font-bold tracking-tight mb-16 leading-[1.1]">
          {{ hero?.title }} <br class="hidden md:block" /> 
          <span class="inline-block bg-brand-800 text-white px-3 py-0.5 rounded-xl transform -rotate-2 mt-6 shadow-md font-bold text-3xl md:text-4xl lg:text-5xl">{{ hero?.badge }}</span>
        </h1>

        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
         {{ hero?.description }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton size="xl" color="primary" variant="solid">
            {{ hero?.primaryButton }}
          </UButton>
          <UButton size="xl" color="gray" variant="ghost" to="#pricing">
            {{ hero?.secondaryButton }}
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  hero?: {
    title: string;
    badge: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  }
}>()
</script>
