<script setup>
  // 局部组件（导入进来就能用）
  import {ref,onMounted} from "vue"
  import TestCom from "@/components/06 testCom.vue"

  const inp = ref();
  console.log(inp);
  onMounted(()=>{
    // inp.value.focus()
    handleFocus()
  });
  const handleFocus=()=>{
    inp.value.focus()
  };

  const testRef=ref(null);
  const getCom=()=>{
    console.log(testRef.value.count,"==testRef")
    testRef.value.sayHi();
  };
</script>

<template>
  <div>
    <input type="text" ref="inp">
    <button @click="handleFocus">点击让输入框聚焦</button>
    <TestCom ref="testRef"></TestCom>
    <button @click="getCom">获取组件</button>
  </div>
  
</template>

<style scoped>
</style>
