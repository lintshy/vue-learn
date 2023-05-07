<script setup lang="ts">
import { ref } from 'vue';

defineEmits<{ (e: 'filter', keyword: string): void }>()

const keyword = ref('')

</script>
<template>
    <input @keydown="$emit('filter', keyword)" placeholder="type to search" v-model="keyword" />
</template>