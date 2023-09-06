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
const categories = ref(sourceData.categories)

const forum = computed(() => {
  return sourceData.forums.find((forum) => forum.id === props.id)
})

const threads = computed(() => {
  return sourceData.threads.filter((thread) => thread.forumId === props.id)
})

const category = computed(() => {
  return sourceData.categories.find((category) => category.id === forum.value.categoryId)
})

</script>
<template lang="">
   <div>
    <h1 class="mb-4 text-3xl font-bold">{{ forum.name }}</h1>
    <p class="mb-8 text-gray-500">{{ forum.description }}</p>
    <thread-list :threads="threads" :category="category"></thread-list>
  </div>
</template>

<style lang="">
  
</style>