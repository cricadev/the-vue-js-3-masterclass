import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import sourceData from "@/data.json"

export const useForumStore = defineStore('forumStore', () => {
  // state
  const state = ref(sourceData)
  // getters
  const categories = computed(() => {
    return state.value.categories
  })

  const forums = computed(() => {
    return state.value.forums
  })

  const threads = computed(() => {
    return state.value.threads
  })

  const users = computed(() => {
    return state.value.users
  })

  const posts = computed(() => {
    return state.value.posts
  })

  // actions find 

  const findThreadsThatMatchesForum = (id: string) => {
    return threads.value.filter(thread => thread.forumId === id)
  }

  const findCategoryById = (id: string) => {
    return categories.value.find(category => category.id === id)
  }

  const forumsThatMatchesCategory = (id: string) => {
    return forums.value.filter(forum => forum.categoryId === id)
  }

  const findForumById = (id: string) => {
    return forums.value.find(forum => forum.id === id)
  }
  const findCategoryThatMatchesForum = (id: string) => {
    return categories.value.find(category => category.id === id)
  }

  const findUserById = (id: string) => {
    return users.value.find(user => user.id === id)
  }



  // actions create
  const createPost = (post: any) => {
    posts.value.push(post)
  }

  return { state, categories, forums, users, threads, posts, findCategoryById, forumsThatMatchesCategory, findForumById, findCategoryThatMatchesForum, findUserById, findThreadsThatMatchesForum }
})
