import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ThreadShow from '../pages/ThreadShow.vue'
import NotFound from '../pages/NotFound.vue'
import { useThreadsStore } from '@/stores/ThreadsStore'
import Pokemon from '../components/PokemonDisplay.vue'
import PokemonSingle from '../components/PokemonComponent.vue'
import Profile from '../pages/Profile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/thread/:threadId',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true,
      beforeEnter(to, from, next) {

        //check if thread exists
        const threadExists = useThreadsStore().threads.find(thread => thread.id === to.params.threadId)

        //if exists continue
        if (threadExists) {
          return next()
        }
        //else redirect to not found
        else {
          next({
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          })
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/pokemon',
      name: 'Pokemon',
      component: Pokemon
    },

    {
      path: '/pokemon/:id',
      name: 'PokemonLink',
      component: PokemonSingle,


    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: () => import('../pages/Forum.vue'),
      props: true,
    },
    {
      path: '/categories/:id',
      name: 'Category',
      component: () => import('../pages/Category.vue'),
      props: true,
    }



  ]
})

export default router
