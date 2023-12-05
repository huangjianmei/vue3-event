import { defineStore } from 'pinia'
import { ref } from 'vue'

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
    return {
      token,
      saveToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
