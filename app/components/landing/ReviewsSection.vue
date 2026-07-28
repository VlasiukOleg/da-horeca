<script setup lang="ts">
import { ref } from 'vue'

interface Review {
  name?: string
  role?: string
  company?: string
  avatar?: string
  instagram?: string
  description?: string
  text?: string
}

defineProps<{
  data?: {
    title?: string;
    description?: string;
    items?: Review[];
  }
}>()

const isOpen = ref(false)
const selectedReview = ref<Review | null>(null)

function openReview(review: Review) {
  selectedReview.value = review
  isOpen.value = true
}


</script>

<template>
  <section class="py-16 md:py-24 bg-white dark:bg-gray-900/50">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ data?.title || 'Відгуки наших клієнтів' }}</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          {{ data?.description }}
        </p>
      </div>

      <UCarousel 
        v-if="data?.items?.length"
        v-slot="{ item: review }" 
        arrows
        dots
        :prev="{ variant: 'solid', color: 'primary' }"
        :next="{ variant: 'solid', color: 'primary' }"
        indicators
        :items="data.items" 
        :ui="{
          prev: '-start-2',
          next: '-end-2',
          dot: 'data-[state=active]:bg-brand-500 dark:data-[state=active]:bg-brand-400'
        }"
        class="w-full max-w-lg mx-auto"
      >
        <UCard 
          class="border border-gray-200 dark:border-gray-800"
        >
          <div class="flex items-start gap-4 mb-4">
            <UAvatar :src="review.avatar" :alt="review.name" size="lg" />
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-gray-900 dark:text-white text-base truncate">{{ review.name }}</h4>
                <UButton
                  v-if="review.instagram"
                  :to="review.instagram"
                  target="_blank"
                  variant="ghost"
                  icon="i-mdi-instagram"
                  class="text-brand-500 hover:text-brand-600 shrink-0"
                />
              </div>
              <p class="text-xs text-brand-600 dark:text-brand-400 font-medium truncate">{{ review.role }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ review.company }}</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-brand-200 to-brand-100 dark:from-brand-900/40 dark:to-brand-800/20 p-3 rounded-lg mb-4">
            <p class="text-xs text-gray-600 dark:text-gray-300 italic line-clamp-3">
              {{ review.description }}
            </p>
          </div>
          
          <div class="flex-1 relative">
            <p class="text-sm text-gray-700 dark:text-gray-200 line-clamp-5 whitespace-pre-line">
              "{{ review.text }}"
            </p>
          </div>
          
          <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-center mt-auto">
            <UButton 
              variant="ghost" 
              size="sm" 
              class="w-full justify-center text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20"
              @click="openReview(review)"
            >
              Детальніше
              <template #trailing>
                <UIcon name="i-heroicons-chevron-right-20-solid" class="w-4 h-4" />
              </template>
            </UButton>
          </div>
        </UCard>
      </UCarousel>
    </UContainer>

    <!-- Modal for full review -->
    <UModal 
      v-model:open="isOpen"
    >
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <UAvatar :src="selectedReview?.avatar" :alt="selectedReview?.name" size="md" />
            <div>
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ selectedReview?.name }}
              </h3>
              <p class="text-xs text-gray-500">{{ selectedReview?.role }}, {{ selectedReview?.company }}</p>
            </div>
          </div>
          <UButton variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="() => { isOpen = false }" />
        </div>
      </template>

      <template #body>
          <div class="py-2">
            <div v-if="selectedReview?.instagram" class="mb-4">
              <UButton
                :to="selectedReview.instagram"
                target="_blank"
                color="primary"
                variant="soft"
                icon="i-mdi-instagram"
                size="sm"
              >
                Відкрити профіль закладу в Instagram
              </UButton>
            </div>
            
            <div class="bg-gradient-to-br from-brand-200 to-brand-100 dark:from-brand-900/40 dark:to-brand-800/20 p-4 rounded-xl mb-6">
              <p class="text-sm text-gray-600 dark:text-gray-300 italic">
                {{ selectedReview?.description }}
              </p>
            </div>
            
            <div class="prose dark:prose-invert max-w-none text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">
              {{ selectedReview?.text }}
            </div>
          </div>
      </template>
    </UModal>
  </section>
</template>
