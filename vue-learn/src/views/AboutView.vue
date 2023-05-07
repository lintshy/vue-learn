<script setup lang="ts">
import { reactive, ref } from 'vue'

import { useUserStore, useInventoryStore } from '../stores'
import router from '@/router'
import { getOpenInventory, updateUser } from '@/services'
import Profile from '../components/atoms/Profile.vue'
import InventoryList from '../components/molecules/InventoryList.vue'


const store = useUserStore()
const user = reactive(store.user)
console.log(store.user)

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

async function getInventoryData() {
  const inventory = await getOpenInventory()
  const inventoryStore = useInventoryStore()
  inventoryStore.updateInventory(inventory)
  router.push({ name: 'open-inventory' })

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
function onKeyPress(e: any) {
  console.log(e)
}

</script>

<template>
  <div :class="titleClass">
    <Profile :user="user" :is-editable="isEditable" @save-profile="saveProfile" />
    <button @click="toggleEdit">Edit your profile</button>

    <InventoryList :inventory="user.inventory" title="User inventory" @filter="onKeyPress" />
    <button @click="getInventoryData">Purchase from Market</button>
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
