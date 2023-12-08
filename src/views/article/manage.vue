<script setup>
// import { getActicelService } from '@/api/articel'
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'

const formModel = ref({
  channel: '',
  status: ''
})
const articelList = ref([
  {
    id: 1,
    title: '文章标题',
    cate_name: '体育',
    pub_date: '8789080976879',
    state: '已发布'
  },
  {
    id: 2,
    title: '文章标题文章标题',
    cate_name: '新闻',
    pub_date: '5676786789789',
    state: '草稿'
  }
])
const formRef = ref(null)
const onSubmit = () => {
  console.log('搜索')
}
const onReset = () => {
  formModel.value = {}
}

const handleEdit = (i, row) => {
  console.log(i, row, '===编辑')
}

const handleDelete = (i, row) => {
  console.log(i, row, '===shanchu')
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary">文章管理</el-button>
    </template>
    <el-form :model="formModel" ref="formRef" inline>
      <el-form-item label="文章分类">
        <el-select v-model="formModel.channel" placeholder="请选择">
          <el-option label="体育" value="1" />
          <el-option label="生物" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select v-model="formModel.status" placeholder="请选择">
          <el-option label="已发布" value="已发布" />
          <el-option label="草稿" value="草稿" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="articelList" style="width: 100%">
      <el-table-column prop="title" label="文章标题" />
      <el-table-column prop="cate_name" label="分类" />
      <el-table-column prop="pub_date" label="发布时间" />
      <el-table-column prop="state" label="状态" />
      <el-table-column label="Operations">
        <template #default="{ $index, row }">
          <el-button
            circle
            plain
            type="primary"
            :icon="Edit"
            @click="handleEdit($index, row)"
          ></el-button>
          <el-button
            circle
            plain
            type="danger"
            :icon="Delete"
            @click="handleDelete($index, row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </PageContainer>
</template>

<style scoped></style>
