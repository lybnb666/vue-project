import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Manager.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manger',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manager.vue'),
    children:[
      {
        path: 'user',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes:routes
})

export default router
