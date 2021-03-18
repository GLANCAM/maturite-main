<template>
  <section id="initial-sobre">
        <div class="position-sobre">
            <img src="../assets/logo.svg" alt="Logo Maturité" 
            title="Logo Maturité" id="logo-maturite">
        </div>
    </section>

</template>

<script>
export default {
    name: 'DownHeader'
}
</script>

<style>
    #initial-sobre{
    width: 100vw;
    background: gray url('../assets/planta.png') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
}
    
    .position-sobre{
      width: 40%;
      height: 100%;
  }

  #logo-maturite{
      width: 100%;
      height: 100%;
  }

@media screen and (max-width: 1200px) {
  #initial-sobre{
      justify-content: center;
      height: 40vh;
      min-height: 200px;
  }

  .position-sobre{
      width: 70%;
  }

}
</style>