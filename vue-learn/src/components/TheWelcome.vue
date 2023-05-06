<script setup lang="ts">
import { ref } from 'vue'

import router from '../router'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import { loginUser } from '@/services'
import { useUserStore } from '@/stores'

const username = ref('')
const password = ref('')
const isLoginError = ref(false)
const store = useUserStore()
async function login() {
  const user = await loginUser(username.value, password.value)
  console.log(user)
  if (user) {
    store.updateUser(user)
    router.push({ name: 'about' })

  }
  isLoginError.value = true


}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Login</template>
  </WelcomeItem>
  <WelcomeItem>
    <input v-model="username" placeholder="username" />
  </WelcomeItem>
  <WelcomeItem>
    <input v-model="password" placeholder="password" type="password" />
  </WelcomeItem>
  <WelcomeItem>
    <p v-if="isLoginError">Login Failed!!</p>
  </WelcomeItem>
  <WelcomeItem>
    <button @click="login">Login</button>
  </WelcomeItem>
</template>
