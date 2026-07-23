<template>
  <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/20">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Наші партнери та екосистема</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
          Ми інтегруємо найкращі IT-рішення для ресторанного бізнесу, щоб забезпечити безперебійний облік та контроль.
        </p>
        <div class="inline-block bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-4 py-2 rounded-lg font-medium text-sm md:text-base">
          Маємо прямий контакт із їхньою підтримкою та вміємо "подружити" їх між собою.
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-x-8 gap-y-10 max-w-5xl mx-auto pl-3 md:pl-0">
        <div v-for="(partner, index) in partners" :key="index" class="w-full lg:w-[calc(50%-1rem)] relative pl-8 border-l-4 border-brand-200 dark:border-brand-800 hover:border-brand-500 transition-colors duration-300 group py-1">
          <!-- Decorative dot on the line -->
          <div class="absolute -left-[10px] top-1 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-brand-300 dark:border-brand-700 rounded-full group-hover:border-brand-500 group-hover:bg-brand-500 transition-all duration-300"></div>
          
          <div class="flex items-center gap-3 mb-2">
            <UIcon :name="partner.icon" class="w-7 h-7 text-gray-400 group-hover:text-brand-500 transition-colors duration-300" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ partner.name }}</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            {{ partner.description }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const partners = [
  { 
    name: 'Poster', 
    icon: 'i-heroicons-rectangle-group',
    description: 'Операційна база. Ми налаштовуємо каси, меню та складський облік так, щоб ви використовували можливості системи на всі 100%, бачили реальний фудкост, контролювали рух кожного інгредієнта, а також вміли використовувати ШІ.'
  },
  { 
    name: 'Finmap', 
    icon: 'i-heroicons-chart-pie',
    description: 'Ваш фінансовий пульт управління. Ми інтегруємо дані з кас для побудови управлінського обліку, щоб ви бачили чистий P&L, Cash Flow, Баланс та контролювали гроші без хаосу.'
  },
  { 
    name: 'Checkbox', 
    icon: 'i-heroicons-check-badge',
    description: 'Налаштовуємо програмну фіскалізацію (ПРРО) та синхронізуємо її з обліковою системою для безперебійної видачі фіскальних чеків.'
  },
  { 
    name: 'ChoiceQR', 
    icon: 'i-heroicons-qr-code',
    description: 'Ваш інструмент для онлайн-меню, доставки та замовлень до столу. Ми допомагаємо налаштувати правильний облік оплат через Choice, щоб кожна транзакція з онлайну чи залу чітко лягала у ваші фінансові звіти без розбіжностей.'
  },
  { 
    name: 'Expirenza (by mono)', 
    icon: 'i-heroicons-star',
    description: 'Оплата рахунків за QR-кодом та безготівкові чайові. Еквайринг, чайові вашої команди та комісії сервісу будуть прозоро відображені в управлінському обліку, а також все буде надійно інтегровано з вашою POS-системою.'
  }
]
</script>
