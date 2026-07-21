<template>
  <section class="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/10" id="pricing">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Послуги та вартість</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Прозоре ціноутворення без прихованих платежів. Обирайте формат співпраці, який підходить саме вашому закладу.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <UAccordion 
          :items="accordionItems" 
          default-value="complex"
          class="space-y-4"
          :ui="{
            wrapper: 'w-full flex flex-col',
            default: {
              class: 'px-6 py-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 shadow-sm bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all w-full text-left flex items-center gap-4'
            },
            item: {
              padding: 'px-2 pt-2 pb-6'
            }
          }"
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
                <div class="lg:w-1/4 flex lg:justify-end items-start mt-2 lg:mt-0">
                  <span class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-brand-50 text-brand-700 font-bold border border-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800/50 text-center w-full sm:w-auto min-w-[140px] whitespace-nowrap">
                    {{ subItem.price }}
                  </span>
                </div>
              </div>
            </div>
          </template>
        </UAccordion>
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

// For UAccordion
const accordionItems = computed(() => {
  return categories.map(cat => ({
    label: cat.title,
    icon: cat.icon,
    value: cat.id,
    services: cat.items
  }))
})
</script>
