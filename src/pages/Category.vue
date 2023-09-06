<script setup lang="ts">

import CategoryList from "@/components/CategoryList.vue"
import sourceData from "@/data.json"
import { ref, computed } from 'vue'; //utlity functions
// ref = reactive reference 


const forums = ref(sourceData.forums)

const categories = ref(sourceData.categories)

const category = computed(() => {
  return categories.value.find((category) => category.id === props.id)
})
const forumsThatMatchesCategory = computed(() => {
  return forums.value.filter((forum) => forum.categoryId === props.id)
})
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="p-32" v-if="category">
    <h1 class="mb-4 text-3xl font-bold">{{ category.name }}</h1>
    <category-list :forums="forumsThatMatchesCategory"></category-list>

  </div>
  <div class="text-5xl font-bold text-center" v-else>
    NOT FOUND CATEGORY DOESN'T EXIST
    <router-link to="/" class="block my-4 text-green-500">Go Home</router-link>
  </div>
</template>
<style></style>
