import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/real-estate'
    },
    {
      path: '/real-estate',
      name: 'real-estate',
      component: () => import('../views/real-estate/RealEstateView.vue'),
      children: [
        {
          path: 'form/:realEstateId?',
          name: 'real-estate-form',
          component: () => import('../views/real-estate/RealEstateFormView.vue')
        }
      ]
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/templates/TemplateView.vue')
    }
  ]
})

export default router
