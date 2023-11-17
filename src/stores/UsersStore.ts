import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, computed } from "vue";
import sourceData from "@/data.json"

export const useUsersStore = defineStore("UsersStore", () => {
  const users = ref(sourceData.users)
  const authId = ref("s7Q8Zi2N1SPa5ahzssq9kbyp138")
  const authUser = computed(() => users.value.find(user => user.id === authId.value))
  const findUserById = (id: string) => {
    return users.value.find(user => user.id === id)
  }
  return {
    users,
    findUserById,
    authUser,
  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useUsersStore, import.meta.hot)
  );
}
