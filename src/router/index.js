import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例
// 配置history模式
// 1.history
// 2.hash

// vite 中的环境变量 import.meta.env.BASE_URL 就是vite.config.js 的base
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/loginPage.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/layoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/manage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/channel.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/profile.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/avatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/password.vue')
        }
      ]
    }
  ]
})

export default router
