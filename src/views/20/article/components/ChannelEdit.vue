<script setup>
import { ref, computed } from 'vue';

import { addActicleTypeAPI, editActicleTypeAPI } from '@/api/20/article';

const dialogVisible = ref(false);
const formRef = ref(null);
const emit = defineEmits(['update']);

// 表单数据
const formModel = ref({
  cate_name: '',
  cate_alias: '',
});

// 效验规则
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    { pattern: /^\S{1,10}$/, message: '分类名必须是1-10位的非空字符', trigger: 'blur' },
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]{1,15}$/, message: '分类名必须是1-15位的字母或数字', trigger: 'blur' },
  ],
};

// 标题
const title = computed(() => {
  return formModel.value.id ? '编辑分类' : '添加分类';
});

// 确认
const handleConfirm = async () => {
  await formRef.value.validate();
  const isEdit = !!formModel.value.id;
  try {
    isEdit
      ? await editActicleTypeAPI(formModel.value)
      : await addActicleTypeAPI(formModel.value);
    ElMessage.success(isEdit ? '编辑成功' : '添加成功');
    emit('update');
  } catch (err) {
    console.log(err);
  }
  dialogVisible.value = false;
};

// 打开
const open = row => {
  dialogVisible.value = true;
  formModel.value = { ...row };
};

// 关闭
const close = () => {
  formRef.value.resetFields(); // 清除效验提示信息
};

defineExpose({
  open,
});
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="title" width="30%" @close="close">
    <el-form :model="formModel" :rules="rules" ref="formRef" label-width="100px" style="padding-right: 30px;">
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="formModel.cate_name" placeholder="请输入分类名称"></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="formModel.cate_alias" placeholder="请输入分类别名"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>