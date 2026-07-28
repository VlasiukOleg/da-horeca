<template>
  <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/50">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ data?.title }}</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ data?.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard v-for="(feature, index) in data?.features" :key="index" class="h-full hover:shadow-lg transition-shadow duration-300">
          <div class="p-2 mb-4 inline-flex rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary">
            <UIcon :name="feature.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  description: string;
}

defineProps<{
  data?: {
    title: string;
    description: string;
    features: Feature[];
  }
}>()
</script>
