import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bbs',
    name: 'bbs',
    component: () => import('../views/bbs')
  },
  {
    path: '/bbsDetial',
    name: 'bbsDetial',
    component: () => import('../views/bbs/bbsDetial')
  }
]

const router = new VueRouter({
  routes
})

export default router
