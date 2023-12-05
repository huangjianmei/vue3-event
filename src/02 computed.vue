<script setup>
import { ref, computed } from 'vue'

const dateList = ref([1, 2, 3, 5, 7, 9, 11])
const dateListComputed = computed(() => {
  return dateList.value.filter((i) => i > 2)
})
console.log(dateListComputed.value, '==dateListComputed')
</script>

<template>
  <div>原始数据:{{ dateList }}</div>
  <div>数据:{{ dateListComputed }}</div>
</template>

<style scoped></style>
