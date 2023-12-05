import { createPinia } from 'pinia'
// 导入持久化插件
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia() //创建pinia实例
pinia.use(persist)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }
// import { useCounterStore } from './modules/counter'
// export { useUserStore }

export * from './modules/user'
export * from './modules/counter'
