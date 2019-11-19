import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import TodoList from '../components/TodoList';
import AddTodoItem from '../components/AddTodoItem';
import Transaksi from '../components/POS';
Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/daftar_makanan'},
  { path: '/daftar_makanan', component: TodoList },
  { path: '/daftar_makanan/add', component: AddTodoItem},
  { path: '/transaksi', component: Transaksi},
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
