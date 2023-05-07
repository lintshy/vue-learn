import { defineStore } from "pinia"
import { ref } from "vue"

export type InventoryItem = {
    id: string
    name: string
    category: string
    description: string
    imageUrl: string
    status: 'Open' | 'Purchased'

}

export type UserInventoryItem = InventoryItem & {
    inventoryId?: string
    purchaseDate?: string
}

export const useInventoryStore = defineStore('openInventory', () => {

    let inventory = ref<UserInventoryItem[]>([])
    function updateInventory(updatedInventory: InventoryItem[]) {
        inventory.value = updatedInventory
    }
    return { inventory, updateInventory }
})