<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goRegister = () => {
  console.log(router, '=====router')
  router.push('/register')
}
</script>
<template>
  <div>
    <h1>我是首页</h1>
    <test-demo></test-demo>
    <el-button @click="$router.push('/login')">登录</el-button>
    <el-button @click="goRegister">注册</el-button>
  </div>
</template>

<style scoped></style>
