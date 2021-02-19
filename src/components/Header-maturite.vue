<template>
  <header>
    <div class="header-hamburguer">
      <div class="header-logo">
        <img src="../assets/text-maturite.svg" alt="Maturité" />
      </div>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li><a href="#work">Sobre</a></li>
        <li><a href="#about">Planos</a></li>
        <li><a href="#careers">Contato</a></li>
        <li><a href="#contact">Planos</a></li>
        <br>
      </ul>
    </div>
    <div class="header">
      <div class="header-logo">
        <img src="../assets/text-maturite.svg" alt="Maturité" />
      </div>
      <div class="header-menu">
        <nav>
          <a href="/#sobre">Sobre</a>
          <a href="/#servicos">Planos</a>
          <a href="/#portfolio">Contato</a>
          <a href="/#contato">Planos</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Headermaturite',
  data () {
    return {
      logo: "../assets/text-maturite.svg"
    }
  }
};
</script>

<style>
/*CONTAINER DO HEADER*/

.header {
  background-color: black;
  position: sticky;
  top: 0;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*LOGO DO HEADER*/

.header-logo {
  margin-left: 4%;
}
.header-logo img {
  cursor: pointer;
  height: 100px;
}

/*MENU DO HEADER*/

.header-menu {
  margin-right: 4%;
}
.header-menu nav {
  justify-content: right;
}
.header-menu nav a {
  /*Parte de animação */
  display: inline;
  background: linear-gradient(90deg, #fc5d5c, #fef952);
  background-size: 0% 3px;
  transition: background 0.3s linear;
  background-position: 0% 100%;
  background-repeat: no-repeat;

  /*Formatação Padrão */
  font-family: var(--font-title);
  margin-left: 50px;
  text-decoration: none;
  color: var(--orange-color);
  font-size: 35px;
}
.header-menu nav a:hover {
  background-size: 100% 3px;
}

/* HEADER HAMBURGUER */

.header-hamburguer {
  background-color: black;
  position: sticky;
  width: 100%;
  z-index: 3;
  display: none;
  top: 0;
  grid-template-areas:
    'logo menu'
    'itens itens';
  justify-content: space-between;
  align-items: center;
}

.header-hamburguer ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: black;
  grid-area: itens;
  text-align: right;
  height: auto;
}

.header-hamburguer li a {
  display: block;
  padding: 20px 20px;
  border-right: 4px solid var(--orange-color);
  text-decoration: none;
  color: white;
  font-family: var(--font-title);
  text-transform: uppercase;
  font-size: 20px;
}

.header-hamburguer li a:hover,
.header-hamburguer .menu-btn:hover {
  background-color: gray;
}

.header-hamburguer .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header-hamburguer .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header-hamburguer .menu-icon {
  cursor: pointer;
  display: inline-block;
  padding: 20px 20px;
  position: relative;
  user-select: none;
}

.header-hamburguer .menu-icon .navicon {
  background: white;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 40px;
  height: 5px;
}

.header-hamburguer .menu-icon .navicon:before,
.header-hamburguer .menu-icon .navicon:after {
  background: white;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header-hamburguer .menu-icon .navicon:before {
  top: 15px;
}

.header-hamburguer .menu-icon .navicon:after {
  top: -15px;
}

/* menu btn */

.header-hamburguer .menu-btn {
  display: none;
}

.header-hamburguer .menu-btn:checked ~ .menu {
  max-height: 275px;
}

.header-hamburguer .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header-hamburguer .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header-hamburguer .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header-hamburguer .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header-hamburguer .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (max-width: 1200px) {
  .header {
    display: none;
  }
  .header-hamburguer {
    display: grid;
  }
  .header-logo {
    margin-left: 10px;
  }
  .header-logo img {
    height: 100px;
  }
}

@media (max-width: 500px) {
  .header-hamburguer .menu-icon .navicon {
    width: 35px;
    height: 3.5px;
  }

.header-hamburguer .menu-icon .navicon:before {
  top: 10px;
}

.header-hamburguer .menu-icon .navicon:after {
  top: -10px;
}

  .header-logo {
    margin-left: 10px;
  }
  .header-logo img {
    height: 50px;
  }
}
</style>
