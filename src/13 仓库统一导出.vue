<script setup>
import { useUserStore, useCounterStore } from '@/stores'
const userStore = useUserStore()
const counterStore = useCounterStore()
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
    <h2>count:{{ counterStore.count }}</h2>
    <el-button @click="loginIn" type="primary">登录</el-button>
    <el-button @click="loginOut">退出</el-button>
    <el-button @click="counterStore.add" type="success">加法</el-button>
  </div>
</template>

<style scoped></style>
