// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // ==================== صفحات عمومی با Layout اصلی ====================
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('../views/Home.vue')
      },
    ]
  },

  // ==================== مسیرهای دیگر ====================
  // مسیر 404 (اختیاری)
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router;