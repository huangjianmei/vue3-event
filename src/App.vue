<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const loginIn = () => {
  userStore.saveToken('hjhkhkkkkkkk')
}
const loginOut = () => {
  userStore.removeToken()
}
</script>
<template>
  <div>
    <h1>我是首页</h1>
    <h2>token:{{ userStore.token }}</h2>
    <el-button @click="loginIn">登录</el-button>
    <el-button @click="loginOut">退出</el-button>
  </div>
</template>

<style scoped></style>
