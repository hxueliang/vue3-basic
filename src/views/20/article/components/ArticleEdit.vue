<script setup>
import { computed, ref } from 'vue';

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
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">发布</el-button>
        <el-button type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>