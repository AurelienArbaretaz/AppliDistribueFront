import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Developers from '../components/Developers.vue'
import AddTask from '../components/AddTask.vue'
import Tasks from '../components/Tasks.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/developers',
    name: 'Developers',
    component: Developers
  },
  {
    path: '/add_task',
    name: 'add_task',
    component: AddTask
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/about',
    name: 'About',
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
