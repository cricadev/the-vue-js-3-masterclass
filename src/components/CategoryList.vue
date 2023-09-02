<script setup lang="ts">
import ForumList from "@/components/ForumList.vue"
import sourceData from "@/data.json"

import { ref, computed } from 'vue';


const categories = ref(sourceData.categories)

const category = computed(() => {
  return categories.value.filter((c) => c.id === props.forums.categoryId)
})
const props = defineProps({
  forums: {
    type: Array,
    required: true,
  }
})
</script>
<template lang="">
  <div>
    <!--CATEGORY CONTAINER-->
    <h2>
 
    </h2>
    {{category}}
    <forum-list :forums="forums"></forum-list>
  </div>
</template>

<style lang="">
  
</style>