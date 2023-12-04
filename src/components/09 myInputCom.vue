
<!--
原始写法
<script setup>
 defineProps({
  modelValue:String
 });
 const emit=defineEmits(['uodate:modelValue']);
</script>
<template>
  <div>
    <input type="text" :value="modelValue" @input="e=>emit('update:modelValue',e.target.value)"/>
  </div>
</template>
-->
<script setup>
import {defineModel} from "vue"
 const modelValue = defineModel()
 const emit=defineEmits(['uodate:modelValue']);
</script>
<template>
  <div>
    <input type="text" :value="modelValue" @input="e=>modelValue=e.target.value"/>
  </div>
</template>

<style scoped>
</style>