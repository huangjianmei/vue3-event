import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

// 用户模块 token saveToken removeToken
export const useUserStore = defineStore(
  'user-token',
  () => {
    const token = ref('')
    const saveToken = (newToken) => {
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
    return {
      token,
      saveToken,
      removeToken,
      getUserInfo,
      userInfo
    }
  },
  {
    persist: true
  }
)
