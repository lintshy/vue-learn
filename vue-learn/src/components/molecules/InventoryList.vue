<script setup lang="ts">
import type { UserInventoryItem } from '@/stores';
import { ref } from 'vue';

import InventoryListItem from '../atoms/InventoryListItem.vue'
import FilterKeys from '../atoms/FilterKeys.vue'

defineProps<{
    inventory?: UserInventoryItem[] | undefined
    title: string
}>()


</script>
<template>
    <p>{{ title }}</p>
    <FilterKeys v-bind="$attrs" />
    <ul>
        <InventoryListItem />
    </ul>
</template>