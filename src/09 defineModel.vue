<script setup>
  import MyInputCom from "@/components/09 myInputCom.vue"
  import {ref} from "vue"
  const text=ref("35235");
</script>
<template>
  <div>
    <h1>我是首页</h1>
    <MyInputCom v-model="text"></MyInputCom>
    {{text}}
  </div>
</template>

<style scoped>
</style>
