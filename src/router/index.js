import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Blog from '../views/BlogView.vue'
import Portfolio from '../views/PortfolioView.vue'



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
      name: 'about',
      component: About
    }, 
    {
     path: '/Blog',
     name: 'Blog',
     component: Blog 
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})

export default router
