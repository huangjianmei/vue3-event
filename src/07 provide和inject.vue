<script setup>
// 局部组件（导入进来就能用）
import {ref} from "vue"
import SonCom from "@/components/05 sonCom.vue"

const money = ref(100);
const changeFn = (value)=>{
  money.value-=value
};

</script>

<template>
  <div>父传子</div>
  <!-- 给子组件，添加属性的方式传值 -->
  <SonCom car="宝马车" :money="money" @changeMoney="changeFn"></SonCom>
</template>

<style scoped>
</style>
