<template>
  <section class="plans">
        <div class="plans-title">
            <h1 style="color: black;">Nossos planos</h1>
        </div>
        <div class="types-of-plans">
            <div class="plan1 img-plan">
                <img src="../assets/logo-plano-1.png" alt="">
                <h2>diário</h2>
                <p>No nosso plano diário, você pode ir o dia que quiser e só paga pelo dia que for!</p>
            </div>
            <div class="plan2 img-plan">
                <img src="../assets/logo-plano-2.png" alt="">
                <h2>1 vez por semana</h2>
                <p>No nosso plano 1x por semana, você paga um valor mensalmente, e pode ir uma vez por semana!!</p>
            </div>
            <div class="plan3 img-plan">
                <img src="../assets/logo-plano-3.png" alt="">
                <h2>2 vezes por semana</h2>
                <p>No nosso plano 2x por semana, você paga um valor mensalmente, e pode ir duas vez por semana!!!</p>
            </div>
        </div>
        <div class="btn-plans">
            <a href="contact.html">entre em contato</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Planos'
}
</script>

<style>
    .plans {
    width: 100vw;
    background-color: var(--orange-color);
    text-align: center;
    display: grid;
    grid-template-areas:
      "title"
      "plans"
      "btn";
    justify-content: center;
    align-items: center;
  }
  .plans-title {
    grid-area: title;
    font-size: 3.125vw;
    font-family: var(--font-title);
    text-transform: uppercase;
    margin-bottom: 2.6vw;
    margin-top: 2.6vw;
  }
    .types-of-plans{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

  .plan1 {
    width: 28.44vw;
    min-width: 280px;
  }
  .img-plan {
    padding: 1.3vw 1.5625vw;
  }
  .img-plan img {
    max-width: 26.04vw;
  }
  .img-plan h2 {
    font-size: 2.6vw;
    font-family: var(--font-title);
    text-transform: uppercase;
    margin-bottom: 1.3vw;
  }
  .img-plan p {
    font-size: 1.41vw;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    text-align: center;
  }
  .plan2 {
    width: 28.44vw;
    /*border-left: 0.365vw solid black;
    border-right: 0.365vw solid black;*/
    min-width: 280px;
  }
  .plan3 {
    width: 28.44vw;
    min-width: 280px;
  }
  .btn-plans {
    grid-area: btn;
    margin-top: 4.6875vw;
    margin-bottom: 3.125vw;
  }
  .btn-plans a {
    text-decoration: none;
    color: black;
    border: 0.365vw solid black;
    font-family: var(--font-title);
    font-size: 3.125vw;
    text-transform: uppercase;
    padding: 0 4vw;
  }
  .btn-plans a:hover {
    border-color: white;
    background-color: white;
  transition: background 1s;
  }

  @media (max-width: 1200px){
      .plans-title h1{
          font-size: 30px;
      }
  .btn-plans a {
    font-size: 4vw;
  }

  .img-plan h2 {
    font-size: 2.8vw;
  }
  .img-plan p {
    font-size: 16.66px;
  }
  }

  @media (max-width: 935px){
  .btn-plans a {
    font-size: 25px;
  }

  .img-plan h2 {
    font-size: 25px;
  }
  .img-plan p {
    font-size: 15.66px;
  }
  }
</style>