import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import CustomerInfoView from '../views/CustomerInfoView.vue'
import comfirmOrderView from '../views/ComfirmOrderView.vue'

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
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/AboutusView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },    
    {
      path: '/checkout/customer-info',
      name: 'customer-info',
      component: CustomerInfoView
    },
    {
      path: '/checkout/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingMethodView.vue')
    },
    {
      path: '/checkout/payment',
      name: 'payment',
      component: () => import('../views/PaymentMethodView.vue')
    },
    {
      path: '/checkout/incovice',
      name: 'invoice',
      component: () => import('../views/InvoiceView.vue')
    },
    {
      path: '/checkout/myOrderCheck',
      name: 'myOrderCheck',
      component: comfirmOrderView
    },
  ]
})

export default router
