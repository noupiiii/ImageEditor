<template>
    <div class="mt-5">
        <canvas class="rounded-sm w-full" ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useCanvasImage } from '~/composables/useCanvasImage';
  
  const { canvas, drawImage, debug, removeImage } = useCanvasImage();
  
  onMounted(() => {
    drawImage();
  });
  </script>
  