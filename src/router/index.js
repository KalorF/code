import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/bbs', name: 'bbs', component: () => import('../views/bbs') },
  { path: '/bbsDetial', name: 'bbsDetial', component: () => import('../views/bbs/bbsDetial') },
  { path: '/login', name: 'login', component: () => import('../views/loginAndRegister/login') },
  { path: '/registry', name: 'registry', component: () => import('../views/loginAndRegister/registry') },
  { path: '/forget', name: 'forget', component: () => import('../views/loginAndRegister/forgetPwd') },
  { path: '/project', name: 'project', component: () => import('../views/project') },
  { path: '/pub', name: 'pub', component: () => import('../views/project/pub') },
  { path: '/projectDetail', name: 'projectDetail', component: () => import('../views/project/projectDetail') },
  { path: '/center', name: 'center', component: () => import('../views/center') },
  { path: '/team', name: 'team', component: () => import('../views/team') }
]

const router = new VueRouter({
  routes
})

export default router
