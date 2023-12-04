<script setup>
  import { storeToRefs } from "pinia"
  import Son1Com from "@/components/10 son1Com.vue"
  import Son2Com from "@/components/10 son2Com.vue"
  import { useCounterStore } from "@/stores/counter"
  import { useChannelStore } from "@/stores/channel"
  const counterStore = useCounterStore()
  const channelStore = useChannelStore()
  // 此时，直接解构就，不处理，数据会丢失响应式
  const { count } = storeToRefs(counterStore);
</script>
<template>
  <div>
    <h1>我是首页{{counterStore.count}}</h1>
    {{count}}
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <button @click="channelStore.getList">点击获取频道信息</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
