import { createRouter, createWebHistory } from 'vue-router'
import chat from '@/views/chat.vue'
import test from '@/views/test.vue'
import login from '@/views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: chat
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/history.vue')
    },
    {
      path:'/report',
      name:'report',
      component:()=> import('@/components/report/index.vue')
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})

export default router
