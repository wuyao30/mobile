import axios from 'axios'
import { Notify } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
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
      message: '操作失败，请刷新重试。。。'
    })
    return Promise.reject(error)
  }
)
export default service
