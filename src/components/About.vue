
<script>
export default {
  name: 'DownloadButton',
  // Otros componentes, métodos, etc.
};
</script>


<template>

    <Section>
        <div class="titulos">
            <h1>Sobre <strong  style="color: #C70039;">Mí</strong></h1>
            <h3>Descubre quién <strong  style="color: #C70039;">soy</strong></h3>
        </div>
        

        <div class="infoPersonal">
            <div class="textoIzquierdo">
                <p>Soy <strong style="color: #C70039;">Web Developer </strong> creativo <br>ubicado en Colombia.</p>

                <p class="descripcion">Con experiencia como desarrollador Web, ilustrador y editor videografico. He adquirido las habilidades y conocimientos necesarios para que tus proyecto sea un éxito. Disfruto cada paso mientras trabajo.

                </p>
                
                
                <div class="position">
                    
                    <a href="https://drive.google.com/file/d/1pYCAZkr1fpGuYCULPXIJrdSSWRZeHovL/view?usp=drive_link" class="svg-wrapper" target="_blank" download style="width: 200px;">
                    <svg height="40" width="150">
                        <rect id="shape" height="40" width="150" />
                        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="button-text">
                        <tspan class="spot"></tspan>
                        Descargar CV
                        </text>
                    </svg>
                    </a>
                </div>
                
            </div>
            <div class="imagen">
                <img src="../assets/img/aboutImage.png" alt="" class="image">
            </div>
        </div>


        <div class="services">
            <h1><strong  style="color: #C70039;">Mis </strong>Servicios</h1>

            <div class="tarjetaServicios">
                <div class="servicio">
                    <div class="icono">
                        <img src="../assets/img/coding.png" alt="">
                    </div>
                    <div class="transicion"></div>
                    <h2 class="subtitulo">Diseño Web</h2>
                    <p class="parrafo" >Transformando ideas en experiencias en línea a través del código. Impulsando la innovación con interactividad y funcionalidad.</p>
                </div>
                <div class="servicio">
                    <div class="icono">
                        <img src="../assets/img/insta.png" alt="">
                    </div>
                    <div class="transicion"></div>
                    <h2 class="subtitulo">Desarrollo de Software</h2>
                    <p class="parrafo" >Transformando ideas en soluciones a través del código, impulsando la innovación con resultados tangibles.</p>
                </div>
                <div class="servicio">
                    <div class="icono">
                        <img src="../assets/img/bulb.png" alt="">
                    </div>
                    <div class="transicion"></div>
                    <h2 class="subtitulo">Diseño Grafico</h2>
                    <p class="parrafo" >Transformando conceptos en imágenes impactantes. Mi pasión es visualizar tu visión y convertirla en diseño tangible y cautivador.</p>
                </div>
            </div>
            
        </div>

        <div class="skills">
            <h1 class="h1">Mis<strong  style="color: #C70039;"> Habilidades</strong></h1>

            <div class="iconosHabilidades">
                <div class="iconosContainer">
                    <i class="fa-brands fa-python"></i>
                    <p>Python</p>
                </div>
                <div class="iconosContainer">
                    <img src="../../public/icons/c++.png" alt="">
                    <p>C++</p>
                </div>

                <div class="iconosContainer">
                    <i class="fa-brands fa-vuejs"></i>
                    <p>Vue.js</p>
                </div>
                
                <div class="iconosContainer">
                    <i class="fa-brands fa-html5"></i>
                    <p>Html</p>
                </div>

                <div class="iconosContainer">
                    <i class="fa-brands fa-css3-alt"></i>
                    <p>CSS</p>
                </div>

                <div class="iconosContainer">
                    <i class="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                </div>

                <div class="iconosContainer">
                    <img src="../../public/icons/adobe-photoshop.png" alt="">
                    <p>Photoshop</p>
                </div>

                <div class="iconosContainer">
                    <img src="../../public/icons/ilustrador-adobe.png" alt="">
                    <p>Illustrator</p>
                </div>

                <div class="iconosContainer">
                    <img src="../../public/icons/edicion-de-video.png" alt="">
                    <p>Video - Edit</p>
                </div>
                <div class="iconosContainer">
                    <i class="fa-brands fa-docker"></i>
                    <p>Docker</p>
                </div>
                <div class="iconosContainer">
                    <i class="fa-brands fa-square-github"></i>
                    <p>Git</p>
                </div>
                
            </div>
        </div>

        
    </Section>
    
</template>



