<template>
  <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/50">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Чому саме ми?</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Наш підхід відрізняється від класичних бухгалтерських компаній. Ми розуміємо специфіку ресторанного бізнесу зсередини.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard v-for="(feature, index) in features" :key="index" class="h-full hover:shadow-lg transition-shadow duration-300">
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

<script setup>
const features = [
  {
    icon: 'i-heroicons-light-bulb',
    title: 'Практики',
    description: 'Ми самі пройшли шлях власників та керуючих закладів. Знаємо про касові розриви та списання не з підручників.'
  },
  {
    icon: 'i-heroicons-arrow-path',
    title: 'Еволюція, а не революція',
    description: 'Не ламаємо бізнес під жорсткі шаблони. Ми поступово налаштовуємо процеси, починаючи працювати у вашому ритмі.'
  },
  {
    icon: 'i-heroicons-hand-raised',
    title: 'Гнучкість та партнерство',
    description: 'Пропонуємо готові рішення оптимізації та завжди розмовляємо з вами однією мовою, без складної термінології.'
  }
]
</script>
