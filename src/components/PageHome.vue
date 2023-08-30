<script setup lang="ts">

import threadList from "@/components/ThreadList.vue"
import sourceData from "@/data.json"
import { defineComponent, ref } from 'vue';


const threads = ref(sourceData.threads)

</script>
<template>
  <div class="p-32">
    <thread-list :threads="threads"></thread-list>
  </div>
</template>
<style></style>
