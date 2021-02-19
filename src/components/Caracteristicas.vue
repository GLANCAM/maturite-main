<template>
  <section id="features">
        <div class="down1000 center-vertical-horizontal h15">
                    <h1 class="center-text">NOSSAS PROPOSTAS</h1>
        </div>

        <div class="heart-div">
            <div class="hearts">
                <div class="right">
                    <img :src="heartUrl" alt="Coração Pequeno" 
                    title="Coração Pequeno" class="small-heart b-black">
                    <div class="text-inside-heart">Jaasas</div>
                </div>
                <div>
                    <img :src="heartUrl" alt="Coração Pequeno" 
                    title="Coração Pequeno" class="small-heart b-gray">
                    <div class="text-inside-heart">Jsaem</div>
                </div>
                <div class="right">
                    <img :src="heartUrl" alt="Coração Pequeno" 
                    title="Coração Pequeno" class="small-heart b-orange">
                    <div class="text-inside-heart">Asasa</div>
                </div>
            </div>
    
            <div class="middle-hearts">

                <div class="center-vertical-horizontal h15">
                    <h1 class="center-text">NOSSAS PROPOSTAS</h1>
                </div>

                <div id="div-big-heart">
                    <img id="big-heart" src="../assets/logo.svg"
                 alt="Coracao Maturite" title="Coracao Maturite">
                </div>

                <div class="center-vertical-horizontal h15">
                    <a class="btn-e-muito-mais btn-a btn-orange">E muito mais...</a>
                </div>

            </div>
    
            <div class="hearts">
                <div class="left">
                    <img :src="heartUrl" alt="Coração Pequeno" 
                    title="Coração Pequeno" class="small-heart b-orange">
                    <div class="text-inside-heart">Psicologia</div>
                </div>
                <div>
                    <img :src="heartUrl" alt="Coração Pequeno" 
                    title="Coração Pequeno" class="small-heart b-gray">
                    <div class="text-inside-heart">Esporte</div>
                </div>
                <div class="left">
                    <img :src="heartUrl" alt="Coração Pequeno" 
                    title="Coração Pequeno" class="small-heart b-black">
                    <div class="text-inside-heart">Jardinagem</div>
                </div>
            </div>
        </div>
        
        <div class="down1000 center-vertical-horizontal h15">
            <a class="btn-e-muito-mais btn-a btn-orange center-text">E muito mais...</a>
        </div>

    </section>
</template>

<script>
export default {
    name: 'Caracteristicas',
    data () {
        return{
            heartUrl: require('../assets/heart.png')
        }
    }
}
</script>

<style>
  .down1000{
    display: none !important;
  }

    #features{
  width: 100vw;
  height: 64.6vw;
  background: var(--background-gray);
}

.middle-hearts{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.heart-div{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*0.703*/
#big-heart{
  width: 43vw;
  height: 30.2vw;
}

#div-big-heart{
  display: flex;
  height: 70%;
  align-items: center;
}

.hearts{
  width: 28vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.hearts > div{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7vw;
  font-weight: bold;
}

.text-inside-heart{
  margin-top: 1vw;
  margin-left: 1vw;
  position: absolute;
  font-family: 'Comic Sans MS';
  color: rgb(206, 180, 180);
}

.text-inside-heart:hover {
  cursor: pointer;
}

.center-vertical-horizontal{
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-vertical-horizontal h1{
    font-size: 3vw;
}

.hearts > div:hover .small-heart{
  transition-duration: 0.5s;
  width: 18vw;
  height: 13vw;
}

.h15{
  height: 15%;
}

.btn-e-muito-mais{
  font-size: 3vw;
  padding: 0 10%;
}

.small-heart{
  width: 14vw;
  height: 10.1vw;
  position: relative;
}

.b-black{
  background: linear-gradient(45deg, gray, black);
}

.b-orange{
  background: linear-gradient(45deg, gray, var(--orange-color));
}

.b-gray {
  background: linear-gradient(45deg, gray, white, gray);
}

.b-orange + .text-inside-heart{
  color: black;
}

.b-gray + .text-inside-heart{
  color: brown;
}

.b-black + .text-inside-heart{
  color: var(--orange-color);
}

.small-heart:hover{
  cursor: pointer;
}

.left{
  align-self: flex-start;
}

.right{
  align-self: flex-end;
}

@media (max-width: 1000px){
  .middle-hearts {
    display: none;
  }
  
  .hearts {
    height: 70%;
    margin: 3vw;
  }

  .hearts > div{
  font-size: 3.4vw;
  margin: 3vw;
}

  .small-heart {
    width: 28vw;
    height: 20.2vw;
  }

  
  .hearts > div:hover .small-heart{
  transition-duration: 0.5s;
  width: 36vw;
  height: 26vw;
}

  #features {
    height: auto;
  }

  .down1000{
    display: flex !important;
    padding: 3.5vw;
  }

  .down1000 .center-text{
    font-size: 5vw;
  }
  
.left{
  align-self: inherit;
}

.right{
  align-self: inherit;
}
}

</style>