<script setup>
import { computed, ref } from 'vue';
import axios from 'axios';
import { Plus } from '@element-plus/icons-vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { getActicleAPI, addActicleAPI, editActicleAPI } from '@/api/20/article';
import { baseURL } from '@/utils/request';

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
};
const emit = defineEmits(['update']);
const imageUrl = ref('');
const quillEditorRef = ref(null);

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

const handleSubmit = async (state) => {
  await formRef.value.validate();
  const isEdit = !!formModel.value.id;
  formModel.value.state = state;
  const fd = new FormData();
  for (const key in formModel.value) {
    fd.append(key, formModel.value[key]);
  }
  try {
    isEdit
      ? await editActicleAPI(fd)
      : await addActicleAPI(fd);
    ElMessage.success(isEdit ? '编辑成功' : '添加成功');
    emit('update', isEdit);
  } catch (err) {
    console.log(err);
  }

  visibleDrawer.value = false;
};

// 标题
const title = computed(() => {
  return formModel.value.id ? '编辑文章' : '添加文章';
});

/**
 * 将网络图片地址转换为File对象
 * chatGPT prompt：封装一个函数，基于 axios， 网络图片地址，转 file 对象， 请注意：写中文注释
 * 
 * @param {string} url 图片地址
 * @param {string} fileName 图片名称
 * @returns file
 */
const imageUrlToFile = async (url, fileName = '图片.jpg') => {
  try {
    // 第一步：使用axios获取网络图片数据
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const imageData = response.data;

    // 第二步：将图片数据转换为Blob对象
    const blob = new Blob([imageData], { type: response.headers['content-type'] });

    // 第三步：创建一个新的File对象
    const file = new File([blob], fileName, { type: blob.type });

    return file;
  } catch (error) {
    console.error('将图片转换为File对象时发生错误:', error);
    throw error;
  }
};

const open = async ({ id } = {}) => {
  if (id) {
    try {
      const { data: {
        title,
        cate_id,
        content,
        cover_img,
        state,
      } } = await getActicleAPI({ id });
      const _cover_img = `${baseURL.slice(0, -1)}${cover_img}`;
      formModel.value = {
        id,
        title,
        cate_id,
        content,
        cover_img: await imageUrlToFile(_cover_img),
        state,
      };
      imageUrl.value = _cover_img;
      setTimeout(() => {
        quillEditorRef.value.setHTML(content);
      });
    } catch (error) {
      console.log(error);
      throw new Error('获取文章列表错误', error);
    }
  } else {
    formModel.value = { ...defaultForm };
    imageUrl.value = '';
    setTimeout(() => {
      quillEditorRef.value.setHTML('');
    });
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
          <QuillEditor v-model:content="formModel.content" ref="quillEditorRef" content-type="html" theme="snow" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit('已发布')">发布</el-button>
        <el-button type="info" @click="handleSubmit('草稿')">草稿</el-button>
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