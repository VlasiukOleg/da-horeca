<script setup lang="ts">
import { object, string, array } from "yup";
import type { InferType } from "yup";
import type { FormSubmitEvent } from "@nuxt/ui";

// Дані для контактних карток
const contactInfo = [
  {
    icon: "i-ph-phone",
    text: "(098) 914-79-04",
    label: "Телефон",
    href: "tel:+380989147904",
  },
  {
    icon: "i-ph-instagram-logo",
    text: "rimmagroomer",
    label: "Instagram",
    href: "https://www.instagram.com/rimmagroomer?igsh=MWV3dWUyaDVmeWdhcw==",
  },
  {
    icon: "i-ph-map-pin",
    text: "Тютюнника, 56",
    label: "Адреса",
    href: "https://www.google.com/maps/search/?api=1&query=вулиця+Василя+Тютюнника,+56,+Київ",
  },
];

// Назви послуг для CheckboxGroup
const servicesOptions = [
  "Купання і вичісування",
  "Вичісування",
  "Візит знайомство",
  "Манікюр",
];

const schema = object({
  name: string().required("Будь ласка, вкажіть ваше ім'я"),
  phone: string()
    .matches(/^(?:\+?38)?0\d{9}$/, "Формат: 0981234567")
    .required("Телефон обов'язковий"),
  services: array().min(1, "Оберіть хоча б одну послугу").required(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
  phone: undefined,
  services: [], // Порожній масив для CheckboxGroup
  message: undefined,
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log("Ви обрали:", event.data.services);
  toast.add({
    title: "Повідомлення надіслано!",
    description: "Ми зв’яжемося з вами найближчим часом.",
    color: "primary",
  });
}
</script>

<template>
  <section id="contacts" class="py-16 md:py-24 bg-white dark:bg-gray-950">
    <UContainer>
      <div class="max-w-4xl mx-auto text-center mb-8 md:mb-12 space-y-2" data-aos="fade-up">
        <h2
          class="text-3xl md:text-5xl font-bold text-[#4a4a4a] dark:text-gray-100"
        >
          Зв'яжіться з Нами
        </h2>
        <p class="text-lg md:text-xl text-[#7a7a7a] dark:text-gray-400">
          Готові побалувати свого котика? Ми будемо раді бачити Вас.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-3 gap-1 sm:gap-4 md:gap-8 mb-10 md:mb-16">
          <a
            v-for="(item, index) in contactInfo"
            :key="index"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="flip-up"
            :data-aos-delay="index * 150"
            class="group text-center space-y-2 p-1 md:p-6 rounded-2xl transition-all duration-300 hover:bg-[#f8f6f4] dark:hover:bg-gray-900"
          >
            <div
              class="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-[#f8f6f4] dark:bg-gray-800 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#e8d7c8] transition-all duration-300 shadow-sm"
            >
              <UIcon
                :name="item.icon"
                class="w-5 h-5 md:w-8 md:h-8 text-[#8b6f5c] dark:text-cameo-300"
              />
            </div>
            <div class="overflow-hidden px-1">
              <p
                class="text-xs uppercase tracking-tighter md:tracking-[0.2em] text-[#aaa] mb-0.5 font-semibold"
              >
                {{ item.label }}
              </p>
              <p
                class="text-xs md:text-base font-bold text-[#4a4a4a] dark:text-gray-200 truncate group-hover:text-[#8b6f5c]"
              >
                {{ item.text }}
              </p>
            </div>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="bg-[#f8f6f4] dark:bg-gray-900 rounded-[2.5rem] p-6 md:p-12 border border-[#f0edea] dark:border-gray-800 shadow-sm"
        >
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-6"
            @submit="onSubmit"
          >
            <div class="grid md:grid-cols-2 gap-6">
              <UFormField label="Ваше Ім'я" name="name" size="xl">
                <UInput
                  v-model="state.name"
                  placeholder="Ваше ім'я?"
                  class="w-full"
                  variant="outline"
                />
              </UFormField>

              <UFormField label="Номер телефону" name="phone" size="xl">
                <UInput
                  v-model="state.phone"
                  placeholder="0981234567"
                  type="tel"
                  class="w-full"
                  variant="outline"
                />
              </UFormField>
            </div>

            <UFormField label="Оберіть послуги (обов'язково)" name="services">
              <UCheckboxGroup
                v-model="state.services"
                :items="servicesOptions"
                variant="card"
              />
            </UFormField>

            <UButton
              type="submit"
              label="Записатись на візит"
              size="xl"
              block
              class="rounded-full py-4 text-lg font-bold bg-cameo-400 hover:bg-[#3866bd] text-white shadow-md transition-all"
            />
          </UForm>
        </div>
      </div>
    </UContainer>
  </section>
</template>
