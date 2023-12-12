<script setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header df">
        <span>{{ title }}</span>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<style scoped lang="scss">
.box-card {
  min-height: 100%;
  box-sizing: border-box;
  .card-header {
    justify-content: space-between;
  }
}
</style>
