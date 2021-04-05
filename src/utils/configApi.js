import axios from 'axios'
import {BASE_URL} from "../constants/URLs"

export default  () => {
  const api = axios.create({
    BASE_URL,
  })
  api.interceptors.request.use(async config => {
    try {
      const newConfig = config
      const token = localStorage.getItem('token')
      newConfig.headers.Authorization = token ? `Bearer ${token}` : ''
      return newConfig
    } catch (e) {
      return config
    }
  })
  return api
}
