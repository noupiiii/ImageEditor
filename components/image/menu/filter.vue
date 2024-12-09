<template>
  <TestFilter />
    <div>
      <button @click="convertToGrayscale">test</button>
      <UPopover>
        <UButton label="Ajouter un filtre" icon="i-heroicons-plus-circle" variant="outline" block />
        <template #panel>
          <div class="p-4 lg:w-72 md:w-56 min-w-32">
            <div class=" flex gap-2 items-center ">
              <div>
                <h3 class="text-lg font-bold">{{ panelContent.title }}</h3>
                <p class="mt-2 text-sm text-gray-600">{{ panelContent.description }}</p>
              </div>
              <img v-if="panelContent.image" :src="panelContent.image" alt="Image" class="mt-4 h-16 rounded shadow" />
            </div>
            <UButton label="Ajouter" icon="i-heroicons-plus-circle" variant="outline" block />
          </div>
        </template>
      </UPopover>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Contenu dynamique pour le panel
  const panelContent = ref({
    title: "Titre du filtre",
    description: "Ceci est une description qui s'affiche dans le panel.",
    image: "https://via.placeholder.com/150", // Remplacez par l'URL de votre image
  });

  const {convertToGrayscale} = useCanvasImage()
  </script>
  