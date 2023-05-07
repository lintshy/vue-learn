<script setup lang="ts">
import { reactive } from 'vue'

import { useInventoryStore } from '../stores'
import InventoryList from '../components/molecules/InventoryList.vue'


const inventoryStore = useInventoryStore()
console.log(inventoryStore.inventory)
const inventory = reactive(inventoryStore.inventory)

</script>
<template>
    <h1>Open Inventory</h1>
    <InventoryList title="Purchase from the list below" :inventory="inventory" />
</template>