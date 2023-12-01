<script>
import axios from 'axios';


export default {
  data() {
    return {
      starredRepos: [],
      customDescriptions: {},
      framework: '',
      sortedRepos: [], //orden de las cards
    };
  
  },
  methods: {
    getIconClasses(frameworkNombre) {
      switch (frameworkNombre) {
        case 'Python':
          return 'fab fa-python';
        case 'Django':
          return 'fab fa-django';
        case 'Vue':
          return 'fab fa-vuejs';
        case 'CSS':
          return 'fab fa-css3';
        case 'Html':
          return 'fab fa-html5';
        case 'PostgreSQL':
          return 'fas fa-database';
        case 'JavaScript':
          return 'fab fa-js';
        case 'GitHub':
          return 'fab fa-github';
        default:
          return 'fas fa-question';
      }
    },
    getIconColor(frameworkNombre) {
      switch (frameworkNombre) {
        case 'Python':
          return '#3572A5'; // Color para Python
        case 'Django':
          return '#0C4B33'; // Color para Django
        case 'Vue':
          return '#42b883'; // Color para Vue.js
        case 'CSS':
          return '#1572B6'; // Color para CSS
        case 'Html':
          return '#E34F26'; // Color para HTML
        case 'PostgreSQL':
          return '#336791'; // Color para PostgreSQL
        case 'JavaScript':
          return '#F7DF1E'; // Color para JavaScript
        case 'GitHub':
          return '#4183C4';
        default:
          return '#000'; // Color predeterminado
      }
    },

    

  },
 

  created() {
  axios.get('https://api.github.com/users/BrayanGarzon/repos')
    .then(response => {
      this.starredRepos = response.data.filter(repo => repo.stargazers_count > 0);

      // Para cada repositorio, obtén el contenido del archivo description.json
      const fetchDescriptionsPromises = this.starredRepos.map(repo => {
        return axios.get(`https://raw.githubusercontent.com/BrayanGarzon/${repo.name}/main/description.json`)
          .then(response => {
            this.customDescriptions[repo.name] = response.data;
            return repo; // Mantén el repositorio para que podamos ordenarlos después
          })
          .catch(error => {
            console.error('Error al obtener description.json de', repo.name, error, 'no have file description.js');
          });
      });

      // Una vez que todas las descripciones se han cargado, realiza la transformación y ordena los repositorios
      Promise.all(fetchDescriptionsPromises)
        .then(reposWithDescriptions => {
          this.sortedRepos = reposWithDescriptions.sort((a, b) => {
            // Transforma las fechas al formato 'DD/MM/AAAA' a objetos Date para comparar
            const dateA = new Date(this.customDescriptions[a.name]?.fecha.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
            const dateB = new Date(this.customDescriptions[b.name]?.fecha.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));

            // Ordena los repositorios por fecha en orden descendente
            return dateB - dateA;
          });
        });
    })
    .catch(error => {
      console.error('Error al obtener repositorios de GitHub', error);
    });
},

};




</script>



<template>

    <section>
        <div class="titulos">
            <h2>Blogs</h2>
            <h3>Mis últimas <strong  style="color: #C70039;"> publicaciones.</strong></h3>
        </div>
        <div class="containerCards">
      
            


            <div class="card" v-for="repo in sortedRepos" :key="repo.id">
              <div class="imagen">
                <!-- Utiliza la propiedad de imagen del repositorio de GitHub si está definida -->
                <img v-if="customDescriptions[repo.name]" :src="customDescriptions[repo.name].image" alt="Imagen de la tarjeta">
                <div class="overlay">
                  <p class="fecha">{{ customDescriptions[repo.name]?.fecha }}</p>

                  <div class="url">
                    <!-- Agrega el enlace a la página del repositorio de GitHub -->
                    <a :href="customDescriptions[repo.name]?.url_repo" target="_blank" >
                      <i v-if="customDescriptions[repo.name]?.url_repo" class="fab fa-github"></i>
                    </a>
                    <a :href="customDescriptions[repo.name]?.url_live" target="_blank" >
                      <i v-if="customDescriptions[repo.name]?.url_live" class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  
                    

                </div>
              </div>

              <div class="card-header">
                <!-- Utiliza el nombre del repositorio como título -->
                <h4>{{ repo.name }}</h4>
              </div>

              <div class="card-content">
                <!-- Utiliza la descripción del repositorio si está definida -->
                <p>{{ customDescriptions[repo.name]?.description }}</p>
                


                <div class="contenedor">
                  <div class="iconosFrameworks" v-if="customDescriptions[repo.name]?.frameworks">
                    
                    <!-- Itera sobre los frameworks si están definidos y aplica las clases e iconos adecuados -->
                    <i
                      v-for="framework in customDescriptions[repo.name]?.frameworks"
                      :key="framework"
                      :class="getIconClasses(framework)"
                      :style="{ color: getIconColor(framework) }"
                    ></i>
                    {{ framework }}
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
        
        height: 480px;
        background-color: #191919;
        border-radius: 10px;
        overflow: hidden;
        margin: 20px;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-self: center;
        width: calc(30% - 5px); /* Para mostrar 3 tarjetas por fila con un espacio de 20px entre ellas */
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
      color: rgb(34, 31, 241);
      margin-right: 10px;
    }
   
    .overlay a{
      margin: 5px;
    }
    .overlay a:hover{
      color: #C70039;
      transition: all 500ms ease;
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