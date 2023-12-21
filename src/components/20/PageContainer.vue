<script setup>
defineProps({
  title: { required: true, type: String },
});
</script>

<template>
  <el-card class="page-container">
    <!-- 头部 -->
    <template #header>
      <div class="header">
        <span>{{ title }}</span>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>

    <!-- 主体 -->
    <slot></slot>
  </el-card>
</template>

<style lang="scss">
.page-container {
  min-height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>