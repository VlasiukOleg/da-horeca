<template>
  <section class="py-16 md:py-24">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Послуги та вартість</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Прозоре ціноутворення без прихованих платежів. Обирайте формат співпраці, який підходить саме вашому закладу.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard v-for="(service, index) in services" :key="index" class="flex flex-col h-full hover:border-primary/50 transition-colors duration-300">
          <template #header>
            <div class="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 text-gray-700 dark:text-gray-300">
              <UIcon :name="service.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 min-h-[3.5rem]">{{ service.title }}</h3>
          </template>
          
          <div class="flex-grow">
            <p class="text-3xl font-black text-gray-900 dark:text-white mb-2">
              <span class="text-sm font-medium text-gray-500 mr-1">від</span>
              {{ service.price }}
            </p>
            <p class="text-sm text-gray-500 mb-6">{{ service.period }}</p>
          </div>

          <template #footer>
            <UButton block :color="service.highlight ? 'primary' : 'gray'" :variant="service.highlight ? 'solid' : 'soft'">
              Замовити
            </UButton>
          </template>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'i-heroicons-briefcase',
    title: 'Комплексний фінансовий супровід',
    price: '25 000 ₴',
    period: 'на місяць',
    highlight: true
  },
  {
    icon: 'i-heroicons-magnifying-glass-circle',
    title: 'Аудит та ревізія процесів',
    price: '8 000 ₴',
    period: 'за проєкт',
    highlight: true
  },
  {
    icon: 'i-heroicons-computer-desktop',
    title: 'Автоматизація та впровадження POS-систем',
    price: '5 000 ₴',
    period: 'за проєкт',
    highlight: true
  },
  {
    icon: 'i-heroicons-chat-bubble-left-right',
    title: 'Консультації',
    price: '5 000 ₴',
    period: 'за 1.5 години',
    highlight: true
  }
]
</script>
