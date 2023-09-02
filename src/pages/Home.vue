<script setup lang="ts">

import CategoryList from "@/components/CategoryList.vue"
import sourceData from "@/data.json"
import { ref } from 'vue';


const forums = ref(sourceData.forums)

</script>
<template>
  <div class="p-32">
    <category-list :forums="forums"></category-list>
  </div>
</template>
<style></style>
