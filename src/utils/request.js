import axios from 'axios'
import { useUserStore } from '@/stores'
import router from '../router'
import { ElMessage } from 'element-plus'
const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // 1.基础地址，超时时间
  baseURL,
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      config.token.Authorization = userStore.token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // code=0 登录成功
    if (response.data.code === 0) {
      return response
    }
    // 处理登录失败，给出错误提示
    ElMessage.error(response.data.message || '服务异常')
    // return Promise.reject(response.data)
    return Promise.reject(response.data)
  },
  function (error) {
    // 处理401 错误
    // 错误的特殊情况 => 401权限不足 或 token 过期 => 拦截到登录
    if (error.response?.status === 401) {
      router.push('/login')
    }
    console.log(error, '===error')
    ElMessage.error(error.response.data.message || '服务异常')
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
