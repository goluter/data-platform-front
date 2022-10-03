import axios from 'axios'
import { API_HOST } from 'govey/config'
import { getToken } from 'govey/src/libs/auth'

const instance = axios.create({
  baseURL: API_HOST,
  timeout: 10000
})

instance.interceptors.request.use((config) => {
  if (config.headers) {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// 생성한 인스턴스를 익스포트 합니다.
export default instance
