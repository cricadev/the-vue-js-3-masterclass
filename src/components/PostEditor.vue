<script setup lang="ts">
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
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
const text = ref('')
const emits = defineEmits(['save'])


const save = () => {
  const post = {
    id: Math.random().toString(36).substr(2, 9),
    userId: '1',
    publishedAt: new Date().toISOString(),
    text: text.value,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
  }
  // your post submission logic here
  text.value = ''
  emits('save', post)
}

</script>
<template>
  <form @submit.prevent="save">
    <div class="flex justify-center">
      <textarea v-model="text" name="new-post" id="new-post" cols="60" rows="10"
        class="border-2 border-gray-300"></textarea>
    </div>
    <div class="flex justify-center mt-4">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  </form>
</template>
