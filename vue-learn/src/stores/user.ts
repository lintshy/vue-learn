import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { UserInventoryItem } from './inventory'


export type User = {
  id?: string
  userName?: string
  firstName?: string
  lastName?: string
  title?: string
  inventory?: UserInventoryItem[]
}
export const useUserStore = defineStore('user', () => {
  let user = ref<User>({
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    title: '',
    inventory: []
  })
  const isAuthorized = computed(() => user.value.userName)

  function updateUser(userData: User) {
    if (!user) {
      return
    }

    user.value = Object.assign(userData)


    console.log(user)
  }
  console.log(isAuthorized)
  return { user, isAuthorized, updateUser }
})