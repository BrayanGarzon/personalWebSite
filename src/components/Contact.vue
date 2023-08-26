<script></script>



<template>

    <section>
        <div class="titulos">
            <h1>Ponte en<strong  style="color: #C70039;"> Contacto</strong></h1>
            <h3><strong  style="color: #C70039;">Envía</strong> tus comentarios</h3>
        </div>
        <div class="contenedorFormulario">

            <div class="form">
                <h3>Envía tu mensaje</h3>
                <form action="#" >
                    <input id="name" type="text" placeholder="Full Name">
                    <input id="email" type="email" placeholder="Your Email">
                    <input id="asunto" type="text" placeholder="Asunt">
                    <textarea id="texto" rows="4" cols="50" placeholder="Your Message"></textarea>
                    <Button class="buttonEnviar" type="submit">Enviar</Button>
                </form>
            </div>
            <div class="mediosContact">
                <div class="iconos">
                    <h3>Mayor Información</h3>
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
                            <p>Correo@correo.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>
    .mediosContact .iconos{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
    }   
    .mediosContact .iconos .nameIcon{
        height: auto;
        padding: 10px;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        
        
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
        margin-top: 40px;
        margin-bottom: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }   
    section .contenedorFormulario .form{
        width: 60%;
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
        opacity: .5;
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
        margin-left: 40px;
        margin-right: 40px;
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
    
</style>