<style scoped>

    

    section{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 35px;
        margin-right: 35px;
        flex-direction: column;
    }

    section .titulos{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    section .titulos h1{
        font-size: 65px;
        color: white;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
        margin: 0;
        padding: 0;
        font-weight: lighter;
        
    }
    section .titulos h3{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: white;
        margin: 0;
        padding: 0;
        margin-top: 15px;
    }


    section .infoPersonal{
        margin-top: 60px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 30px;
        
    }
    section .infoPersonal .textoIzquierdo{
        width: 50%;
    }
    section .infoPersonal .textoIzquierdo p{
        font-size: 40px;
        color: white;
        font-family: poppins;
        text-align: justify;
        margin: 0;
        padding: 0;
    }

    section .infoPersonal .textoIzquierdo .descripcion{
        font-size: 18px;
        opacity: .8;
        margin: 0;
        padding: 0;
        margin-top: 35px;
    }


    .position {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .spot {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .svg-wrapper {
        margin-top: 0;
        position: relative;
        width: 150px;
        height: 40px;
        display: inline-block;
        border-radius: 3px;
        margin-left: 5px;
        margin-right: 5px;
    }

    #shape {
        stroke-width: 6px;
        fill: transparent;
        stroke: #C70039;
        stroke-dasharray: 85 400;
        stroke-dashoffset: -220;
        transition: 1s all ease;
    }

    .svg-wrapper:hover #shape {
        stroke-dasharray: 50 0;
        stroke-width: 3px;
        stroke-dashoffset: 0;
        stroke: #C70039;
    }

    .button-text {
        fill: white;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }


    .image{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .imagen .image{
        width: 400px;
        height: 400px;
        padding: 0px;
        border-radius: 10%;
    }
    .services{
        
        width: 100%;
        height: auto;
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        
    }
    .services h1{
        font-size: 50px;
        font-weight: lighter;
        color: white;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
        margin: 0;
        padding: 0;
        margin: 15px;
    }

    .services .tarjetaServicios{
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-between;
        align-items: center;
    }

    .services .tarjetaServicios .servicio{
        height: 400px;
        width: 28%;
        margin: 1.5%;
        background-color: #191919;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center; /** */
        justify-content: center;
        flex-direction: column;
        position: relative; /* Agregar esto al contenedor principal */
    }

    .services .tarjetaServicios .icono{
        background-color: #C70039;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30%;
        margin: 20px;
        padding: 10px;
        z-index: 1; /* Establecer un z-index más alt*/
    }


        
        
    .servicio .transicion {
        position: absolute;
        top: 30%; /* Colocar el div en el centro vertical del div "icono" */
        left: 50%; /* Colocar el div en el centro horizontal del div "icono" */
        transform: translate(-50%, -50%); /* Alinear el div al centro */
        width: 0;
        height: 0;
        background-color: #C70039;
        transition: width 0.8s ease, height 0.8s ease, opacity 0.8s ease; /* Agregar transición para animación */
        z-index: 0;
        opacity: 0;
        border-radius: 30%;
    }

    .servicio:hover .transicion {
        width: 200%; /* Expandir el ancho al 200% (hasta llenar el div "servicio1") */
        height: 200%; /* Expandir la altura al 200% (hasta llenar el div "servicio1") */
        opacity: 1;
    }

    .services .tarjetaServicios .subtitulo{
        padding: 10px;
        margin: 5px;
        font-weight: 200;
        font-size: 32px;
        color: white;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
        z-index: 1;
    }
    .services .tarjetaServicios .parrafo{
        padding: 20px;
        text-align: justify;
        font-weight: 100;
        font-size: 18px;
        opacity: .8;
        color: white;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
    }
    

.skills {
    width: 100%;
    height: auto;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 20px;
}

.skills h1 {
    font-size: 50px;
    font-weight: lighter;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    margin: 15px;
}

.skills .iconosHabilidades {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: flex-start; 
    margin-top: 20px;
    margin-bottom: 20px;
}

.skills .iconosHabilidades .iconosContainer {
    width: calc(20% - 40px); /* Ancho fijo de cada contenedor, 5 en una fila */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px; /* Espaciado entre contenedores */
    flex-direction: column;
}

.skills .iconosHabilidades .iconosContainer i {
    color: white;
    font-size: 100px;
}
.skills .iconosHabilidades .iconosContainer img {
    width: 100px;
}

.skills .iconosHabilidades .iconosContainer p {
    margin: 10px;
    padding: 0;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}



/* Media query for responsiveness */
@media screen and (max-width: 768px) {
  section {
    margin-left: 15px;
    margin-right: 15px;
  }

  section .titulos h1 {
    font-size: 55px;
  }

  section .titulos h3 {
    font-size: 16px;
    text-align: center;
    margin-top: 0;
  }

  section .infoPersonal {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }

  section .infoPersonal .textoIzquierdo {
    width: 100%;
  }

  section .infoPersonal .textoIzquierdo p {
    font-size: 24px;
    text-align: center;
  }

  section .infoPersonal .textoIzquierdo .descripcion {
    font-size: 14px;
  }

  .svg-wrapper {
    width: 120px;
  }

  .imagen .image {
    width: 300px;
    height: 300px;
  }

  .services .tarjetaServicios {
    flex-direction: column;
    gap: 30px;
  }

  .services .tarjetaServicios .servicio {
    width: 100%;
    height: auto;
    margin: 0;
  }

  .services .tarjetaServicios .icono {
    width: 80px;
    height: 80px;
  }

  .services .tarjetaServicios .subtitulo {
    font-size: 28px;
  }

  .services .tarjetaServicios .parrafo {
    font-size: 14px;
  }

  .skills .iconosHabilidades .iconosContainer {
    width: calc(50% - 40px);
    
    margin: 10px;
  }

  .skills .iconosHabilidades .iconosContainer i {
    font-size: 100px;
  }

  .skills .iconosHabilidades .iconosContainer p {
    font-size: 12px;
  }
  .skills .h1{
    font-size: 40px;
    text-align: center;
  }
}

    
</style>