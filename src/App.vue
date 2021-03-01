<template>
  <div id="app">
    <Header-maturite/>
    <router-view></router-view>
    <Footer-matutite/>
  </div>
</template>

<script>
import FooterMatutite from './components/Footer-matutite.vue'
import HeaderMaturite from './components/Header-maturite.vue'

export default {
  components: { HeaderMaturite, FooterMatutite },
}
</script>

<style>

</style>