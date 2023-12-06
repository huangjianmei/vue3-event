<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { userRegisterService, userLoginService } from '@/api/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})
const remeber = ref('')
const isLogin = ref(true)
const forgotPassword = () => {
  // isLogin.value=!isLogin
  console.log('忘记密码')
}
const sumbit = async (formEl) => {
  console.log(`${isLogin.value ? '登录' : '注册'}`)
  if (!formEl) return
  await formEl.validate()
  loading.value = true
  if (isLogin.value) {
    userLoginService(formModel.value)
      .then(() => {
        ElMessage.success('登录成功')
        // formRef.value.resetFields();
        console.log(router, '===router')
        router.push('/article/manage')
      })
      .finally(() => {
        loading.value = false
      })
  } else {
    userRegisterService(formModel.value)
      .then(() => {
        ElMessage.success('注册成功')
        formRef.value.resetFields()
      })
      .finally(() => {
        loading.value = false
      })
  }

  // await formEl.validate((valid, fields) => {
  //   if (valid) {
  //     // console.log(`${isLogin.value ? '登录' : '注册'}`)
  //     if(isLogin.value ){
  //       console.log("登录登录")
  //     }else{

  //     }
  //     isLogin.value = !isLogin.value
  //   } else {
  //     console.log("失败", fields)
  //   }
  // })
}
const changeIsLogin = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
  isLogin.value = !isLogin.value
}

const formRef = ref(null)

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== formModel.value.password) {
    callback(new Error('两次密码不一致'))
  } else {
    callback()
  }
}
const formRules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '用户名长度为 3到5 个非空字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '用户名长度为 6到15 个非空字符',
      trigger: 'blur'
    }
  ],
  repassword: [{ validator: validatePass2, trigger: 'blur' }]
})

const loading = ref(false)
</script>

<template>
  <div>
    <el-row class="login">
      <el-col :span="12" class="bg"></el-col>
      <el-col :span="6" :offset="3" class="login-box">
        <el-form :model="formModel" ref="formRef" :rules="formRules">
          <el-form-item>
            <h1>{{ isLogin ? '登录' : '注册' }}</h1>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              v-model="formModel.username"
              placeholder="请输入用户名"
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="formModel.password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
              type="password"
            />
          </el-form-item>
          <el-form-item v-if="!isLogin" prop="repassword">
            <el-input
              v-model="formModel.repassword"
              placeholder="请再次输入密码"
              :prefix-icon="Lock"
              type="password"
            />
          </el-form-item>
          <el-form-item v-if="isLogin">
            <el-checkbox v-model="remeber" label="记住我" size="large" />
            <el-button @click="forgotPassword" type="primary" link
              >忘记密码?</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button
              class="btn"
              @click="sumbit(formRef)"
              type="primary"
              :loading="loading"
              >{{ isLogin ? '登录' : '注册' }}</el-button
            >
          </el-form-item>
          <el-button link @click="changeIsLogin">{{
            isLogin ? '注册->' : '<-返回'
          }}</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login {
  height: 100vh;
  background: #fff;
  .bg {
    background:
      url(../../assets/logo.png) no-repeat 60% center/240px auto,
      url(../../assets/login_bg.jpeg) no-repeat center/cover;
  }
  .login-box {
    display: flex;
    align-items: center;
    .el-form {
      width: 100%;
    }
    :deep(.el-form-item__content) {
      justify-content: space-between;
    }
    :deep(.btn) {
      width: 100%;
    }
  }
}
</style>
