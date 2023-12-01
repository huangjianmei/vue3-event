<script setup>
  import {inject} from 'vue'
  const themeColor=inject("theme-color");
  const count=inject('count');
  const changeCount=inject('changeCount');
  const changeCountValue=()=>{
    changeCount(1000)
  };
  const addCount=inject("addCount");
  const addCountValue = (value)=>{
    addCount(value)
  }
</script>
<template>
  <div>
    <h3>我是底层组件---{{themeColor}}</h3>
    <div>{{count}}</div>
    <button @click="changeCountValue">更新count</button>
    <button @click="addCountValue(100)">++</button>
  </div>
</template>

<style scoped>

</style>