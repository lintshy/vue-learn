import type { User, useUserStore } from '@/stores/user'
import { Api } from '../core/api'

export async function loginUser(username: string, password: string) {
  const queryData = {
    "operationName": "LoginUser",
    "query": "query LoginUser($userName: String, $password: String) { loginUser(userName: $userName, password: $password) { firstName lastName title id }}",
    "variables": {
      "userName": `${username}`,
      "password": `${password}`
    }
  };
  try {
    const response = await Api.post('', JSON.stringify(queryData))
    const user = response?.data?.loginUser
    return user
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export async function updateUser(user: User) {
  const queryData = {
    "operationName": "UpdateUser",
    "query": "mutation UpdateUser($user: UserInput) { updateUser(user: $user) { firstName lastName title id userName }}",
    "variables": {
      "user": user
    }
  };
  try {
    const response = await Api.post('', JSON.stringify(queryData))
    const user = response?.data?.updateUser
    return user
  }
  catch (error) {
    console.log(error)
    return null
  }
}
