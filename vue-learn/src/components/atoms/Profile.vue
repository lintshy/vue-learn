<script setup lang="ts">
import type { User } from '@/stores';
defineProps<{
    user: User,
    isEditable: boolean
}>()
defineEmits<{ (e: 'saveProfile', user: User): void }>()
</script>
<template>
    <div v-if="isEditable">
        <input v-model="user.firstName" placeholder="firstname" />
        <input v-model="user.lastName" placeholder="lastname" />
        <input v-model="user.title" placeholder="title" />
        <button @click="$emit('saveProfile', user)">Save</button>

    </div>
    <div v-else>
        <h1>Welcome {{ user.firstName }} {{ user.lastName }} </h1>
        <p>title: {{ user.title }}</p>
    </div>
</template>