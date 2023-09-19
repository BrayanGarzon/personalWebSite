<script>
import axios from 'axios';

export default {
  data() {
    return {
      proyectos: []
    }
  },
  methods: {
      // Función para asignar clases de iconos según los framework_nombre
    getIconClasses(frameworkNombre) {
      switch (frameworkNombre) {
        case 'Python':
          return 'fab fa-python'; // Clase del icono para Python
        case 'Django':
          return 'fab fa-django'; // Clase del icono para Django
        case 'Vue.js':
          return 'fab fa-vuejs'; // Clase del icono para Vue.js
        case 'CSS':
          return 'fab fa-css3';
        case 'Html':
          return 'fab fa-html5';
        case 'PostgreSQL':
          return 'fas fa-database';
        case 'JavaScript':
          return 'fab fa-js';
        // Agrega más casos según sea necesario para otros frameworks
        default:
          return 'fas fa-question'; // Clase del icono por defecto o desconocido
      }
    },
    getIconColor(frameworkNombre) {
      switch (frameworkNombre) {
        case 'Python':
          return '#3572A5'; // Color para Python
        case 'Django':
          return '#0C4B33'; // Color para Django
        case 'Vue.js':
          return '#42b883'; // Color para Vue.js
        case 'CSS':
          return '#1572B6'; // Color para CSS
        case 'Html':
          return '#E34F26'; // Color para HTML
        case 'PostgreSQL':
          return '#336791'; // Color para PostgreSQL
        case 'JavaScript':
          return '#F7DF1E'; // Color para JavaScript
        default:
          return '#000'; // Color predeterminado
      }
    },
 
    formatFecha(fecha) {
      
      const date = new Date(fecha);
      const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      const dia = date.getDate();
      const mes = meses[date.getMonth()];
      const año = date.getFullYear().toString().slice(-2);
      return `${dia+1} ${mes}, ${año}`;
    },
    getProyecto() {
      const path = 'http://localhost:8000/myApp/v1.0/Proyectos/';
      axios.get(path)
        .then((response) => {
          // Formatea la fecha antes de asignarla a publicaciones
          this.proyectos = response.data.map((item) => ({
            ...item,
            fechaPublicacn: this.formatFecha(item.fechaPublicacn)
          }));
           // Ordena las publicaciones por fecha (de la más reciente a la más antigua)
           this.proyectos.sort((a, b) => {
            const dateA = new Date(a.fechaPublicacn);
            const dateB = new Date(b.fechaPublicacn);
            return dateB - dateA;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.getProyecto();
  }
}
</script>



<template>

    <section>
        <div class="titulos">
            <h2><strong  style="color: #C70039;"> Mi</strong> Portafolio</h2>
            <h3>Algunas de mis obras</h3>
        </div>

        <div class="contenedor" v-for="proyecto in proyectos" :key="proyecto.id">
            <div class="portfolio-imagen">
                <img :src="proyecto.imagen" alt="Imagen de la tarjeta">
            </div>

            <div class="portfolio-text">
                <h1 style="color: rgb(112, 9, 9);">{{ proyecto.titulo }}</h1>
                <p style="color: #C70039;  text-align: justify;">{{ proyecto.descripcion }}</p>
            </div>

        </div>
       
        
    </section>

</template>



<style scoped>

section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .titulos{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 20px;
    }
    .titulos h2{
        color: white;
        font-size: 50px;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        
    }
    .titulos h3{
        color: white;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        margin-top: 5px;
    }

    .contenedor{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
        padding-bottom: 40px;
    }
    .contenedor .portfolio-imagen{
        width: 40%;
        max-height: 450px;
        background-color: aqua;
        overflow: hidden;
        max-width: 100%; /* Limita el ancho máximo del contenedor */
        max-height: 100%; /* Limita la altura máxima del contenedor */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor .portfolio-imagen img{
        
        object-fit: cover; /* Mantén la relación de aspecto y cubre todo el espacio */
        width: 100%; /* La imagen ocupará el 100% del ancho del contenedor .imagen */
        height: 100%; /* La imagen ocupará el 100% del alto del contenedor .imagen */
 
   
    }
    .contenedor .portfolio-text{
        width: 40%;
        padding-left: 1%;
        margin: 1%;
        margin-left: -40px;
        margin-top: 160px;
        z-index: 3;
        opacity: 1;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }
    
    .contenedor .portfolio-text p{
        margin: 10px;
    }
</style>