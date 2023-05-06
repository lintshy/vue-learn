<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores'
import router from '@/router'
import { updateUser } from '@/services'

const titleClass = ref('about')
const store = useUserStore()
const user = reactive(store.user)
const saveError = ref(false)

const isEditable = ref(false)
function logout() {
  store.$reset
  router.back()
}

function toggleEdit() {
  isEditable.value = !isEditable.value
}
async function saveProfile() {
  //@ts-ignore
  console.log(user)
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
    <div v-if="isEditable">
      <input v-model="user.firstName" placeholder="firstname" />
      <input v-model="user.lastName" placeholder="lastname" />
      <input v-model="user.title" placeholder="title" />
      <button @click="saveProfile">Save</button>

    </div>
    <div v-else>
      <h1>Welcome {{ user.firstName }} {{ user.lastName }} </h1>
      <p>title: {{ user.title }}</p>
    </div>
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
