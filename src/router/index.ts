import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Auth from "../views/Auth.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
