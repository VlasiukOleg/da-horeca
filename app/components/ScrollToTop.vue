<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const router = useRouter();

const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

const scrollToTop = () => {
  if (router.currentRoute.value.hash) {
    // Use router.replace so Vue Router's internal state is updated
    // scrollBehavior in router.options.ts will handle smooth scrolling
    router.replace({ path: '/', hash: '' });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

onMounted(() => {
  const hero = document.getElementById("hero");
  if (hero) {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          // Show button when hero is NOT in view
          isVisible.value = !entry.isIntersecting;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <Transition name="scroll-btn">
    <button
      v-if="isVisible"
      id="scroll-to-top"
      aria-label="Піднятися вгору"
      class="scroll-to-top-btn"
      @click="scrollToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="arrow-icon"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid var(--color-brand-500);
  background: white;
  color: var(--color-brand-500);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(65, 74, 110, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.scroll-to-top-btn:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 6px 20px rgba(65, 74, 110, 0.3), 0 3px 10px rgba(0, 0, 0, 0.15);
  background: var(--color-brand-50);
}

.scroll-to-top-btn:active {
  transform: translateY(-1px) scale(1.02);
}

/* Transition */
.scroll-btn-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.scroll-btn-leave-active {
  transition: all 0.25s ease-in;
}
.scroll-btn-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.6);
}
.scroll-btn-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.8);
}
</style>