import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageThreadShow from '../components/PageThreadShow.vue'
import ThreadList from '../components/ThreadList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
   {
    path: '/thread/:threadId',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
   }

  ]
})

export default router
