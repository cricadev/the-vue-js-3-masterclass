import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import sourceData from "@/data.json"

export const useUsersStore = defineStore("UsersStore", () => {
  const users = ref(sourceData.users)
  const findUserById = (id: string) => {
    return users.value.find(user => user.id === id)
  }
  return {
    users,
    findUserById
  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useUsersStore, import.meta.hot)
  );
}
