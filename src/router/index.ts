import { createRouter, createWebHistory } from 'vue-router'
import { FormExamples } from '../examples/forms'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'root',
      path: '',
      redirect: () => {
        return { path: '/forms' }
      }
    },
    {
      name: 'forms',
      path: '/forms',
      component: FormExamples
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash
      }
    }
  }
})

export default router
