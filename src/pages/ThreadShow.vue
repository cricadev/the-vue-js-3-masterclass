<script setup lang="ts">
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import { ref, computed } from 'vue'
const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)



const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.threadId)
})

const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === props.threadId)

})
const props = defineProps({
  threadId: {
    type: String,
    required: true
  }
})
const submitNewPost = (eventData) => {
  console.log(eventData)
  const post = {
    ...eventData,
    threadId: props.threadId
  }
  posts.value.push(post)
  thread.value?.posts.push(post.id)
  console.log(post)
}

</script>
<template>
  <div v-if="thread" class="p-32">

    <h2 class="text-5xl font-bold text-center">
      {{ thread.title }}
    </h2>
    <!-- USER CONTAINER -->
    <post-list :posts="threadPosts"></post-list>
    <!-- POST EDIT -->
    <post-editor @save="submitNewPost"></post-editor>
  </div>
</template>
<style></style>
