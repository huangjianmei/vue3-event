import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例
// 配置history模式
// 1.history
// 2.hash

// vite 中的环境变量 import.meta.env.BASE_URL 就是vite.config.js 的base
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    //   }
  ]
})

export default router
