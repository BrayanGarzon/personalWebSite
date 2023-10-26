<script>
export default {
  data() {
    return {
      mostrarAlerta: false,
      mostrarSegundaAlerta: false,
    };
  },
  methods: {
    enviarFormulario() {
      // Muestra la primera alerta
      this.mostrarAlerta = true;

      // Oculta la primera alerta después de 2 segundos
      setTimeout(() => {
        this.mostrarAlerta = false;
        

        // Muestra la segunda alerta después de que se oculte la primera
        this.mostrarSegundaAlerta = true;

        // Oculta la segunda alerta después de 2 segundos
        setTimeout(() => {
          this.mostrarSegundaAlerta = false;
        }, 2000); // Oculta la segunda alerta después de 2 segundos
      }, 2000); // Oculta la primera alerta después de 2 segundos
    },
  },
};
</script>







<template>

    <section>
        <div class="titulos">
            <h1 class="h1">Ponte en<strong  style="color: #C70039;"> Contacto</strong></h1>
            <h3 class="h3"><strong  style="color: #C70039;">Envía</strong> tus comentarios</h3>
        </div>
        <div class="contenedorFormulario">

            <div class="form">
                <h3 class="h3Form">Envía tu mensaje</h3>
                <form action="#" method="POST">
                    <input id="name" type="text" placeholder="Full Name" name="name">
                    <input id="email" type="email" placeholder="Your Email" name="email">
                    <input id="asunto" type="text" placeholder="Asunt" name="asunto">
                    <textarea id="texto" rows="4" cols="50" placeholder="Your Message"></textarea>
                    
                    <component :is="'button'" class="buttonEnviar" type="submit" @click.prevent="enviarFormulario">Enviar</component>
                </form>
                <!-- Alerta de Bootstrap -->
                <div class="alert alert-danger" role="alert" v-if="mostrarAlerta">
                ¡Formulario temporalmente fuera de servicio!
                </div>
                <!-- Segunda alerta de Bootstrap (oculta inicialmente) -->
                <div class="alert alert-success" role="alert" v-if="mostrarSegundaAlerta">
                Contáctame por medio de mis redes.
                </div>
            </div>
            <div class="mediosContact">
                <div class="iconos">
                    <h3 class="h3">Mayor Información</h3>
                    <div class="nameIcon">
                        <img src="../assets/img/icon-name.png" alt="">
                        <div class="texto">
                            <h6>Nombre</h6>
                            <p>Brayan Garzón</p>
                        </div>
                    </div>
                    <div class="nameIcon">
                        <img src="../assets/img/icon-location.png" alt="">
                        <div class="texto">
                            <h6>Ubicación</h6>
                            <p>Villavicencio - Colombia</p>
                        </div>
                    </div>
                    <div class="nameIcon">
                        <img src="../assets/img/icon-phone.png" alt="">
                        <div class="texto">
                            <h6>Telefono</h6>
                            <p>(+57) 322 947 5876</p>
                        </div>
                    </div>
                    <div class="nameIcon">
                        <img src="../assets/img/icon-email.png" alt="">
                        <div class="texto">
                            <h6>Telefono</h6>
                            <p>Brayan.Garzon.Dev@gmail.com</p>
                        </div>
                    </div>
                    

                    <div class="nameIcon">
                        <div class="iconosRedes">
                            <a href="https://wa.link/e7gthx" target="_blank" style="text-decoration: none; color: #25d366;">
                            <i id="whp" class="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="https://github.com/BrayanGarzon" target="_blank" style="text-decoration: none; color: #F7DF1E;">
                            <i id="gith" class="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.facebook.com/brayan.garzon.33234/" target="_blank" style="text-decoration: none; color: #4183C4;">
                            <i id="fcbk" class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/brayan-garz%C3%B3n-256475209" target="_blank" style="text-decoration: none; color: #1572B6;">
                            <i id="link" class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>




    .mediosContact{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }
    .mediosContact .iconos{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        
    }   
    .mediosContact .iconos .h3{
        color: white;
        text-align: center;
        font-size: 25px;
        z-index: 1;
    }
    .mediosContact .iconos .nameIcon{
        height: auto;
        padding: 10px;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: row;
        align-items: center;
        display: flex;  
    }
    .mediosContact .nameIcon .iconosRedes{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    
    .mediosContact .iconos .nameIcon a i{
         font-size: 30px;
         
    }
    .mediosContact .iconos .nameIcon a i:hover{
         color: white;
    }
    
    .mediosContact .iconos .nameIcon .texto h6,p{
        margin: 0;
        padding: 0;
        color: white;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
        font-weight: bold;
    }
    

    section .contenedorFormulario{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }   
    section .contenedorFormulario .form{
        width: 700px;
        height: 600px;
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    section .contenedorFormulario .mediosContact{
        width: 40%;
        height: 600px;
        background: url(../assets/img/contact-back.jpg);
        margin: 30px;
        border-radius: 30px;
        background-position: center;
        background-size: cover;
        border-radius: 16px;
        margin-bottom: 50px;
        position: relative;
        overflow: hidden;
        
    }
    .contenedorFormulario .mediosContact::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #101010; /* Color gris con opacidad */
        opacity: .7;
        z-index: 1; /* Asegura que el pseudo-elemento esté encima de la imagen */
    }
    section .contenedorFormulario .form h3{
        color: white;
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
        font-size: 25px;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
    }

    section{
        display: flex;
        justify-content: center;
        align-items: center;
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
        font-size: 45px;
        color: white;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
        margin: 0;
        padding: 0;
        font-weight: normal;
        
    }
    section .titulos h3{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: white;
        margin: 0;
        padding: 0;
        margin-top: 15px;
    }

    form{
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
    }
    form input, textarea{
        max-width: 90%;
        width: 90%;
        padding: 10px 20px;
        margin: 14px;
        border-radius: 8px;
        outline: none;
        border: none;
        color: white;
        font-family: Arial, Helvetica, sans-serif, sans-serif;
        font-size: 18px;
        background-color: #191919;
    }
    form .buttonEnviar{
        padding: 8px 24px;
        font-family: poppins;
        font-size: 20px;
        color: whitesmoke;
        background: rgb(187, 0, 53);
        opacity: 0.8;
        margin: 20px;
        cursor: pointer;
        border: none;
        border-radius: 8px;
        transition: all 0.4s ease
    }
    form .buttonEnviar:hover{
        background: rgb(255, 0, 72);
        
    }
    /* Estilos para pantallas pequeñas */
@media (max-width: 767px) {
    section .titulos .h1{
        text-align: center;
    }
    section .titulos .h3{
        text-align: center;
        margin: 0;
    }
  section .contenedorFormulario {
    flex-direction: column;
  }

  section .contenedorFormulario .form {
    width: 90%; /* Ancho más grande en pantallas pequeñas */
    margin: 20px;
    margin-top: 0;
  }

  section .contenedorFormulario .mediosContact {
    width: 90%; /* Ancho más grande en pantallas pequeñas */
    margin: 20px;
    height: 500px;
  }

  .mediosContact .iconos .h3 {
    font-size: 20px;
  }

  .mediosContact .iconos .nameIcon {
    gap: 10px; /* Espacio entre iconos más pequeño */
  }
  form{
    width: 90%;
  }

  form input,
  textarea {
    width: 100%; /* Ancho completo en pantallas pequeñas */
    padding: 10px 20px;
    margin: 14px;
    border-radius: 8px;
    outline: none;
    border: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif, sans-serif;
    font-size: 18px;
    background-color: #191919;
  }

  form .buttonEnviar {
    width: 100%;
    font-size: 18px;
    padding: 6px 20px;/* Espacios más pequeños en el botón */
  }
}

</style>