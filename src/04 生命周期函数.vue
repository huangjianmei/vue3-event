<script setup>
import { onMounted } from 'vue'

const getList=()=>{
  console.log("获取数据")
}

getList();

onBeforeMount(()=>{
  console.log("===onBeforeMount 11111")
});
onBeforeMount(()=>{
  console.log("===onBeforeMount 22222")
});
</script>

<template>
  <div>生命周期函数</div>
</template>

<style scoped>
</style>
