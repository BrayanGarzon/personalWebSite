<script>
import axios from 'axios';

export default{
    data(){
        return{
            fields: [
                {key: 'title', label: 'Titulo'},
                {key: 'description', label: 'Descrición'},
                {key: 'action', label: 'Accaión'}
            ],
            publicaciones: []
        }
    },
    methods: {
        getPublicacion (){
            const path = 'http://localhost:8000/myApp/v1.0/Publicacion/'
            axios.get(path).then((response)=>{
                this.publicaciones = response.data  
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    created(){
        this.getPublicacion()
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
                <img :src="publicacion.imagen" alt="Imagen de la tarjeta">
                <div class="card-header">
                    <h2>{{ publicacion.titulo }}</h2>
                </div>
                <div class="card-content">
                    <p>{{ publicacion.descripcion }}</p>
                </div>
                <div class="date">
                    

                    <p>{{ publicacion.fechaPublicacn }}</p>
                    <p>{{ publicacion.categoria_nombre }}</p>
                    <p>{{ publicacion.framework_nombre }}</p>
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
        font-size: 40px;
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
    }


    .containerCards{
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Crea 3 columnas de igual tamaño */
        gap: 20px; /* Espacio entre las tarjetas */
        width: 100%;
        
    }


    
/* Estilo base para la tarjeta */
.card {
      width: 400px;
      background-color: #ffffff;
      border: 1px solid #e1e1e1;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      margin: 20px;
      font-family: Arial, sans-serif;
    }

    /* Estilo para la imagen de la tarjeta */
    .card img {
      width: 100%;
      height: auto;
    }

    /* Estilo para el encabezado de la tarjeta */
    .card-header {
      padding: 20px;
      text-align: center;
      background-color: #f1f1f1;
      color: #333;
    }

    /* Estilo para el contenido de la tarjeta */
    .card-content {
      padding: 20px;
    }

</style>