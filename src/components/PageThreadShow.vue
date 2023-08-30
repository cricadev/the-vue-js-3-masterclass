<script setup lang="ts">
import sourceData from '@/data.json'
import { reactive, ref, computed, defineProps } from 'vue'
const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)

const postById = (postId) => {
  return posts.value.find((post) => post.id === postId)
}
const userById = (userId) => {
  return users.value.find((user) => user.id === userId)
}
const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.threadId)
})
const props = defineProps({
  threadId: {
    type: String,
    required: true
  }

})
console.log(posts.value)
</script>
<template>
  <div class="p-32">

    <h2 class="text-5xl font-bold text-center">
      {{ thread.title }}
    </h2>
    <!-- USER CONTAINER -->
    <a v-for="postId in thread.posts" :key="postId" :href="`/thread/${postId}`"
      class="flex flex-col items-center transition-all bg-green-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <!-- USER INFO -->
      <div class="">
        <a :href="`/user/${userById(postById(postId).userId).id}`">
          {{ userById(postById(postId).userId).name }}
        </a>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          :src="userById(postById(postId).userId).avatar" alt="" />
      </div>

      <!-- POST CONTENT -->

      <div class="flex flex-col justify-between p-4 leading-normal">
        <p>{{ postById(postId)?.text }}</p>
      </div>

      <!-- post date -->

      <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ postById(postId)?.publishedAt }}
        </p>
      </div>
    </a>
  </div>
</template>
<style></style>
