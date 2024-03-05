import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/one',
    name: 'one',
    component: () => import('../views/one.vue')
  },
  {
    path: '/ProductList',
    name: 'ProductList',
    component: () => import('../views/ProductList.vue')
  },
  {
    path: '/miansan',
    name: 'miansan',
    component: () => import('../views/miansan.vue')
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: () => import('../views/ParentComponent.vue')
  },
  {
    path: '/UserManagementComponent',
    name: 'UserManagementComponent',
    component: () => import('../views/UserManagementComponent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
