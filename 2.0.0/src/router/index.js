import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Manager.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manger',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manager.vue'),
    redirect:"/home",
    children:[
      {path: 'user', name: 'User', component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')},
      {path: 'home', name: 'Home', component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')}
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
  },
  {
    path: '/front',
    name: 'Front',
    component: () => import(/* webpackChunkName: "about" */ '../views/front/Front.vue'),
    children: [
      {
        path:'home',
        name: 'FrontHome',
        component:()=>import('../views/front/Home.vue')
      }
    ]
  },
  {
    path:'/front/index',
    name: 'index',
    component:()=>import('../views/front/index.vue')
  },
  {
    path:'/front/index/read',
    name: 'read',
    component:()=>import('../views/front/read.vue')
  }
]

const router = new VueRouter({
  routes:routes
})

export default router
