<template>
  <section id="sobre-page">

<div class="quem-somos">
      <h1 class="title-size">Quem Somos?</h1>
      <img class="pic-of-all"/>

    <p class="size-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in voluptate 
            unde consectetur suscipit, earum temporibus fuga itaque!
             Hic nihil necessitatibus magni sint cupiditate facilis nam quod commodi molestias et?</p>
</div>


<div class="nosso-trabalho">
    <h1 class="title-size">Nosso trabalho</h1>
    <p class="size-text">Lorem ipsum dolor sit amet consectetur adipisicin
        g elit. Non, possimus et sunt maiores
         quidem recusandae? Similique ab ullam itaque vero odio! Suscip
         it optio, aut ut consequatur dignissimos eveniet eos cum!</p>
</div>
<div class="cada-uma-de-nos">
    
    <h1 class="title-size">Cada uma de nós</h1>
<div class="imgs-solo">

    <div @click="mudaDenise" @mouseover="mudaDenise" class="funcionario">
          <img class="denise" src="../assets/heart-sobre.png" alt="Denise">
      </div>

      <div @click="mudaKatia" @mouseover="mudaKatia" class="funcionario">
          <img class="katia" src="../assets/heart-sobre.png" alt="Katia">
      </div>

      <div @click="mudaBeth" @mouseover="mudaBeth" class="funcionario">
          <img class="beth" src="../assets/heart-sobre.png" alt="Beth">
      </div>

      <p v-html="textSobre" class="size-text back-perso"></p>
</div>
</div>
      

  </section>
</template>

<script>
export default {
    name: "Sobre-main",
    data (){
        return{
            textSobre: ""
        }
    },
    created(){
        this.textSobre = "<strong class='title-size'>Sobre nós</strong><p><br><br>Lorem ipsum dolor sit amet consectetur adipisicin"+
        "g elit. Non, possimus et sunt maiores"+
        "quidem recusandae? Similique ab ullam itaque vero odio! Suscip"+
        "it optio, aut ut consequatur dignissimos eveniet eos cum!</p>"
    },
    methods:{
        mudaKatia(){
            this.textSobre = "<strong class='title-size'>Katia</strong><p><br><br>Lorem ipsum dolor sit amet consectetur adipisicin"+
        "g elit. Non, possimus et sunt maiores"+
        "quidem recusandae? Similique ab ullam itaque vero odio! Suscip"+
        "it optio, aut ut consequatur dignissimos eveniet eos cum!</p>"
        },
        mudaBeth(){
            this.textSobre = "<strong class='title-size'>Beth</strong><p><br><br>Lorem ipsum dolor sit amet consectetur adipisicin"+
        "g elit. Non, possimus et sunt maiores"+
        "quidem recusandae? Similique ab ullam itaque vero odio! Suscip"+
        "it optio, aut ut consequatur dignissimos eveniet eos cum!</p>"
        },
        mudaDenise(){
            this.textSobre = "<strong class='title-size'>Denise</strong><p><br><br>Lorem ipsum dolor sit amet consectetur adipisicin"+
        "g elit. Non, possimus et sunt maiores"+
        "quidem recusandae? Similique ab ullam itaque vero odio! Suscip"+
        "it optio, aut ut consequatur dignissimos eveniet eos cum!</p>"
        }
    }
}
</script>

<style>
    .back-perso{
        background: linear-gradient(var(--background-gray), #eeeeee);
        padding-bottom: 2vw;
    }

    #sobre-page{
        background: --background-gray;
    }

    #sobre-page h1{
        color: var(--orange-color);
        font-family: var(--font-title);
        padding: 10px 0 10px 0;
        
        text-align: center;
    }

    #sobre-page p{
        font-family: 'Times New Roman', Times, serif;
        text-align: center;
    }

    .pic-of-all{
        background: var(--background-gray);
    }

    .quem-somos{
        background: var(--background-gray);
        color: black;
        padding-bottom: 2.5vw;
    }

    .imgs-solo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        background: var(--background-gray);
        border-bottom: 2px dashed black;
    }

    .nosso-trabalho{
        background: black;
        color: white;
        padding-bottom: 2.5vw;
    }

    .funcionario{
        overflow: hidden;
        width: 21.34vw;
        height: 15vw;
        margin: 2vw 0;
        min-width: 400px;
        min-height: 280px;

        display: flex;
        justify-content: center;
        align-items: center;

        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    .cada-uma-de-nos{
        background: var(--background-gray);
    }

    .funcionario:hover{
        cursor: pointer;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        border-color: black;
    }

    .funcionario img {
        width: 100%;
        height: 100%;
    }

    .katia{
        background:var(--orange-color)  url('../assets/Katia.png') no-repeat;
        background-position: right 60% bottom -400%;
        background-size: 45%;
        /*height: 105%;
        width: 70%;*/
    }
    
    .denise{
        background:var(--orange-color)  url('../assets/Denise.png') no-repeat;
        background-position: right 20% bottom -450%;
        background-size: 100%;
        /*height: 100%;
        width: 150%;*/
    }

    .beth{
        background: var(--orange-color) url('../assets/Beth.png') no-repeat;
        background-position: right 60% bottom -350%;
        background-size: 45%;
        /*height: 105%;
        width: 70%;*/
    }

    @media screen and  (max-width: 900px) {
        .funcionario{
        }
    }

    @media screen and  (max-width: 600px){
    }

</style>