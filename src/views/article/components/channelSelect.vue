<script setup>
import { getChannelService } from '@/api/articel'
import { ref, defineEmits, defineProps } from 'vue'

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
const channelList = ref([])
const getList = async () => {
  const res = await getChannelService()
  channelList.value = res.data.data
  console.log(channelList.value, '====channelList')
}
getList()
</script>

<template>
  <el-select
    :style="{ width }"
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <el-option
      v-for="item in channelList"
      :label="item.cate_name"
      :value="item.id"
      :key="item.id"
    />
  </el-select>
</template>
