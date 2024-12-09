<template>
    <div>
        <UContainer>
            <h1 class="text-2xl font-semibold">Importer une image pour commencer.</h1>
            <p class="mb-6 text-gray-500">Formats acceptés : </p>
            <input class="border dark:border-gray-500 p-3 rounded-lg" type="file" @change="loadImage" />
        </UContainer>
    </div>
  </template>
  
  <script setup>
  import { useCanvasImage } from '~/composables/useCanvasImage';
  
  const { loadImage } = useCanvasImage();
  </script>
  