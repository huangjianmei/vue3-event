<script setup>
import { getActicelService } from '@/api/articel'
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import channelSelect from './components/channelSelect.vue'
import { formatTime } from '@/utils/format'

const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})
const articelList = ref([
  {
    id: 1,
    title: '文章标题',
    cate_name: '体育',
    pub_date: '2023080979',
    state: '已发布'
  },
  {
    id: 2,
    title: '文章标题文章标题',
    cate_name: '新闻',
    pub_date: '202389789',
    state: '草稿'
  }
])
const formRef = ref(null)
const total = ref(0)
const loading = ref(false)
const getList = async () => {
  loading.value = true
  const res = await getActicelService(params.value)
  console.log(res.data.data)
  loading.value = false
  articelList.value = res.data.data
  total.value = res.data.total
}
const onSubmit = () => {
  console.log('搜索')
  getList()
}
const onReset = () => {
  params.value = {}
}

const handleEdit = (i, row) => {
  console.log(i, row, '===编辑')
}

const handleDelete = (i, row) => {
  console.log(i, row, '===shanchu')
}

const handleSizeChange = (pagesize) => {
  params.value.pagesize = pagesize
  getList()
}
const handleCurrentChange = (pagenum) => {
  params.value.pagenum = pagenum
  getList()
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary">文章管理</el-button>
    </template>
    <el-form :model="params" ref="formRef" inline>
      <el-form-item label="文章分类">
        <channel-select v-model="params.cate_id" />
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select v-model="params.state">
          <el-option label="已发布" value="已发布" />
          <el-option label="草稿" value="草稿" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="articelList" style="width: 100%" v-loading="loading">
      <el-table-column prop="title" label="文章标题" />
      <el-table-column prop="cate_name" label="分类" />
      <el-table-column prop="pub_date" label="发布时间">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
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
    <el-pagination
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[2, 3, 5, 10]"
      :background="true"
      layout="jumper,total, sizes, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </PageContainer>
</template>

<style scoped></style>
