<script setup>
import { ref,reactive,computed } from 'vue'

const count = ref(10);
const date=reactive({age:23})
const addCount=()=>{
  count.value+=10;
  date.age++;
};

const dateList=ref([1,2,3,5,7,9,11]);
const dateListComputed=computed(()=>{
  dateList.value.filter(i>2)
});
console.log(dateListComputed,"==dateListComputed")
</script>

<template>

  <div>count{{count}}</div>
  <hr/>
  <div>age:{{date.age}}</div>
  <hr/>
  <button @click="addCount">+10</button>

  <hr/>
  {{dateListComputed}}
</template>

<style scoped>
</style>
