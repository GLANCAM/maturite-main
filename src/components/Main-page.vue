<template>
  <div> 
    <transition>
        <div v-if="pageMounted" id="page" key="main-page">
          <DownHeader/>
          <Sobre/>
          <Planos/>
          <Caracteristicas/>
          <Contato/>
        </div>
        <div v-else id="initial-logo" :key="load-img">
          <img src="../assets/logo.svg" alt="Logo loading">
        </div>
    </transition>
        
  </div>
</template>

<script>
import DownHeader from './Down-header.vue'
import Sobre from './Sobre'
import Contato from './Contato.vue'
import Planos from './Planos.vue'
import Caracteristicas from './Caracteristicas.vue'
//import PostsDepoimentos from './Posts-depoimentos.vue'


export default {
  name: 'Main-page',
  components: {
    DownHeader,
    Sobre,
    Contato,
    Planos,
    Caracteristicas,
    //PostsDepoimentos
  },
  mounted () {
    window.addEventListener('load', ()  => this.activateTransition())
  },
  destroyed () {
    window.removeEventListener('load', ()  => this.activateTransition())
  },
  data () {
    return {
      pageMounted: false
    }
  },
  methods: {
   wait (ms) {
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
      end = new Date().getTime();
    }
  },
  activateTransition () {
      let image = document.querySelector('img')
      console.log(image)
      let isLoaded = image.complete && image.naturalHeight
      this.wait(1000)
      if (isLoaded)
        this.pageMounted = true
      else{
        this.wait(1000)
        this.pageMounted = true
      }
  }
}

}
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s;
}

.v-enter,
.v-leave-to{
  opacity: 0;
}

#initial-logo{
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
}

#initial-logo img{
  position: fixed;
    height: 50vw;
    width: 50vw;
    
    left: 50%;
    margin-left: -25vw;
    
    top: 50%;
    margin-top: -25vw;
}

</style>
