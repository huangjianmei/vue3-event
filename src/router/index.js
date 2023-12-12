import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'
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
          component: () => import('@/views/user/userProfile.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/userAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/userPassword.vue')
        }
      ]
    }
  ]
})

// 路由拦截
// 登录访问拦截 => 默认是直接放行的
// 根据返回值决定，是放行还是拦截
// 返回值
// 1.undefined/true 直接放行
// 2.false 拦回from的地址页面
// 3.具体路径 或 路径对象 拦截到对应的地址
router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') return '/login'
})
export default router
