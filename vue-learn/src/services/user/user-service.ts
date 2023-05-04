import type { User } from '@/stores/user'
import { Api } from '../core/api'

export async function loginUser() {
  const user: User = {
    userName: 'test',
    firstName: 'John',
    lastName: 'Doe',
    title: 'DC1'
  }
  const response = Api.mock(user)
  return response
}
