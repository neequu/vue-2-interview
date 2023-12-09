import { getCurrentInstance } from 'vue'

export const BASE = '/vue-2-interview/'
export const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users'
export const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
export const ALBUMS_API_URL = 'https://jsonplaceholder.typicode.com/albums'


export function useRoute() {
  const { proxy } = getCurrentInstance() as any
  const route = proxy.$route
  return route
}
export function useRouter() {
  const { proxy } = getCurrentInstance() as any
  const router = proxy.$router
  return router
}