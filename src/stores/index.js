import { createPinia } from 'pinia'
// 导入持久化插件
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia() //创建pinia实例
pinia.use(persist)

export default pinia
