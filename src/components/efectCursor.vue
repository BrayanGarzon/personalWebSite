<template>
  <div class="cursor-container">
    <div
      class="cursor-circle"
      :class="{ 'hovered': isHovered }"
      ref="circle"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const circle = ref(null);
const isHovered = ref(false);

onMounted(() => {
  document.addEventListener('mousemove', updateCursorPosition);
});

const updateCursorPosition = (event) => {
  if (circle.value) {
    circle.value.style.left = `${event.clientX}px`;
    circle.value.style.top = `${event.clientY}px`;
  }
};

const toggleHover = (hover) => {
  isHovered.value = hover;
};
</script>

<style scoped>
.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.cursor-circle {
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.3s, width 0.3s, height 0.3s;
}

/* Desactivar el efecto del cursor para pantallas pequeñas */
@media screen and (max-width: 600px) {
  .cursor-circle {
    display: none; /* Oculta el círculo del cursor */
  }
  
  .cursor-container {
    pointer-events: none; /* Deshabilita la interacción con el cursor */
  }
}
</style>

  
  
  