<template>
  <section id="contact" class="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-gray-950">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-50/50 dark:bg-brand-900/10 blur-3xl"></div>
      <div class="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-100/30 dark:bg-brand-800/10 blur-3xl"></div>
    </div>

    <UContainer class="relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Готові навести лад у фінансах?
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Залиште заявку, і ми зв'яжемося з вами для обговорення деталей вашого проєкту та підбору оптимального формату співпраці.
          </p>
        </div>

        <div class="bg-gradient-to-br from-brand-200 to-brand-100 dark:from-brand-900/40 dark:to-brand-800/20 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-brand-200/40 dark:shadow-black/20 relative overflow-hidden border border-brand-300/30 dark:border-brand-700/30">
          <!-- Decorative elements -->
          <div class="absolute -top-10 -right-10 w-64 h-64 bg-brand-300/30 dark:bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-400/20 dark:bg-brand-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <UForm
            :schema="schema"
            :state="state"
            class="relative z-10 space-y-6 md:space-y-8"
            @submit="onSubmit"
          >
            <div class="grid md:grid-cols-2 gap-6 md:gap-8">
              <!-- Name -->
              <UFormField label="Ваше ім'я" name="name">
                <UInput
                  v-model="state.name"
                  placeholder="Як до вас звертатися?"
                  size="xl"
                  class="w-full"
                  :ui="{ base: 'transition-colors focus:ring-brand-500' }"
                />
              </UFormField>

              <!-- Phone -->
              <UFormField label="Номер телефону" name="phone">
                <UInput
                  v-model="state.phone"
                  placeholder="+380 (XX) XXX-XX-XX"
                  type="tel"
                  size="xl"
                  class="w-full"
                  v-maska="'+380 (##) ###-##-##'"
                >
                  <template #leading>
                    <UIcon name="i-heroicons-phone" class="w-5 h-5 text-gray-400" />
                  </template>
                </UInput>
              </UFormField>
            </div>

            <!-- Service -->
            <UFormField label="Яка послуга вас цікавить?" name="service">
              <USelectMenu
                v-model="state.service"
                :items="servicesOptions"
                placeholder="Оберіть послугу"
                size="xl"
                class="w-full"
              />
            </UFormField>

            <!-- Company -->
            <UFormField label="Формат або назва закладу (опціонально)" name="company">
              <UInput
                v-model="state.company"
                placeholder="Наприклад: кав'ярня, бар, ресторан або назва проєкту"
                size="xl"
                class="w-full"
              >
                <template #leading>
                  <UIcon name="i-heroicons-building-storefront" class="w-5 h-5 text-gray-400" />
                </template>
              </UInput>
            </UFormField>

            <!-- Submit -->
            <div class="pt-4 text-center">
              <UButton
                type="submit"
                size="lg"
                color="primary"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                class="px-8 py-4 md:px-10 md:py-3 rounded-xl text-lg md:text-base font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto md:min-w-[240px] justify-center"
              >
                Залишити заявку
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 ml-2" />
                </template>
              </UButton>
              <p class="text-xs text-gray-400 mt-4">
                Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.
              </p>
            </div>
          </UForm>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'
import { reactive, computed, watch, ref } from 'vue'
import { object, string } from 'yup'
import type { InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'

import { categories } from '~/utils/services'

const servicesOptions = computed(() => {
  return categories.flatMap(cat => cat.items.map(item => item.name))
})

const schema = object({
  name: string().required("Будь ласка, вкажіть ваше ім'я"),
  phone: string()
    .matches(/^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/, "Введіть номер у форматі +380 (XX) XXX-XX-XX")
    .required("Номер телефону обов'язковий"),
  service: string().required("Будь ласка, оберіть послугу"),
  company: string().optional()
})

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined as string | undefined,
  phone: '',
  service: undefined as string | undefined,
  company: undefined as string | undefined
})

const toast = useToast()
const selectedService = useSelectedService()
const isSubmitting = ref(false)

watch(selectedService, (newVal) => {
  if (newVal) {
    state.service = newVal
  }
}, { immediate: true })

// Події маски обробляються автоматично через директиву v-maska

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true
  
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: event.data
    })
    
    toast.add({
      title: "Заявка успішно відправлена!",
      description: "Наш менеджер зв'яжеться з вами найближчим часом.",
      color: "primary",
      icon: "i-heroicons-check-circle"
    })
    
    // Очищення форми
    state.name = undefined
    state.phone = ''
    state.service = undefined
    state.company = undefined
    selectedService.value = undefined
  } catch (error) {
    toast.add({
      title: "Помилка відправки",
      description: "Сталася помилка при відправці заявки. Будь ласка, спробуйте ще раз або зателефонуйте нам.",
      color: "error",
      icon: "i-heroicons-exclamation-circle"
    })
    console.error("Error submitting form:", error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
