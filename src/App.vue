<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

// Importa los componentes
import EffectCursor from './components/efectCursor.vue';

// Importa las vistas
import navbar from './components/navBar.vue'
import BannerView from './views/BannerView.vue'

// Obtener la ruta actual
const route = useRoute();

// Definir una función para verificar si estás en la página de inicio
const isHomeRoute = () => route.name === 'home';
</script>

<template>
  <div>
    <!-- Efecto del cursor -->
    <div class="effect-cursor-container">
      <EffectCursor />
    </div>

    <!-- Barra de navegación -->
    <navbar />

    <!-- Mostrar RouterView (contenido de las rutas) -->
    <RouterView />

    <!-- Mostrar BannerView solo si no estás en la página de inicio -->
    <BannerView v-if="!isHomeRoute()" />
  </div>
</template>

<style scoped>
/* Estilos para el efecto del cursor */
.effect-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
}


</style>
