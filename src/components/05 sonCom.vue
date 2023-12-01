<script setup>
// 注意：由于写了setup，所以无法直接配置props选项
// 所以，此处需要借助于”编译器宏“函数接收子组件传递的数据
  const props =defineProps({
    car:String,
    money:Number,
    getMoney:Function
  });
  console.log(props,"====props")

  const emit = defineEmits(['changeMoney'])
  const buy = ()=>{
    emit('changeMoney',5)
  }
</script>

<template>
  <div class="son">
    我是子组件 {{car}}---{{money}}
    <button @click="buy">花钱</button>
  </div>
</template>

<style scoped>
.son{
  border: 1px solid #000;
  padding:30px;
}
</style>
