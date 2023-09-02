<script setup lang="ts">
import sourceData from "@/data.json"
import ThreadList from "@/components/ThreadList.vue"
import { ref, computed } from 'vue';
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const forum = computed(() => {
  return sourceData.forums.find((forum) => forum.id === props.id)
})

const threads = computed(() => {
  return sourceData.threads.filter((thread) => thread.forumId === props.id)
})

</script>
<template lang="">
   <div>
    <h1 class="text-3xl font-bold mb-4">{{ forum.name }}</h1>
    <p class="text-gray-500 mb-8">{{ forum.description }}</p>
    <thread-list :threads="threads"></thread-list>
  </div>
</template>

<style lang="">
  
</style>