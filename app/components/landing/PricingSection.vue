<template>
  <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/10" id="pricing">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ data?.title || 'Послуги та вартість' }}</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ data?.description }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <UAccordion 
          :items="accordionItems" 
          default-value="complex"
          class="space-y-4"
        >
          <!-- Custom Icon (Leading) -->
          <template #leading="{ item, open }">
            <div 
              class="flex items-center justify-center w-12 h-12 rounded-xl transition-colors shrink-0"
              :class="open ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 group-hover:bg-brand-50 group-hover:text-brand-500'"
            >
              <UIcon :name="item.icon" class="w-7 h-7" />
            </div>
          </template>

          <!-- Custom Label (Default) -->
          <template #default="{ item, open }">
            <span 
              class="text-xl md:text-2xl font-semibold transition-colors"
              :class="open ? 'text-brand-800 dark:text-brand-300' : 'text-gray-900 dark:text-white'"
            >
              {{ item.label }}
            </span>
          </template>
          <!-- Content of the accordion (Sub-services list) -->
          <template #content="{ item }">
            <div class="space-y-4 pt-2">
              <div 
                v-for="(subItem, idx) in item.services" 
                :key="idx" 
                class="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col lg:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                <div class="lg:w-3/4">
                  <h4 class="font-bold text-xl text-gray-900 dark:text-white mb-3">{{ subItem.name }}</h4>
                  <p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{{ subItem.description }}</p>
                </div>
                <div class="lg:w-1/4 flex flex-col items-start lg:items-end gap-3 mt-2 lg:mt-0 shrink-0">
                  <span class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-brand-50 text-brand-700 font-bold border border-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800/50 text-center w-full lg:w-auto min-w-[140px] whitespace-nowrap">
                    {{ subItem.price }}
                  </span>
                  <UButton
                    color="primary"
                    variant="solid"
                    class="w-full lg:w-auto justify-center rounded-xl font-semibold px-4 py-2 bg-brand-600 hover:bg-brand-700 mt-auto"
                    @click="handleOrder(subItem.name)"
                  >
                    Замовити
                  </UButton>
                </div>
              </div>
            </div>
          </template>
        </UAccordion>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ServiceItem {
  name?: string;
  price?: string;
  description?: string;
}

interface Category {
  id?: string;
  title?: string;
  icon?: string;
  items?: ServiceItem[];
}

const props = defineProps<{
  data?: {
    title?: string;
    description?: string;
    categories?: Category[];
  }
}>()

const selectedService = useSelectedService()

const handleOrder = (serviceName?: string) => {
  if (serviceName) selectedService.value = serviceName
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

// For UAccordion
const accordionItems = computed(() => {
  if (!props.data?.categories) return []
  return props.data.categories.map(cat => ({
    label: cat.title,
    icon: cat.icon,
    value: cat.id,
    services: cat.items
  }))
})
</script>
