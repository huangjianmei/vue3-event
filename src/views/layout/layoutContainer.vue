<script setup>
import {
  Management,
  Document,
  EditPen,
  User,
  UserFilled,
  Crop,
  CaretBottom,
  SwitchButton
} from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const handleCommand = async (key) => {
  if (key === 'logout') {
    await ElMessageBox.confirm('你确定要退出吗？', '温馨提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })

    userStore.removeToken()
    userStore.setUser({})
    // router.push("/login")
    window.location.reload()
  } else {
    router.push(`/user/${key}`)
  }
}

onMounted(() => {
  userStore.getUserInfo()
  console.log(userStore.userInfo, '==userInfo')
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="el-aside_logo"></div>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#232323"
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          text-color="#fff"
          router
        >
          <el-menu-item index="/article/channel">
            <el-icon><management /></el-icon>
            <span>文章分类</span>
          </el-menu-item>
          <el-menu-item index="/article/manage">
            <el-icon><document /></el-icon>
            <span>文章管理</span>
          </el-menu-item>
          <el-sub-menu index="/user/profile">
            <template #title>
              <el-icon><userFilled /></el-icon>
              <span>个人中心</span>
            </template>
            <el-menu-item index="/user/profile"
              ><el-icon><user /></el-icon>
              <span>基本资料</span>
            </el-menu-item>
            <el-menu-item index="/user/avatar">
              <el-icon><crop /></el-icon>
              <span>更换头像</span>
            </el-menu-item>
            <el-menu-item index="/user/password">
              <el-icon><editPen /></el-icon>
              <span>重置密码</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>黑马程序员：{{ userStore.userInfo.username }}</div>
          <div class="df">
            <el-avatar :size="40" :src="userStore.user_pic" />
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <el-icon class="el-icon--right">
                  <caret-bottom />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="profile">
                    <el-icon><user /></el-icon>
                    <span>基本资料</span>
                  </el-dropdown-item>
                  <el-dropdown-item command="avatar">
                    <el-icon><crop /></el-icon>
                    <span>更换头像</span>
                  </el-dropdown-item>
                  <el-dropdown-item command="password">
                    <el-icon><editPen /></el-icon>
                    <span>重置密码</span>
                  </el-dropdown-item>
                  <el-dropdown-item command="logout">
                    <el-icon><switchButton /></el-icon>
                    <span>退出登录</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-aside {
  height: 100vh;
  background: #232323;
  .el-aside_logo {
    height: 140px;
    background: url('../../assets/logo.png') no-repeat center/cover;
    background-size: 60%;
  }
}
.el-container {
  background: #f2f2f2;
  .el-main,
  .el-header {
    background: #fff;
  }
  .el-header {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
