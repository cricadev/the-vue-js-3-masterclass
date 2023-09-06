<script setup lang="ts">
import ForumList from "@/components/ForumList.vue"
import sourceData from "@/data.json"

import { ref, computed } from 'vue';


const categories = ref(sourceData.categories)

const props = defineProps({
  forums: {
    type: Array,
    required: true
  }
})

</script>
<template lang="">
  <div>
    <!--CATEGORY CONTAINER-->
    <forum-list  v-for="category in categories"  :key="category.id" :forums="forums.filter((forum) => forum.categoryId === category.id)" :title="category.name" :category-id="category.id"></forum-list>
  </div>
 
</template>

<style lang="">
  
</style>