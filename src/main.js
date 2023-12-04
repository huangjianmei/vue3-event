import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入持久化插件
import persist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia() //创建pinia实例
app.use(pinia.use(persist))
app.use(router)

app.mount('#app')
