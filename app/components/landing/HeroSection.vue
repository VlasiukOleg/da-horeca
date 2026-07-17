<template>
  <section class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
    <UContainer>
      <div class="max-w-3xl mx-auto text-center">
        <!-- Logo Image container -->
        <div class="flex justify-center mb-2">
          <img src="/logo.png" alt="Horeca Da" class="h-20 md:h-28 lg:h-32 object-contain" />
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
          це сучасна ресторанна бухгалтерія <br class="hidden md:block" /> 
          <span class="text-emerald-500">"без краваток"</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          Будуємо управлінський облік, який підлаштовується під ваш бізнес, щоб ви могли сфокусуватися на гостях, смаку та розвитку закладу.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton size="xl" color="primary" variant="solid">
            Отримати консультацію
          </UButton>
          <UButton size="xl" color="gray" variant="ghost">
            Наші послуги
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
// Props/logic will go here if needed. Currently static content.
</script>
