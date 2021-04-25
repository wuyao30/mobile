import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/powerSwitch',
    children: [
      {
        path: 'powerSwitch',
        name: 'PowerSwitch',
        component: () => import('@/views/switch/index')
      },
      {
        path: 'media',
        name: 'Media',
        component: () => import('@/views/media/index')
      },
      {
        path: 'singleSwitch',
        name: 'SingleSwitch',
        component: () => import('@/views/singleSwitch/index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
