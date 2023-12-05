<script setup>
import { useCounterStore } from '@/stores/10/counter'
const counterStore = useCounterStore()
// 方法不需要响应式，可以直接解构
const { subCount } = counterStore
</script>
<template>
  <div>
    <h1>我是son1Com</h1>
    <button @click="subCount">-</button>
  </div>
</template>

<style scoped></style>
