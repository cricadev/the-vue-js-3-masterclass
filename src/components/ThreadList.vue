<script setup lang="ts">
import { defineProps, ref } from 'vue'
import sourceData from '@/data.json'


const posts = ref(sourceData.posts)
const users = ref(sourceData.users)

const postById = (postId) => {
  return posts.value.find((post) => post.id === postId)
}
const userById = (userId) => {
  return users.value.find((user) => user.id === userId)
}

const props = defineProps({
  threads: {
    type: Array,
    required: true
  }
})


</script>
<template>
  <div class="">

    <h2 class="p-5 text-2xl font-bold">Threads</h2>
    <div class="flex justify-between p-4 even:bg-green-100 odd:bg-green-50" v-for="thread in threads" :key="thread.id">

      <div class="flex flex-col gap-2">
        <p>
          <a :href="`thread/${thread.id}`" class="">
            {{ thread.title }}
          </a>
        </p>
        <p>
          By <a href="#" class="text-red-300">
            {{ userById(thread.userId).name }}
          </a>,
          {{ thread.publishedAt }}
        </p>
      </div>

      <!-- activity -->
      <div class="flex gap-2 activity">
        <p>
          {{ thread.posts.length }}
        </p>
        <img :src="userById(thread.userId)?.avatar" alt="" class="object-cover w-8 h-8 rounded-full">
        <div>

          <p class="text-xs">
            <a href="">
              {{ userById(thread.userId).name }}

            </a>

          </p>
          <p>
            {{ thread.publishedAt }}

          </p>

        </div>
      </div>
    </div>
  </div>
</template>
<style></style>      
