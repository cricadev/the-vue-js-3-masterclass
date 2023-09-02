<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Forums</h1>
    <div v-for="forum in forums" :key="forum.id">

      <router-link class="text-2xl font-bold mb-2" :to="{ name: 'Forum', params: { id: forum.id } }">{{ forum.name
      }}</router-link>


      <p class="text-gray-500 mb-4">{{ forum.description }}</p>

      <div class="threads-count">
        <p class="text-gray-500 mb-4">{{ forum.threads?.length }}
          {{
            forum.threads?.length > 0 ? 'thread' : 'no threads'
          }}
        </p>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'





defineProps({
  forums: {
    type: Array,
    required: true
  }
})
</script>