
<script>
export default {
  name: 'CustomNavbar',
  data() {
    return {
      isClosing: false, // Variable para controlar el cierre del men
      isMenuOpen: false,
      menuItems: [
        { id: 1, text: 'HOME', link: '/', showOverlay: false },
        { id: 2, text: 'ABOUT', link: '/About', showOverlay: false },
        { id: 3, text: 'BLOG', link: '/Blog', showOverlay: false },
        { id: 4, text: 'PORTFOLIO',link: '/Portfolio', showOverlay: false },
        { id: 5, text: 'CONTACT',link: '/Contact', showOverlay: false },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    //cerrar el menu
    closeMenu() {
      this.isMenuOpen = false;
      
      setTimeout(() => {
      
      this.isClosing = false;
    }, 500); // Cambia el valor según sea necesario
    },


     // Nuevo método para activar/desactivar el efecto hover
      toggleHover() {
      this.isHovered = !this.isHovered;
      },
      showOverlay(item) {
      this.isHovered = true;
      this.menuItems.forEach(menuItem => {
        menuItem.showOverlay = false;
      });
      item.showOverlay = true;
    },
    hideOverlay(item) {
      this.isHovered = false;
      item.showOverlay = false;
    },

  }
};
</script>

<template>
  <nav class="custom-navbar">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand" style="text-decoration: none; color: white;">
        <h1>DevDynasty</h1>
      </router-link>
      <button class="navbar-toggle" @click="toggleMenu" style="color: white;">
        <i class="fa fa-bars" style="--fa-primary-color: #ffffff; --fa-secondary-color: #ffffff;"></i>
      </button>
    </div>

    <div class="navbar-overlay" :class="{ 'show': isMenuOpen}" @click="closeMenu"></div>

    <div class="navbar-menu" :class="{ 'show': isMenuOpen, 'smooth-transition': isMenuOpen || isClosing }">
      <div class="menu-header" style="height: 80px;">
        <router-link to="/" class="navbar-brand" style="text-decoration: none; color: white;">
          <h1>DevDynasty</h1>
        </router-link>
        <button class="navbar-toggle" @click="toggleMenu">
          <i id="navbar-toggle-icon" class="fa fa-bars" style="--fa-primary-color: #ffffff; --fa-secondary-color: #ffffff;"></i>
        </button>
      </div>
      <ul class="menu-list">
        <li v-for="item in menuItems" :key="item.id">
          <router-link :to="item.link" @click="closeMenu">
            <a @mouseover="showOverlay(item)" @mouseleave="hideOverlay(item)">{{ item.text }}</a>
          </router-link>
          <div class="overlay" :class="{ active: item.showOverlay }">
            <div v-if="item.showOverlay">{{ item.text }}</div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

  <style scoped>
  .custom-navbar {
    color: white;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    
    position: relative;
    height: 80px;
    background: transparent;
  }
  
  .navbar-header {
    display: flex;
    align-items: center;
    height: 70px;
    width: 95%;
    justify-content: space-between;
  }
  
  .navbar-toggle {
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 30px;
    height: 25px;
    width: 25px;
    padding: 0;
    font-size: 25px;
  }
  
  #navbar-toggle-icon {
    display: block;
    width: 20px;
    height: 10px;
    background-color: white;
    position: relative;
    transition: transform 0.3s ease-in-out;
    font-size: 25px;
  }
  
  #navbar-toggle-icon.active {
    transform: rotate(90deg);
  }
  
  .navbar-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    z-index: 100;
  }
  
  
  .navbar-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000000;
    overflow-y: auto;
    z-index: 101;
    overflow: hidden;
    
    transition: background-color 0.5s ease-in-out; /* Ajusta la duración de la transición */
    
    
  }
  
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 95%;
    margin: auto;
  }
  
  .menu-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    margin: 0;
    position: relative; /* Añadir esta línea */
  }
  
  .menu-list li {
    padding: 10px 20px;
    
  }
  .menu-list li a{
    color: white;
    text-decoration: none;
    font-size: 30px;
    padding: 10px;
    font-weight: bold;
    position: relative;
  }

  
.menu-list li a::before,
.menu-list li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-out; /* Transición suave del ancho */
}

.menu-list li a::before {
  left: 0;
}

.menu-list li a::after {
  right: 0;
}

.menu-list li a:hover::before,
.menu-list li a:hover::after {
  width: 50%; /* Cambia el ancho a la mitad para mostrar la transición */
}




  
  .show {
    height: 100%;
  }


.overlay {
  /* Estilos para la superposición */
  display: none; /* Ocultar inicialmente */
  position: absolute; /* Posición absoluta */
  top: 50%; /* Alinear verticalmente en el medio */
  left: 50%; /* Centrar horizontalmente */
  transform: translate(-50%, -50%); /* Alinear al centro */
  font-family: 'Monoton', cursive;
  color: rgba(255, 255, 255, 0.194);
  padding: 10px 20px; /* Aumentar el tamaño */
  border-radius: 8px; /* Aumentar el radio de la esquina */
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  font-size: 200px; /* Aumentar el tamaño de fuente */
  
  
}

.overlay.active {
  display: block; /* Mostrar cuando está activo */
  opacity: 1;
}



.smooth-transition {
  transition: height 0.5s ease-in-out;
}


@media screen and (max-width: 600px) {
  .navbar-brand h1{
    font-size: 20px;
  }
  .navbar-toggle i{
    margin-right: -30px;
    font-size: 20px;
  }
}
  </style>

  