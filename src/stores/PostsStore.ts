import { ref } from "vue";

import { defineStore, acceptHMRUpdate, storeToRefs } from "pinia";
import { useThreadsStore } from "./ThreadsStore"
import sourceData from "@/data.json"

export const usePostsStore = defineStore("PostsStore", () => {
  const posts = ref(sourceData.posts);
  const createPost = (post: any) => {
    post.id = 'ggqq' + Math.random()
    posts.value.push(post)
    const { threads } = storeToRefs(useThreadsStore())
    const thread = threads.value.find(thread => thread.id === post.threadId)
    thread?.posts.push(post.id)
    console.log(thread)

  }


  return {
    posts,
    createPost,
  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(usePostsStore, import.meta.hot)
  );
}
