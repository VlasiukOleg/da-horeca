<template>
  <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/20">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Наші партнери та екосистема</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
          Ми інтегруємо найкращі IT-рішення для ресторанного бізнесу, щоб забезпечити безперебійний облік та контроль.
        </p>
        <div class="inline-flex items-center gap-3 bg-white dark:bg-gray-800 border border-brand-200 dark:border-brand-800 shadow-md shadow-brand-500/10 dark:shadow-brand-500/5 px-6 py-3 rounded-2xl font-medium text-sm md:text-base text-gray-800 dark:text-gray-200 transition-transform hover:scale-105 duration-300">
          <div class="bg-brand-100 dark:bg-brand-900/50 p-2 rounded-full shrink-0 flex items-center justify-center">
            <UIcon name="i-heroicons-sparkles-solid" class="w-5 h-5 text-brand-500" />
          </div>
          <span>Маємо прямий контакт із їхньою підтримкою та вміємо <span class="text-brand-600 dark:text-brand-400 font-bold">"подружити"</span> їх між собою.</span>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        <div v-for="(partner, index) in partners" :key="index" class="w-full lg:w-[calc(50%-0.75rem)] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group">
          <div class="flex items-center gap-4 mb-4">
            <div class="bg-gray-50 dark:bg-gray-900 p-3 rounded-xl group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 transition-colors duration-300">
              <UIcon :name="partner.icon" class="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-brand-500 transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">{{ partner.name }}</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
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
