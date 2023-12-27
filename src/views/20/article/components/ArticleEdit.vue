<script setup>
import { computed, ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { getActicleAPI, addActicleAPI, editActicleAPI } from '@/api/20/article';

import ChannelSelect from './ChannelSelect.vue';

const visibleDrawer = ref(false);
const formRef = ref(null);
const defaultForm = {
  title: '',
  cate_id: '',
  content: '',
  cover_img: '',
  state: '',
};
const formModel = ref({ ...defaultForm });
const rules = {
  title: [],
  cate_id: [],
  content: [],
  cover_img: [],
  state: [],
};
const emit = defineEmits(['update']);
const imageUrl = ref('');

const onChange = (data) => {
  imageUrl.value = URL.createObjectURL(data.raw);
  formModel.value.cover_img = data.raw;
  /*
  // 如何后端另外提供了上传接口，可以在点击确认按钮时，先调上传文件，接口拿到url
  const formData = new FormData();
  formData.append('image', data.raw);
  fetch('http://geek.itheima.net/v1_0/upload', {
    method: 'POST',
    body: formData,
  });
  */
};

const handleSubmit = async () => {
  await formRef.value.validate();
  const isEdit = !!formModel.value.id;
  try {
    isEdit
      ? await editActicleAPI(formModel.value)
      : await addActicleAPI(formModel.value);
    ElMessage.success(isEdit ? '编辑成功' : '添加成功');
    emit('update');
  } catch (err) {
    console.log(err);
  }

  visibleDrawer.value = false;
};

// 标题
const title = computed(() => {
  return formModel.value.id ? '编辑文章' : '添加文章';
});


const open = async ({ id } = {}) => {
  if (id) {
    try {
      const { data } = await getActicleAPI({ id });
      formModel.value = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    formModel.value = { ...defaultForm };
  }
  visibleDrawer.value = true;
};

defineExpose({
  open,
});
</script>

<template>
  <el-drawer v-model="visibleDrawer" :title="title" size="50%">
    <el-form ref="formRef" :model="formModel" :rules="rules">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <ChannelSelect v-model="formModel.cate_id" width="100%" />
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload class="avatar-uploader" :show-file-list="false" :auto-upload="false" :on-change="onChange">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <QuillEditor v-model:content="formModel.content" content-type="html" theme="snow" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">发布</el-button>
        <el-button type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
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
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}

.editor {
  width: 100%;

  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>