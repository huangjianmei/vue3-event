import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'user-token',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    const userInfo = ref({})
    const getUserInfo = async () => {
      const res = await userGetInfoService()
      console.log(res, '====res')
      userInfo.value = res.data.data
      console.log(userInfo.value, '====userInfo')
    }
    const setUser = (data) => {
      userInfo.value = data
    }
    return {
      token,
      setToken,
      removeToken,
      getUserInfo,
      userInfo,
      setUser
    }
  },
  {
    persist: true
  }
)
