<script setup>
  import { useCounterStore } from "@/stores/counter"
  const counterStore = useCounterStore();
</script>
<template>
  <div>
    <h1>我是son2Com</h1>
    <button @click="counterStore.increment">+</button>
  </div>
</template>

<style scoped>
</style>
