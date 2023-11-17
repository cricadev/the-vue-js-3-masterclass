<script setup lang="ts">
import { ref } from "vue"
import PostList from '@/components/PostList.vue'
import { useUsersStore } from "@/stores/UsersStore";


const { findUserById } = useUsersStore();





const text = ref('')
const emits = defineEmits(['save'])


const save = () => {
  const post = {
    userId: 's7Q8Zi2N1SPa5ahzssq9kbyp138',
    publishedAt: new Date().getTime(),
    text: text.value,
  }
  emits('save', post)
  // your post submission logic here
  text.value = ''
}

</script>
<template>
  <form @submit.prevent="save">
    <div class="flex justify-center">
      <textarea v-model="text" name="new-post" id="new-post" cols="60" rows="10"
        class="border-2 border-gray-300"></textarea>
    </div>
    <div class="flex justify-center mt-4">
      <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Submit
      </button>
    </div>
  </form>
</template>
