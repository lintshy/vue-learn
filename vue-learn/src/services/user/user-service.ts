import type { User } from '@/stores/user'
import { Api } from '../core/api'

export function loginUser() {
  const user: User = {
    userName: 'test',
    firstName: 'John',
    lastName: 'Doe',
    title: 'DC1'
  }
  return Api.mock(user)
}
