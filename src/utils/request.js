import axios from 'axios'
import { useUserStore } from '@/stores/user.js'

const request = axios.create({
  baseURL: '/api'
})

const adminRequest = axios.create({
  baseURL: '/admin'
})

adminRequest.interceptors.request.use(config => {
  const store = useUserStore()

  if (store.token) {
    config.headers.Authorization = `Bearer ${store.token}`
  }
  return config
})

export {
  request,
  adminRequest
}
