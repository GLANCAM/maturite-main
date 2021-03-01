<template>
  <section id="main-about" :class='classesAbout'>
        <div class="about-grid">
            <div :class="title">
                <h1>sobre</h1>
            </div>
            <div class="text-about">
                <p>Somos uma empresa jovem e inovadora que tem como principal objetivo melhorar a qualidade de vida do público idoso, através de uma experiência divertida e funcional.<br><br>
                </p>
                <p>
                Com atividades físicas, artísticas, sociais, entre outras, iremos fazer com que você mantenha tanto sua saúde física quanto mental em dia, sempre aprendendo coisas novas e  adquirindo novas experiências.
                <br><br>
            </p>
            <p>
                Gostou da ideia? Então venha tomar um café no nosso espaço, e se divertir com a nossa equipe.
            </p>
            </div>
            <div class="img-about">
                <img src="../assets/sobre-foto.png" alt="Foto sobre">
                <router-link to="sobre" style="text-decoration:none"><a class="btn-a btn-orange">saiba mais</a></router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return{
      title: "title-about",
      classesAbout: 'about'
    }
  }
}
</script>

<style>

.about {
    width: 100vw;
    grid-auto-flow: column;
    display: grid;
    background-color: var(--background-gray);
    justify-content: center;
    padding: 4vw 0;
  }

  .about-grid {
    max-width: 85.4vw;
    text-align: center;
    display: grid;
    grid-template-areas:
      "title title"
      "text image";
  }
  .title-about {
    grid-area: title;
    text-transform: uppercase;
    margin-bottom: 5%;
    font-size: 3.125vw;
    font-family: var(--font-title);
    color: var(--orange-color);
    font-weight: normal;
    text-decoration: none;
  }
  .text-about {
    grid-area: text;
    font-size: 1.823vw;
    font-family: "Times New Roman", Times, serif;
    text-align: left;
    text-indent: 3.125vw;
    width: 45vw;
    margin-right: 7.8125vw;
    padding-left: 4.48vw;
    border-left: 0.365vw dashed var(--orange-color);
  }
  .img-about {
    grid-area: image;
  }
  .img-about img {
    width: 100%;
    height: 70%;
    display: block;
    margin-bottom: 1.927vw;
  }

  @media (max-width: 1200px) {
      .about-grid{
          grid-template-areas: 
      "title title"
      "text text"
      "image image"
      }

      .text-about{
        margin: auto 0;
        width: 100%;
        font-size: 3vw;
        justify-self: center;
      }

      .img-about img {
          display: none
      }

      .img-about{
        margin-top: 4vw;
      }

      .img-about a{
        font-size: 5vw;
      }

      .title-about{
        font-size: 4vw;
      }
  }

  @media (max-width: 600px){
    .text-about{
        font-size: 5vw;
      }
       .img-about a{
        font-size: 7vw;
      }

  }
  
</style>