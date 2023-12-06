<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
const formModel = ref({
  username: '',
  password: '',
  remeber: '',
  chickPassword: ''
})
const isLogin = ref(false)
const forgotPassword = () => {
  // isLogin.value=!isLogin
  console.log('忘记密码')
}
const sumbit = () => {
  console.log(`${isLogin.value ? '登录' : '注册'}`)
  isLogin.value = !isLogin.value
}
const changeIsLogin = () => {
  isLogin.value = !isLogin.value
}
</script>

<template>
  <div>
    <el-row class="login">
      <el-col :span="12" class="bg"></el-col>
      <el-col :span="6" :offset="3" class="login-box">
        <el-form :model="formModel">
          <el-form-item>
            <h1>{{ isLogin ? '登录' : '注册' }}</h1>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formModel.username"
              placeholder="请输入用户名"
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formModel.password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
            />
          </el-form-item>
          <el-form-item v-if="!isLogin">
            <el-input
              v-model="formModel.chickPassword"
              placeholder="请再次输入密码"
              :prefix-icon="Lock"
            />
          </el-form-item>
          <el-form-item v-if="isLogin">
            <el-checkbox
              v-model="formModel.remeber"
              label="记住我"
              size="large"
            />
            <el-button @click="forgotPassword" type="primary" link
              >忘记密码?</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button class="btn" @click="sumbit" type="primary">{{
              isLogin ? '登录' : '注册'
            }}</el-button>
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
