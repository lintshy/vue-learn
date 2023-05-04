<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores'
import router from '@/router'
const titleClass = ref('about')
const store = useUserStore()
const user = ref(store.user)
const { firstName, lastName, title } = user.value
const isEditable = ref(false)
function logout() {
  store.$reset
  router.back()
}

function toggleEdit() {
  isEditable.value = !isEditable.value
}
function saveProfile() {
  console.log()
  store.updateUser({ firstName, lastName, title })
  toggleEdit()
}

</script>

<template>
  <div :class="titleClass">
    <div v-if="isEditable">
      <input v-model="firstName" placeholder="firstname" />
      <input v-model="lastName" placeholder="lastname" />
      <input v-model="title" placeholder="title" />
      <button @click="saveProfile">Save</button>

    </div>
    <div v-else>
      <h1>Welcome {{ firstName }} {{ lastName }} </h1>
      <p>title: {{ title }}</p>
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
