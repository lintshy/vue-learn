import type { InventoryItem } from '@/stores'
import { Api } from '../core/api'

export async function getOpenInventory() {
    const queryData = {
        "operationName": "Query",
        "query": "query Query { getOpenInventory { category description id imageUrl name status }}",
    };
    try {
        const response = await Api.post('', JSON.stringify(queryData))
        const user = response?.data?.getOpenInventory
        return user
    }
    catch (error) {
        console.log(error)
        return null
    }
}