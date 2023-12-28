<script setup>
import { ref } from 'vue';
import { Plus, Upload } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

import { useUserStore } from '@/store';
import { updateUserAvatarAPI } from '@/api/20/user';

const {
  user: { user_pic },
  getUser,
} = useUserStore();
const imageUrl = ref(user_pic);
const uploadRef = ref(null);

/**
 * 更换图片
 * @param {file} file 文件对象
 */
const onChange = (file) => {
  // 生成Base64
  const reader = new FileReader();
  reader.readAsDataURL(file.raw);
  reader.onload = () => {
    imageUrl.value = reader.result;
  };
};

/**
 * 提交更换图片
 */
const hnadleUpdateAvatar = async () => {
  try {
    await updateUserAvatarAPI({ avatar: imageUrl.value });
    await getUser();
    ElMessage.success('更换头像成功');
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <PageContainer title="更换头像">
    <el-upload class="avatar-uploader" ref="uploadRef" :auto-upload="false" :show-file-list="false" :on-change="onChange">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>

    <el-button type="primary" @click="uploadRef.$el.querySelector('input').click()" :icon="Plus"
      size="large">选择图片</el-button>
    <el-button type="success" @click="hnadleUpdateAvatar" :icon="Upload" size="large">上传头像</el-button>
  </PageContainer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  margin-bottom: 20px;

  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>