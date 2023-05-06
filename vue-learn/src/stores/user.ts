import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export type User = {
  id?: Number
  userName?: string
  firstName?: string
  lastName?: string
  title?: string
}
export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    userName: '',
    firstName: '',
    lastName: '',
    title: ''
  })
  const isAuthorized = computed(() => user.value.userName)

  function updateUser(userData: User) {
    if (!user) {
      return
    }
    user.value = Object.assign(userData)
  }
  console.log(isAuthorized)
  return { user, isAuthorized, updateUser }
})