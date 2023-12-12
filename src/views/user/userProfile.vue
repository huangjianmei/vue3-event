<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user'

const {
  userInfo: { id, username, nickname, email },
  getUserInfo
} = useUserStore()
const form = ref({
  id,
  username,
  nickname,
  email
})
const formRef = ref()
const rules = ref({
  // username:[
  //   { required:true,meaasge:"请输入用户名称",trigger:"blur"},
  //   {
  //     pattern: /^\S{1,6}$/,
  //     message: '分类名必须是1-6位的非空字符',
  //     trigger: 'blur'
  //   }
  // ],
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '用户昵称必须是2-10位的非空字符',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: ['blur', 'change']
    }
  ]
})
const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate(async (val) => {
    if (val) {
      console.log('submit!')
      await userUpdateInfoService(form.value)
      getUserInfo()
      ElMessage.success('修改成功')
    }
  })
}
</script>

<template>
  <page-container title="基本信息">
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item
        label="登录名称"
        placeholder="请输入登录名称"
        prop="username"
      >
        <el-input v-model="form.username" disabled />
      </el-form-item>
      <el-form-item
        label="用户昵称"
        placeholder="请输入用户昵称"
        prop="nickname"
      >
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="用户邮箱" placeholder="请输入用户邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交修改</el-button>
      </el-form-item>
    </el-form>
  </page-container>
</template>

<style scoped></style>
