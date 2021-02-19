<template>
  <section id="contato">
        <h1 class="center-text">Contato</h1>

        <div class="conteudo-contato">
            <div class="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5660950105885!2d-46.652211348859026!3d-23.619889569567437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a42c9dde39f%3A0xc44bdf370a99de1e!2sAv.%20Ceci%2C%201201%20-%20Planalto%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004065-001!5e0!3m2!1spt-BR!2sbr!4v1612384523102!5m2!1spt-BR!2sbr" style="height: 100%; width: 100%;" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

            <div class="info-contatos">
                
            <a href="www.facebook.com">
                <div class="info-contato">
                    <img class="icn-contato" src="../assets/phone.svg" alt="Facebook" title="Facebook">
                    <span>(11) 98741-0155</span>
                </div>
            </a>

            <a href="www.instagram.com">
                <div class="info-contato">
                    <img class="icn-contato" src="../assets/whats.svg" alt="Facebook" title="Facebook">
                    <span>(11) 98741-0155</span>
                </div>
            </a>

            <a href="www.twitter.com">
                <div class="info-contato">
                    <img class="icn-contato" src="../assets/email.svg" alt="Facebook" title="Facebook">
                    <span>email@gmail.com</span>
                </div>
            </a>

            </div>
        </div>

        <h1 class="center-text">Redes Sociais</h1>

        <div class="redes-sociais">
            
            <a href="www.facebook.com"><img class="icn-contato" src="../assets/facebook.svg" alt="Facebook" title="Facebook"></a>
            <a href="www.instagram.com"><img class="icn-contato" src="../assets/instagram.svg" alt="Instagram" title="Instagram"></a>
            <a href="www.twitter.com"><img class="icn-contato" src="../assets/twitter.svg" alt="Twitter" title="Twitter"></a>
            
        </div>

    </section>
</template>

<script>
export default {
    name: 'Contato'
}
</script>

<style>
  #contato{
    width: 100vw;
    background-color: black;
    color: var(--orange-color);
    text-align: center;
    padding-bottom: 25px;
}
#contato h1{
    font-size: 4vw;
    font-family: "Times New Roman", times, serif;
    padding-top: 4%;
    padding-bottom: 4%;
}
.mapa{  
    width: 28.6vw;
    height: 28.6vw;
}
.conteudo-contato{
    width: 85.4vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.conteudo-contato a{
    text-decoration: none;
}

.info-contatos{
    width: 42.7vw;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
.info-contato{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
}
.info-contato span{
    font-family: "Times New Roman", times, serif;
    color: rgb(161, 150, 150);
    font-size: 3.5vw;
    margin-left: 3.7vw;
}
.redes-sociais{
    /*margin: 20px auto 0 auto;*/
    margin: 0 auto;
    width: 60vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.redes-sociais .icn-contato{
    text-align: center;
}
.icn-contato{
    width: 6.77vw;
    height: 6.77vw;
}
.icn-contato:hover{
    cursor: pointer;
}
@media (max-width: 1200px){
    .mapa{
        width: 100%;
        margin: 6vw auto 0 auto;
        height: 10%;
    }
    .conteudo-contato{
        flex-direction: column-reverse;
    }

    .icn-contato{
    width: 10vw;
    height: 10vw;
    }

.info-contatos{
    width: auto;
}
}
</style>