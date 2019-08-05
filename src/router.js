import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/pushvideo',
      name: 'pushvideo',
      component: () => import('./views/PostVideo.vue')
    },
    {
      path: '/user/register',
      name: 'register',
      component: () => import('./views/user/Register.vue')
    },
    {
      path: '/user/login',
      name: 'register',
      component: () => import('./views/user/Login.vue')
    },
  ]
})
