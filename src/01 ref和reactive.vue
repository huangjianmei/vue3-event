<script setup>
import { ref, reactive } from 'vue'

const count = ref(10)
const date = reactive({ age: 23 })
const addCount = () => {
  count.value += 10
  date.age++
}
</script>

<template>
  <div>count{{ count }}</div>
  <hr />
  <div>age:{{ date.age }}</div>
  <hr />
  <button @click="addCount">+10</button>

  <hr />
</template>

<style scoped></style>
