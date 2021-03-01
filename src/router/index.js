import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/Main-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/sobre',
    name: 'About',
    component: () => import('../components/Sobre-Main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
