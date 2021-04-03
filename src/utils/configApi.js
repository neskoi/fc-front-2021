import axios from 'axios'

const baseURL = 'http://localhost:4100/'

export default () => {
  const api = axios.create({
    baseURL,
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
