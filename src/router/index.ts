import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/common-mode',
      name: 'common-mode',
      component: () => import('@/views/common-mode.vue'),
      meta: {
        title: '普通存档',
      }
    },
    {
      path: '/honor-mode',
      name: 'honor-mode',
      component: () => import('@/views/honor-mode.vue'),
      meta: {
        title: '荣誉存档',
      }
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: () => import('@/views/not-found-page.vue')
    }
  ]
})

router.beforeEach((to) => {
  if (to.path === '/') {
    return { name: 'common-mode' }
  }
  return true
})

export default router
