<template>
  <div>
    <ImageImport v-if="!imageLoaded" />
    <ImageEditor v-else />
  </div>
</template>

<script setup>
const { imageLoaded } = useCanvasImage();
</script>
