<script setup lang="ts">
import { ref } from 'vue'

interface Review {
  name: string
  role: string
  company: string
  avatar: string
  instagram?: string
  description: string
  text: string
}

const isOpen = ref(false)
const selectedReview = ref<Review | null>(null)

function openReview(review: Review) {
  selectedReview.value = review
  isOpen.value = true
}

const reviews: Review[] = [
  {
    name: 'Тетяна',
    role: 'Керуюча',
    company: 'Avangarden Gallery. food&wine, м.Київ',
    avatar: '/Avangarden.webp',
    instagram: 'https://www.instagram.com/avangarden_kyiv/',
    description: 'Заклад поєднує візуальне мистецтво та гастрокультуру, створюючи простір, де можна насолоджуватися як виставками, так і стравами чи вином.',
    text: `Хочу подякувати команді бухгалтерського супроводу, а саме Івану, Аллі та Дарині, за високий рівень професіоналізму та якість роботи.
Найцінніше для нас - це швидкість. HoReCa працює в дуже динамічному ритмі, де важливі рішення часто потрібно приймати негайно. Команда завжди на зв’язку та оперативно реагує на будь-які запити, незалежно від часу.
Окремо хочу відзначити проактивний підхід. З початком співпраці ми отримали не просто бухгалтерський супровід, а справжню експертну підтримку. Команда самостійно звертає увагу на важливі моменти, пропонує рішення та часто випереджає мої запити як керівника проєкту.
Також дуже ціную відповідальність у дотриманні дедлайнів. Попри всі виклики, в яких сьогодні працює український бізнес, домовленості виконуються, а процеси залишаються передбачуваними.
І найголовніше - людський фактор. Іван, Алла та Дарина - професійні, відкриті й дуже комфортні у комунікації люди, з якими будь-які питання вирішуються швидко та конструктивно.
Avangarden - нестандартний проєкт, що поєднує галерею сучасного мистецтва та ресторан, тому наша система обліку також потребує нестандартних підходів. Особливо ціную, що команда не працює за шаблоном, а допомагає знаходити оптимальні рішення, які дійсно відповідають специфіці нашого бізнесу.`
  },
  {
    name: 'Анна',
    role: 'Власниця',
    company: 'Food Scouts Collective, м.Київ',
    avatar: '/FSC_фото.webp',
    instagram: 'https://www.instagram.com/foodscouts.kyiv?igsh=b3diNzhtam1qZ2R4',
    description: 'Проєкт про гостинність. Їжа для закладів і додому, студія на Подолі для подій, кейтеринг.',
    text: `Співпраця з командою HoReCa Da - це завжди повна довіра. Довіра до команди, до їхньої залученості в наш проект і до результатів, які ми отримуємо.
Дуже відповідальна і приємна комунікація, сервіс, підхід до справи. Відчувається залученість і дбайливість у кожному звіті аналітики - це дає нам можливість чітко й вірно все аналізувати. Ми разом розбирали помилки попередньої команди і виправляли їх, і відчувається, що команда робить усе, щоб у нас завжди була правильна аналітика та звітність, і щоб ми могли розвивати наш проект.
Дякуємо за чудову роботу!`
  },
  {
    name: 'Каріна',
    role: 'Власниця',
    company: 'Obiwan, м.Христінівка',
    avatar: '/Obiwan_фото.webp',
    instagram: 'https://www.instagram.com/obiwan.cafe/',
    description: 'Меню, як і вся концепція “Obiwan”, народжене з любов’ю до смачної іжі, якісної кави, а також дружніх посиденьок з друзями та рідними. Нехай прибуде з вами сила❤️',
    text: `Дуже задоволена співпрацею! Команда завжди на зв’язку, навіть в дуже пізній час. Швидко реагує на будь-які питання та допомагає знайти рішення. Усі звіти виконуються вчасно, що дуже радує:) Працювати з вами легко, комфортно і приємно.`
  },
  {
    name: 'Олена',
    role: 'Керуюча',
    company: 'Кицуня, м.Київ',
    avatar: '/Кицуня_фото.webp',
    instagram: 'https://www.instagram.com/kitsunyakyiv?igsh=MXZ5dDB1Z3BqdDY1NQ==',
    description: 'Азійське бістро на кожен день. Сет складається із 7-ми страв, які знайомлять гостя з азійською кухнею.',
    text: `Найголовніше для мене у співпраці з Horeca Da — це оперативність, легка комунікація та залізобетонна уважність до деталей. Я завжди знаю, що команда на зв'язку, а всі фінансові питання вирішуються вчасно. Навіть якщо виникають якісь зміни, планові відпустки чи форс-мажори — мене завжди завчасно попередять. Немає жодного відчуття, що справи "зависають" або про нас забули.
Якщо виділити 3 головні переваги роботи, це: оперативність, легка та приємна комунікація, уважність до деталей.`
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-white dark:bg-gray-900/50">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Відгуки наших клієнтів</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Гордимося співпрацею з крутими проєктами та їхніми результатами.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard v-for="(review, index) in reviews" :key="index" class="h-full flex flex-col">
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
      </div>
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
