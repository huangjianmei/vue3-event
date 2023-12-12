<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdatePwdService } from '@/api/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const formRef = ref()
const formModel = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})
const checkDifferent = (rule, value, callback) => {
  if (value === formModel.value.old_pwd) {
    callback(new Error('新密码不能与原密码一样'))
  } else {
    callback()
  }
}
const checkSameAsNewPwd = (rule, value, callback) => {
  if (value !== formModel.value.new_pwd) {
    callback(new Error('两次密码不一致'))
  } else {
    callback()
  }
}
const rules = ref({
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    {
      min: 6,
      max: 15,
      message: '原密码长度在6-15位之间',
      trigger: 'blur'
    }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      min: 6,
      max: 15,
      message: '新密码长度在6-15位之间',
      trigger: 'blur'
    },
    {
      validator: checkDifferent,
      trigger: 'blur'
    }
  ],
  re_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      min: 6,
      max: 15,
      message: '新密码长度在6-15位之间',
      trigger: 'blur'
    },
    {
      validator: checkSameAsNewPwd,
      trigger: 'blur'
    }
  ]
})
const submitPwd = async () => {
  await formRef.value.validate()
  await userUpdatePwdService(formModel.value)
  ElMessage.success('修改成功')
  userStore.setToken('')
  userStore.setUser({})
  router.push('/login')
}
const reset = () => {
  console.log(formRef, '===formRef.value')
  if (formRef.value) return
  formRef.value.resetFields()
}
</script>

<template>
  <page-container title="重置密码">
    <el-form :model="formModel" :rules="rules" ref="formRef">
      <el-form-item label="原密码" prop="old_pwd">
        <el-input v-model="formModel.old_pwd" type="password" show-password />
      </el-form-item>
      <el-form-item label="新密码" prop="new_pwd">
        <el-input v-model="formModel.new_pwd" type="password" show-password />
      </el-form-item>
      <el-form-item label="确认新密码" prop="re_pwd">
        <el-input v-model="formModel.re_pwd" type="password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitPwd">修改</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </page-container>
</template>

<style scoped></style>
