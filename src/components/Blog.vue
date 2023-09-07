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

    <section><h1>SECTION BLOG</h1></section>
    <ul>
      <li v-for="publicacion in publicaciones" :key="publicacion.id" style="color: white;">
        <h2>{{ publicacion.titulo }}</h2>
        <p>{{ publicacion.descripcion }}</p>
        <p>{{ publicacion.fechaPublicacn }}</p>
        <p>{{ publicacion.categoria_nombre }}</p>
        <p>{{ publicacion.framework_nombre }}</p>
      </li>
    </ul>

</template>



<style scoped>

    section{
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>