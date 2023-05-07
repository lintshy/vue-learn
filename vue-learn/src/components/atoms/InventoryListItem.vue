<script setup lang="ts">
import type { UserInventoryItem } from '@/stores';
defineProps<{
    inventory?: UserInventoryItem[] | undefined
}>()

</script>

<template>
    <li v-for="item in inventory" :key="item.id">
        <div class="inventory-line-item">
            <p>{{ item.name }}</p>
            <p>{{ item.description }}</p>
            <p>{{ item.category }}</p>
        </div>


    </li>
</template>

<style scoped>
.inventory-line-item {
    display: block;
    justify-content: center;
    flex-direction: row;
}
</style>