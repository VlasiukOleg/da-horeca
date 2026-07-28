<template>
  <section class="py-16 md:py-24 bg-white dark:bg-brand-950/20">
    <UContainer>
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
            <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
            <span>{{ data?.badge }}</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {{ data?.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            {{ data?.description }}
          </p>

          <ul class="space-y-4">
            <li v-for="(bonus, index) in data?.bonuses" :key="index" class="flex items-start gap-3">
              <div class="mt-1 bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm text-brand-500">
                <UIcon :name="bonus.icon" class="w-5 h-5" />
              </div>
              <div>
                <span class="font-semibold text-gray-900 dark:text-gray-100">{{ bonus.title }}</span>
                <p v-if="bonus.description" class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ bonus.description }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="md:w-1/2 relative">
          <div class="aspect-square rounded-2xl bg-gradient-to-br from-brand-200 to-brand-100 dark:from-brand-900/40 dark:to-brand-800/20 flex items-center justify-center p-8 relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-300/30 dark:bg-brand-500/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-400/20 dark:bg-brand-400/10 rounded-full blur-3xl"></div>
            
            <UCard class="w-full max-w-sm shadow-xl border-0 ring-1 ring-gray-200/50 dark:ring-gray-700/50 relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <UIcon name="i-heroicons-lock-closed" class="w-10 h-10 text-brand-500" />
                <div>
                  <h4 class="font-bold text-lg">Horeca Da Club</h4>
                  <p class="text-sm text-gray-500">Закрита спільнота</p>
                </div>
              </div>
              <div class="space-y-3">
                <div class="h-2 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                <div class="h-2 bg-gray-100 dark:bg-gray-800 rounded w-5/6"></div>
                <div class="h-2 bg-gray-100 dark:bg-gray-800 rounded w-4/6"></div>
              </div>
              <UButton class="w-full mt-6" variant="soft">
                Дізнатись деталі
              </UButton>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Bonus {
  icon?: string;
  title?: string;
  description?: string;
}

defineProps<{
  data?: {
    badge?: string;
    title?: string;
    description?: string;
    bonuses?: Bonus[];
  }
}>()
</script>
