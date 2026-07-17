<template>
  <section class="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/10">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Послуги та вартість</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Прозоре ціноутворення без прихованих платежів. Обирайте формат співпраці, який підходить саме вашому закладу.

        </p>
      </div>

      <!-- ВАРІАНТ 1: Вкладки (Tabs) - Найбільш компактний -->
      <div class="mb-24">
        <h3 class="text-2xl font-bold text-brand-800 dark:text-brand-300 mb-6 border-b pb-2">Варіант 1: Вкладки (Найкомпактніший)</h3>
        
        <UTabs :items="tabItems" class="w-full">
          <template #content="{ item }">
            <UCard class="mt-4 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div v-for="(subItem, idx) in item.services" :key="idx" class="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                  <div class="flex justify-between items-start gap-4 mb-3">
                    <h4 class="font-bold text-lg text-gray-900 dark:text-white">{{ subItem.name }}</h4>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-300 whitespace-nowrap">
                      {{ subItem.price }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ subItem.description }}</p>
                </div>
              </div>
            </UCard>
          </template>
        </UTabs>
      </div>


      <!-- ВАРІАНТ 2: Акордеон (Accordion) - Зручний для читання з мобільного -->
      <div class="mb-24">
        <h3 class="text-2xl font-bold text-brand-800 dark:text-brand-300 mb-6 border-b pb-2">Варіант 2: Акордеон (Добре для мобільних)</h3>
        
        <UAccordion :items="accordionItems" :multiple="true" class="bg-white dark:bg-gray-900 rounded-xl shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
          <template #content="{ item }">
            <div class="p-4 bg-gray-50/50 dark:bg-gray-800/20">
              <div class="space-y-4">
                <div v-for="(subItem, idx) in item.services" :key="idx" class="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-4">
                  <div class="md:w-2/3">
                    <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">{{ subItem.name }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ subItem.description }}</p>
                  </div>
                  <div class="md:w-1/3 flex md:justify-end items-start mt-2 md:mt-0">
                    <span class="inline-block px-3 py-1 rounded-lg bg-brand-50 text-brand-700 font-semibold border border-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800/50 text-center w-full md:w-auto">
                      {{ subItem.price }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UAccordion>
      </div>


      <!-- ВАРІАНТ 3: Картки (Grid) - Найбільш наочний -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-brand-800 dark:text-brand-300 mb-6 border-b pb-2">Варіант 3: Великі Картки (Наочний)</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UCard v-for="category in categories" :key="category.id" class="flex flex-col h-full hover:border-brand-200 dark:hover:border-brand-800 transition-colors overflow-hidden">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <UIcon :name="category.icon" class="w-6 h-6" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ category.title }}</h3>
              </div>
            </template>
            
            <div class="space-y-6 flex-grow">
              <div v-for="(subItem, idx) in category.items" :key="idx" class="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                <div class="flex justify-between items-start gap-2 mb-2 flex-col sm:flex-row sm:items-center">
                  <h4 class="font-semibold text-gray-800 dark:text-gray-200">{{ subItem.name }}</h4>
                  <span class="text-brand-600 dark:text-brand-400 font-bold whitespace-nowrap">{{ subItem.price }}</span>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ subItem.description }}</p>
              </div>
            </div>
            
            <template #footer>
              <UButton block color="gray" variant="ghost" class="hover:bg-brand-50 dark:hover:bg-brand-900/20 text-brand-600 dark:text-brand-400">
                Обговорити {{ category.title.toLowerCase() }}
              </UButton>
            </template>
          </UCard>
        </div>
      </div>

    </UContainer>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const categories = [
  {
    id: 'complex',
    title: 'Комплексний фінансовий супровід',
    icon: 'i-heroicons-briefcase',
    items: [
      {
        name: 'Щомісячний управлінський облік',
        price: 'від 25 000 грн/міс',
        description: 'Ми закриваємо фінансовий бек-офіс вашого закладу: вносимо фото/скани накладних, проводимо розбір інвентаризацій разом із шефами, розплутуємо переміщення між цехами та контролюємо списання. Наприкінці місяця ви отримуєте звіти P&L, Cash Flow та Баланс.'
      }
    ]
  },
  {
    id: 'audit',
    title: 'Аудит та ревізія процесів',
    icon: 'i-heroicons-magnifying-glass-circle',
    items: [
      {
        name: 'Аудит акаунту Poster',
        price: 'від 8 000 грн',
        description: 'Знайдемо, куди «витікають» гроші та чому як справи з фудкостом. Проводимо повну ревізію вашої бази Poster: перевіряємо правильність техкарток, прив\'язку цехів, налаштування податків, шукаємо «мінусові» залишки та помилки персоналу під час закриття змін. Ви отримуєте детальний письмовий звіт з покроковим планом виправлень + онлайн-розбір із нашим експертом.'
      },
      {
        name: 'Аудит управлінського обліку',
        price: 'від 30 000 грн',
        description: 'Діагностика фінансового здоров’я бізнесу. Якщо виручка є, а в сейфі порожньо, або ви плутаєтеся в передплатах та касових розривах — ми проведемо повний аналіз вашої фінансової системи. Знайдемо приховані збитки, не оптимальні статті витрат і викривлення собівартості.'
      }
    ]
  },
  {
    id: 'automation',
    title: 'Автоматизація та впровадження',
    icon: 'i-heroicons-computer-desktop',
    items: [
      {
        name: 'Poster: Запуск з нуля',
        price: 'від 20 000 грн',
        description: 'Архітектура обліку ще до відкриття дверей. Побудуємо правильну структуру складів (бар, кухня, пекарня), внесемо меню, заведемо точні техкартки та налаштуємо категорії. Ми навчимо вашу команду працювати в системі так, щоб у перший же день роботи не виникло хаосу на касі та в обліку.'
      },
      {
        name: 'Poster: Оптимальний перехід',
        price: 'від 20 000 грн',
        description: 'Безпечно перенесемо вашу базу даних, модифікатори, інгредієнти та фактичні залишки в Poster. Жодних втрачених даних, плутанини в чеках чи зупинки продажів на локації.'
      },
      {
        name: 'Finmap: Налаштування',
        price: 'від 10 000 грн',
        description: 'Ваш фінансовий пульт управління грошовими потоками. Подружимо Poster із Finmap. Ви бачитимете прозорий рух кожної гривні (готівка, еквайринг, розрахункові рахунки), зможете планувати майбутні платежі.'
      },
      {
        name: 'ChoiceQR: Налаштування',
        price: 'від 5 000 грн',
        description: 'Онлайн-меню та доставка, які ідеально лягають у загальний облік. Наповнимо та синхронізуємо Choice з вашою базі в Poster. Налаштуємо логіку так, щоб кожна онлайн-оплата, самовивіз чи замовлення до столу чітко списували інгредієнти зі складу та зводилися у підсумковій звітності.'
      },
      {
        name: 'Expirenza by mono: Налаштування',
        price: 'від 5 000 грн',
        description: 'Безготівкові чайові та QR-оплати без плутанини в касі. Надійно інтегруємо Expirenza у вашу POS-систему. Налаштуємо прозорий облік банківського еквайрингу, комісій сервісу та чайових вашої команди.'
      },
      {
        name: 'Checkbox: Налаштування ПРРО',
        price: '3 000 грн',
        description: 'Програмна фіскалізація без штрафів від податкової. Беззбійне підключення та синхронізація ПРРО Checkbox із Poster для швидкої та легальної видачі фіскальних чеків.'
      },
      {
        name: 'Checkbox: Навчання команди',
        price: '3 500 грн',
        description: 'Захист від «людського фактора» на касі. Проведемо навчання для адміністраторів та касирів і надамо нашу фірмову покрокову інструкцію.'
      },
      {
        name: 'Glovo: Налаштування',
        price: 'від 3 500 грн',
        description: 'Автоматизація доставки без хаосу на касі та розбіжностей на складах. Налаштовуємо пряму інтеграцію Glovo з Poster. Замовлення автоматично потрапляють на термінал продажу.'
      }
    ]
  },
  {
    id: 'consulting',
    title: 'Консультації та експертна підтримка',
    icon: 'i-heroicons-chat-bubble-left-right',
    items: [
      {
        name: 'Онлайн-консультація з управлінського обліку',
        price: '5 000 грн / 1.5 год',
        description: 'Експрес-вирішення точкової проблеми. Інтенсивна робота з ресторатором/керуючим по будь-якому запиту: як розкласти передплати за івенти, як правильно організувати склади чи підготуватися до ревізії.'
      }
    ]
  }
]

// For UTabs
const tabItems = computed(() => {
  return categories.map(cat => ({
    label: cat.title,
    icon: cat.icon,
    services: cat.items
  }))
})

// For UAccordion
const accordionItems = computed(() => {
  return categories.map(cat => ({
    label: cat.title,
    icon: cat.icon,
    defaultOpen: cat.id === 'complex',
    services: cat.items
  }))
})
</script>
