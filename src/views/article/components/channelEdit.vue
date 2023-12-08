<script setup>
import { ref, defineEmits } from 'vue'
import { addChannelService, editChannelService } from '@/api/articel'

const dialogVisible = ref(false)
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const formRules = ref({
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-z0-9]{1,15}$/,
      message: '分类名必须是1-15位的字母或数字',
      trigger: 'blur'
    }
  ]
})
const formRef = ref(null)

const open = (row) => {
  dialogVisible.value = true
  formModel.value = row
}
const emit = defineEmits(['success'])
const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    await editChannelService(formModel.value)
    ElMessage.success('编辑成功')
  } else {
    await addChannelService(formModel.value)
    ElMessage.success('添加成功')
  }
  dialogVisible.value = false
  emit('success')
}

defineExpose({
  open
})
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formModel.id ? '编辑分类' : '添加分类'"
    width="30%"
  >
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      label-width="100px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="formModel.cate_name" />
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="formModel.cate_alias" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialogh-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
