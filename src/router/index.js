import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/Testimonial',
      name: 'Testimonial',
      component: () => import('../views/TestimonialView.vue')
    },
    {
      path: '/page_shop',
      name: 'page_shop',
      component: () => import('../views/PageShopView.vue')
    },
  ]
})

export default router
