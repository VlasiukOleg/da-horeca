<template>
  <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/50">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Відгуки наших клієнтів</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          З ким ми працюємо: кав'ярні, бари, ресторани та мережі закладів харчування.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard v-for="(review, index) in reviews" :key="index" class="h-full">
          <div class="flex items-center gap-3 mb-4">
            <UAvatar :src="review.avatar" :alt="review.name" size="md" />
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white text-sm">{{ review.name }}</h4>
              <p class="text-xs text-gray-500">{{ review.role }}, {{ review.company }}</p>
            </div>
          </div>
          <div class="flex gap-1 mb-3 text-yellow-400">
            <UIcon name="i-heroicons-star-solid" class="w-4 h-4" v-for="i in 5" :key="i" />
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 italic">"{{ review.text }}"</p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Олександр М.',
    role: 'Власник',
    company: 'Мережа кав\'ярень',
    avatar: 'https://i.pravatar.cc/150?u=1',
    text: 'Нарешті я бачу реальні цифри свого бізнесу, а не просто таблички, які нічого не значать. Horeca Da допомогли вивести облік на новий рівень.'
  },
  {
    name: 'Ірина В.',
    role: 'Керуюча',
    company: 'Ресторан локальної кухні',
    avatar: 'https://i.pravatar.cc/150?u=2',
    text: 'Дуже задоволена швидкістю впровадження. Хлопці говорять зрозумілою мовою і не вантажать зайвими термінами. Касових розривів стало значно менше.'
  },
  {
    name: 'Дмитро К.',
    role: 'Співвласник',
    company: 'Крафтовий бар',
    avatar: 'https://i.pravatar.cc/150?u=3',
    text: 'Аудит показав дірки, через які ми втрачали до 15% прибутку щомісяця. Зараз все під контролем.'
  },
  {
    name: 'Олена С.',
    role: 'Власниця',
    company: 'Пекарня',
    avatar: 'https://i.pravatar.cc/150?u=4',
    text: 'Завдяки ком\'юніті Horeca Da ми знайшли крутих постачальників зі знижками, які повністю окупають вартість фінансового супроводу!'
  }
]
</script>
