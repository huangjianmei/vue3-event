import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 定义store
// defineStore(仓库的唯一标识，()=>{...})
export const useCounterStore = defineStore(
  'counter',
  () => {
    // 声明数据 state -- count
    const count = ref(10)
    // 声明基于数据派生的计算属性 getters
    const doubleCount = computed(() => count.value * 2)
    // 声明操作数据的方法 action
    function increment() {
      count.value++
    }
    function subCount() {
      count.value--
    }

    return { count, doubleCount, increment, subCount }
  },
  {
    persist: {
      key: 'hjm-counter',
      path: ['count'] //可以自定义某些数据持久化
    }
  }
)
