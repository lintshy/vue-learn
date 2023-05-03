import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export type User = {
    userName:string
    firstName:string
    lastName?:string
    title?:string
}
export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    userName:'',
    firstName:'',
    lastName:'',
    title:''
  })
  const isAuthorized = computed(()=>user.value.userName)
 
  function updateUser(userData:User) {
    user.value = Object.assign(userData)
  }

  return { user, isAuthorized, updateUser }
})