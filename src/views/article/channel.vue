<script setup>
import { getChannelService, delChannelService } from '@/api/articel'
import { ref } from 'vue'
import ChannelEdit from './components/channelEdit.vue'

const loading = ref(false)
const channelList = ref([])
const getList = async () => {
  loading.value = true
  const res = await getChannelService()
  channelList.value = res.data.data
  loading.value = false
}
getList()

const dialogRef = ref(null)
const handleEdit = (index, row) => {
  console.log(index, row, '===编辑')
  dialogRef.value.open(row)
}
const handleDelete = async (index, row) => {
  console.log(index, row, '删除')
  await ElMessageBox.confirm('你确定要删除吗', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
  await delChannelService(row.id)
  ElMessage.success('删除成功')
  getList()
}
const addChannel = () => {
  dialogRef.value.open({})
}
const onSuccess = () => {
  getList()
}
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button @click="addChannel" type="primary">添加分类</el-button>
    </template>

    <el-table :data="channelList" style="width: 100%" v-loading="loading">
      <el-table-column label="序号" type="index" width="200"> </el-table-column>
      <el-table-column prop="cate_name" label="分类名称"> </el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"> </el-table-column>
      <el-table-column label="操作" width="160">
        <template #default="{ $index, row }">
          <el-button
            size="small"
            type="primary"
            @click="handleEdit($index, row)"
          >
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete($index, row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
    <ChannelEdit ref="dialogRef" @success="onSuccess"></ChannelEdit>
  </PageContainer>
</template>

<style scoped lang="scss"></style>
