<script setup>
import { ref, defineEmits } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import channelSelect from './channelSelect.vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {
  artPublishService,
  getArticleService,
  artEditService
} from '@/api/articel'
import { baseURL } from '@/utils/request'
import axios from 'axios'

const drawerVisible = ref(false)
const direction = ref('rtl')
const defaultForm = {
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
}
const drawertForm = ref({ ...defaultForm })
const drawertRule = ref({
  title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],
  cate_id: [{ required: true, message: '请选择文章分类', trigger: 'change' }],
  cover_img: [{ required: true, message: '请上传照片', trigger: 'change' }]
})
const editorRef = ref(null)
const emit = defineEmits(['successPublish'])
const openDrawer = async (row) => {
  drawerVisible.value = true
  if (row.id) {
    const res = await getArticleService(row.id)
    drawertForm.value = res.data.data
    imgUrl.value = baseURL + drawertForm.value.cover_img
    drawertForm.value.cover_img = await imageUrlToFileObject(
      imgUrl.value,
      drawertForm.value.cover_img
    )
  } else {
    drawertForm.value = { ...defaultForm }
    imgUrl.value = ''
    editorRef.value.setHTML('')
  }
}

async function imageUrlToFileObject(imageUrl, filename) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const blob = new Blob([response.data], {
      type: response.headers['content-type']
    })
    const file = new File([blob], filename, {
      type: response.headers['content-type']
    })
    return file
  } catch (error) {
    console.error('error converting image url to filr object', error)
    return null
  }
}

const publishOrSave = async (state) => {
  drawertForm.value.state = state
  const fd = new FormData()
  for (let key in drawertForm.value) {
    fd.append(key, drawertForm.value[key])
  }
  if (drawertForm.value.id) {
    await artEditService(fd)
    drawerVisible.value = false
    ElMessage.success('修改成功')
    emit('successPublish', 'edit')
  } else {
    await artPublishService(fd)
    drawerVisible.value = false
    ElMessage.success('添加成功')
    emit('successPublish', 'add')
  }
}
const imgUrl = ref()
const onSelectFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
  drawertForm.value.cover_img = uploadFile.raw
}

defineExpose({
  openDrawer
})
</script>
<template>
  <el-drawer v-model="drawerVisible" :direction="direction">
    <template #header>
      <h4>大标题</h4>
    </template>
    <template #default>
      <el-form :model="drawertForm" :rules="drawertRule">
        <el-form-item label="文章标题" prop="title">
          <el-input
            placeholder="请输入文章标题"
            v-model="drawertForm.title"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章分类" prop="cate_id">
          <channel-select :width="'100%'" v-model="drawertForm.cate_id" />
        </el-form-item>
        <el-form-item label="文章封面" prop="cover_img">
          <!-- 此处关闭自动上传，不需要配置action
              只需要做前端预览图片即可，无需再提交前上传图片
              语法： URL.createObjectUrRL(...)穿件本地预览的地址，来预览

              action的方式适合post 请求，参数file
            -->
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="onSelectFile"
          >
            <img v-if="imgUrl" :src="imgUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <div class="editor">
            <quill-editor
              ref="editorRef"
              v-model:content="drawertForm.content"
              content-type="html"
              theme="snow"
            />
          </div>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="publishOrSave('已发布')" type="primary"
          >发布</el-button
        >
        <el-button @click="publishOrSave('草稿')">草稿</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
:deep(.ql-container) {
  min-height: 150px;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
