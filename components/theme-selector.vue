<template>
  <div @click="toggleTheme">
    <UTooltip text="Changer le thème">
      <UButton square variant="outline">
        <UIcon name="i-heroicons-sun" v-if="isDarkMode" />
        <UIcon name="i-heroicons-moon" v-else />
      </UButton>
    </UTooltip>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  const root = document.documentElement;
  if (isDarkMode.value) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

const initializeTheme = () => {
  isDarkMode.value = document.documentElement.classList.contains('dark');
};

onMounted(() => {
  initializeTheme();
});
</script>
