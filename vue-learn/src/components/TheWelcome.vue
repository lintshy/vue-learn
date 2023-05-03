<script setup lang="ts">
import { ref } from 'vue'

import router from '../router'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import { loginUser } from '@/services'

const username = ref('')
const password = ref('')
async function login() {
  const user = await loginUser()
  console.log(user)
  router.push({ name: 'about' })
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
    <button @click="login">Login</button>
  </WelcomeItem>
</template>
