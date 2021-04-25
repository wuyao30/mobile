import axios from 'axios'
import { Notify } from 'vant'

const service = axios.create({
  // baseURL: ''
  // withCredentials: true
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    Notify({
      type: 'danger',
      message: error
    })
    return Promise.reject(error)
  }
)
export default service
