

<script>
export default {
  data() {
    return {
      subtituloIndex: 0,
      subtituloWords: ["Developer.", "Programer.", "Designer."],
      currentWord: "",
      subtituloColors: ["#FF5733", "#33FF6F", "#339CFF"], // Colores para cada palabra
    };
  },
  mounted() {
    
    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas);
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");
    
    const points = [];
    const numPoints = 60;

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar las posiciones de los puntos
      for (const point of points) {
        point.x += point.speedX;
        point.y += point.speedY;

        // Rebote en los bordes del canvas
        if (point.x < 0 || point.x > canvas.width) {
          point.speedX *= -1;
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.speedY *= -1;
        }
      }

      // Dibujar las conexiones
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = Math.sqrt(
            (points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.stroke();
          }
        }
      }

      // Dibujar los puntos
      for (const point of points) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
    this.animateSubtitulo();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeCanvas);
  },
  methods: {
      resizeCanvas() {
        const canvas = this.$refs.canvas;
        canvas.width = this.$refs.canvasOverlay.clientWidth;
        canvas.height = this.$refs.canvasOverlay.clientHeight;
      },

    animateSubtitulo() {
      const word = this.subtituloWords[this.subtituloIndex];
      let index = 0;

      const typing = () => {
        if (index < word.length) {
          this.currentWord += word[index];
          index++;
          setTimeout(typing, 50); // Ajusta la velocidad de escritura según sea necesario
        } else {
          setTimeout(this.deleteSubtitulo, 1000);
        }
      };

      typing();
    },

    deleteSubtitulo() {
      let index = this.currentWord.length;

      const deleting = () => {
        if (index > 0) {
          this.currentWord = this.currentWord.slice(0, index - 1);
          index--;
          setTimeout(deleting, 40); // Ajusta la velocidad de borrado según sea necesario
        } else {
          this.subtituloIndex = (this.subtituloIndex + 1) % this.subtituloWords.length;
          setTimeout(this.animateSubtitulo, 500);
        }
      };

      deleting();
    },
  },
};
</script>


<template>
  <section class="canvas-container">
    <div class="canvas-overlay" ref="canvasOverlay">
      <canvas ref="canvas" class="canvas"></canvas>
    </div>
    <div class="imagenBg">
      
      <div class="imagenBg-overlay"></div>
      <img src="../assets/img/man.png" alt="">
    </div>
    <div class="cuerpo">
      <div class="redes">
        <a href="https://wa.link/e7gthx" target="_blank" style="text-decoration: none; color: white;">
          <i id="whp" class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://github.com/BrayanGarzon" target="_blank" style="text-decoration: none; color: white;">
          <i id="gith" class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/brayan.garzon.33234/" target="_blank" style="text-decoration: none; color: white;">
          <i id="fcbk" class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/brayan-garz%C3%B3n-256475209" target="_blank" style="text-decoration: none; color: white;">
          <i id="link" class="fa-brands fa-linkedin"></i>
        </a>
        
        
        
      </div>
      <div class="textoWrite">
        <h1><strong style="color: #C70039;">Brayan</strong> Garzón</h1>
        <h3 class="subtitulo" ref="subtitulo">Soy un <span :style="{'color': subtituloColors[subtituloIndex]}">{{ currentWord }}</span></h3>
      </div>
      <div class="logoContac">
        <a href="mailto:destroyergarzon@gmail.com" target="_blank" style="text-decoration: none; color: white;">
          <i id="email" class="fa-solid fa-envelope"></i>
        </a>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
  .canvas-container {
    position: relative;
  }
  .canvas-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: calc(100vh - 80px);
    overflow: hidden;
    pointer-events: none;
  }
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .imagenBg {
    position: absolute;
    top: 0;
    right: 0; /* Alinea la imagen a la derecha */
    width: auto;
    height: 100%;
    z-index: -1;
    display: flex;
    align-items: center; /* Centra verticalmente */
    
  }
  /* aqui agregamos el efecto de degradado sobre la imagen */
  .imagenBg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.322), #00000088); /* Degradado hacia la izquierda */
    
  }
  .imagenBg img{
    height: auto;
    max-height: calc(100vh - 90px);
    
  }
  nav {
    height: 80px;
    background-color: #333;
  }
  .cuerpo {
    width: auto;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
    color: white;
  }

  .redes{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 20px;
  }
  .redes i{
    font-size: 25px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    pointer-events: auto;
  }
  .redes i:hover {
    transform: scale(1.3);
    color: white;
  }
  .redes i#whp:hover{
    transform: scale(1.3);
    color: #25D366;
  }
  .redes i#fcbk:hover{
    transform: scale(1.3);
    color: #1877F2;
  }
  .redes i#gith:hover{
    transform: scale(1.3);
    color: #FAD000;
  }
  .redes i#link:hover{
    transform: scale(1.3);
    color: #0077B5;
  }


  .textoWrite{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .textoWrite h1{
    font-size: 55px;
    margin: 0;
    padding: 0;
  }
  .textoWrite h3{
    font-size: 30px;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    
  }

  .logoContac{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .logoContac i{
    font-size: 25px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    pointer-events: auto;
  }
  .logoContac i:hover{
    transform: scale(1.3);
    color: white;
  }

  .logoContac i#telegram:hover{
    transform: scale(1.3);
    color:  #0088CC;
  }
  .logoContac i#email:hover{
    transform: scale(1.3);
    color: #007BFF;
  }
  @media (max-width: 768px) {
    .cuerpo{
      flex-direction: column-reverse;
    }
    .cuerpo .redes{
      flex-direction: row;
      margin-bottom: 30px;
    }
    .cuerpo .textoWrite{
      margin-top: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cuerpo .textoWrite h1{
      font-size: 40px;
    }
    .cuerpo .textoWrite h3{
      font-size: 25px;
    }
    .cuerpo .logoContac{
      display: none;
      
      
    }
  }
</style>



