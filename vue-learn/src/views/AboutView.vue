<script setup lang="ts">
import { reactive, ref } from 'vue'

import { useUserStore } from '../stores'
import router from '@/router'
import { updateUser } from '@/services'
import Profile from '../components/atoms/Profile.vue'


const store = useUserStore()
const user = reactive(store.user)

const saveError = ref(false)
const isEditable = ref(false)
const titleClass = ref('about')

function logout() {
  store.$reset
  router.back()
}

function toggleEdit() {
  isEditable.value = !isEditable.value
}
async function saveProfile() {
  const res = await updateUser({ firstName: user.firstName, lastName: user.lastName, title: user.title, id: user.id })
  if (!res) {
    saveError.value = true
    return
  }
  saveError.value = false
  store.updateUser(res)
  toggleEdit()
}

</script>

<template>
  <div :class="titleClass">
    <Profile :user="user" :is-editable="isEditable" @save-profile="saveProfile" />
    <button @click="toggleEdit">Edit your profile</button>
    <button @click="logout">Logout</button>
  </div>

  <div></div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    color: #000;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
