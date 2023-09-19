<script>
import axios from 'axios';

export default {
  data() {
    return {
      publicaciones: []
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
    getPublicacion() {
      const path = 'http://localhost:8000/myApp/v1.0/Publicacion/';
      axios.get(path)
        .then((response) => {
          // Formatea la fecha antes de asignarla a publicaciones
          this.publicaciones = response.data.map((item) => ({
            ...item,
            fechaPublicacn: this.formatFecha(item.fechaPublicacn)
          }));
           // Ordena las publicaciones por fecha (de la más reciente a la más antigua)
           this.publicaciones.sort((a, b) => {
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
    this.getPublicacion();
  }
}
</script>



<template>

    <section>
        <div class="titulos">
            <h2>Blogs</h2>
            <h3>Mis últimas <strong  style="color: #C70039;"> publicaciones.</strong></h3>
        </div>








        <div class="containerCards">

            <div class="card"  v-for="publicacion in publicaciones" :key="publicacion.id" >
                <div class="imagen">
                    <img :src="publicacion.imagen" alt="Imagen de la tarjeta">
                    <div class="overlay">
                        <p class="fecha">{{ publicacion.fechaPublicacn }}</p>
                        <a v-if="publicacion.url" :href="publicacion.url" target="_blank" class="url">
                          <i class="fas fa-external-link-alt"></i>
                        </a>
                        
                    </div>
                </div>
                
                <div class="card-header">
                    <h4>{{ publicacion.titulo }}</h4>
                </div>

                
                <div class="card-content">
                  <p>{{ publicacion.descripcion }}</p>

                  <div class="contenedor">
                    <div class="iconosFrameworks" v-for="frameworkNombre in publicacion.frameworks_nombre" :key="frameworkNombre">
      
                      
                    <i :class="getIconClasses(frameworkNombre)" :style="{ color: getIconColor(frameworkNombre) }"></i>

                  </div>
                  </div>
                  
                </div>


               
            
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


    .containerCards {
    display: flex;
    flex-wrap: wrap; /* Permite que las tarjetas se envuelvan cuando no haya espacio suficiente */
    justify-content: space-between; /* Distribuye las tarjetas de manera uniforme */
  }


    
/* Estilo base para la tarjeta */
    .card {
        
        height: 420px;
        background-color: #191919;
        border-radius: 10px;
        overflow: hidden;
        margin: 20px;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-self: center;
        width: calc(30% - 20px); /* Para mostrar 3 tarjetas por fila con un espacio de 20px entre ellas */
        margin-bottom: 20px; /* Espacio entre filas de tarjetas */
        
    }



    .card .imagen {
        position: relative;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-width: 100%; /* Limita el ancho máximo del contenedor */
        max-height: 100%; /* Limita la altura máxima del contenedor */
    }
    .card .imagen img {
        object-fit: cover; /* Mantén la relación de aspecto y cubre todo el espacio */
        width: 100%; /* La imagen ocupará el 100% del ancho del contenedor .imagen */
        height: 100%; /* La imagen ocupará el 100% del alto del contenedor .imagen */
 
    }
    .card .imagen .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        color: white;
        width: 100%;
        box-sizing: border-box; /* Evita el desbordamiento del párrafo */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .overlay .url{
      margin: 0;
      padding: 0;
      text-decoration: none;
      color: white;
      margin-right: 10px;
    }
    .card .imagen .overlay .fecha, .categoria{
      background-color: #C70039;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    } 
    .card .imagen .overlay .fecha{
      width: 90px;
      height: 30px;
    }
    .card .imagen .overlay .categoria{
      width: 90px;
      height: 30px;
    }

    /* Estilo para el encabezado de la tarjeta */
    .card-header {
      width: 100%;
      height: 18%;
      text-align: center;
      background-color: #191919;
      color: white;
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
    .card-header h4{
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }


    .card-content {
      
      height: 0; /* Inicialmente, el contenido está oculto */
      overflow: hidden;
      transition: height 0.8s ease-in-out, opacity 0.5s ease-in-out; /* Transición suave y lenta */
      opacity: 0; /* Inicialmente, el contenido está completamente transparente */
      transform: translateY(100%); /* Empuja el contenido hacia arriba al inicio */
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .card-content p{
      margin: 10px;
      text-align: justify;
      font-family: Arial, sans-serif;
    }

    /* Cambia el estilo cuando el cursor pasa por encima de la tarjeta */
    .card:hover .card-content {
      margin-top: -25px;
      height: 100%; /* Ajusta esta altura para mostrar todo el contenido */
      opacity: 1; /* Hace que el contenido sea completamente visible */
      transition: height 0.8s ease-in-out, opacity 0.8s ease-in-out, transform 0.8s ease-in-out; /* Aumenta la duración de la transición para hacerla más lenta y suave */
      transform: translateY(0); /* Establece la transformación solo cuando se coloca el cursor */
    }

    /* Aplica la transformación para empujar la imagen hacia arriba cuando el contenido está oculto */
    .card-content:not(:hover) {
      transition: height 0.8s ease-in-out, opacity 0.8s ease-in-out, transform 0.8s ease-in-out; /* Aumenta la duración de la transición para hacerla más lenta y suave */
      transform: translateY(100%);
    }



    .card-content .contenedor{
      display: flex; 
      flex-direction: row;
    }
    .card-content .iconosFrameworks{
      margin-top: 15px;
      font-size: 30px;
      display: flex;
      flex-direction: row;
      width: auto;
    }
    .card-content .iconosFrameworks i{
      margin: 3px;
      display: flex;
      flex-direction: row;
    }
 


     /* Media Query para pantallas medianas */
  @media (max-width: 1200px) {
    .card {
      width: calc(40% - 30px); /* Para mostrar 2 tarjetas por fila en pantallas medianas */
    }
  }

  /* Media Query para pantallas pequeñas */
  @media (max-width: 768px) {
    .card {
      width: 100%; /* Para mostrar 1 tarjeta por fila en pantallas pequeñas */
    }
    .card-content p{
      font-size: 13px;
      margin: 10px;
      text-align: justify;
      font-family: Arial, sans-serif;
    }
  }
  
</style>