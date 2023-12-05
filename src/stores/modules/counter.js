import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块 token saveToken removeToken
export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref('')
    const add = () => {
      count.value++
    }

    return {
      count,
      add
    }
  },
  {
    persist: true
  }
)
