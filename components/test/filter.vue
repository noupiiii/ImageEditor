<template>
    <div>
      <ul class="draggable-list">
        <li
          v-for="(item, index) in items"
          :key="item.id"
          :draggable="true"
          class="draggable-item"
          @dragstart="() => onDragStart(index)"
          @dragover.prevent="() => onDragOver(index)"
          @drop.prevent="() => onDrop(index)"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, text: "Item 1" },
          { id: 2, text: "Item 2" },
          { id: 3, text: "Item 3" },
          { id: 4, text: "Item 4" },
        ],
        draggedIndex: null, // L'élément en cours de déplacement
      };
    },
    methods: {
      /**
       * Lorsque l'utilisateur commence à déplacer un élément
       */
      onDragStart(index) {
        this.draggedIndex = index;
      },
      /**
       * Lorsque l'utilisateur survole un élément avec l'élément en cours de déplacement
       */
      onDragOver(index) {
        // Pas besoin d'ajouter de logique ici
      },
      /**
       * Lorsque l'utilisateur dépose l'élément
       */
      onDrop(index) {
        if (this.draggedIndex !== null && this.draggedIndex !== index) {
          // Échange les deux éléments dans le tableau
          const temp = this.items[index];
          this.items[index] = this.items[this.draggedIndex];
          this.items[this.draggedIndex] = temp;
        }
        // Réinitialise l'état
        this.draggedIndex = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .draggable-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .draggable-item {
    padding: 10px;
    margin: 5px 0;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    cursor: grab;
    transition: background-color 0.3s;
  }
  
  .draggable-item:active {
    cursor: grabbing;
    background-color: #e5e7eb;
  }
  </style>
  