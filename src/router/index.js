import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daily from '../views/Daily.vue'
import Days from '../views/Days.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/daily',
    name: 'daily',
    component: Daily
  },
  {
    path: '/days',
    name: 'days',
    component: Days
  },
]

const router = new VueRouter({
  routes
})

export default router
