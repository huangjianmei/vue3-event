<script setup>
import CenterCom from "@/components/07 centerCom.vue"
import { provide,ref } from "vue"
provide('theme-color','yellow');

const count=ref(100);
provide("count",count);
provide("changeCount",(newCount)=>{
  count.value=newCount
});
provide("addCount",(val)=>{
  count.value+=val
});


</script>

<template>
  <div>
    <h1>我是顶层组件</h1>
    <CenterCom></CenterCom>
  </div>
</template>

<style scoped>
</style>
