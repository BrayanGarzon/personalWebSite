import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import NotFound from '../views/NotFoundView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    }, 
    {
     path: '/Blog',
     name: 'Blog',
     component: () => import('../views/BlogView.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
     },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    // Ruta de captura para la página de error 404 (debe estar al final)
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ]
})

export default router
