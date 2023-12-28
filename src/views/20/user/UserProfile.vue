<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

import { useUserStore } from '@/store';
import { updateUesrInfoAPI } from '@/api/20/user';

const {
  user: { id, username, nickname, email },
  getUser,
} = useUserStore();

const formData = ref({
  id,
  username,
  nickname,
  email,
});
const formRef = ref(null);

const formRules = ref({
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    { pattern: /^\S{2,10}$/, message: '长度在 2 到 10 位非空字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入用户邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
  ]
});

const submitForm = async () => {
  try {
    await formRef.value.validate();
    await updateUesrInfoAPI(formData.value);
    await getUser();
    ElMessage.success('修改成功');
  } catch (error) {
    console.log(error);
    return false;
  }
};
</script>

<template>
  <PageContainer title="基本资料">
    <el-form :model="formData" :rules="formRules" ref="formRef" label-width="80px">
      <el-form-item label="登录名称">
        <el-input v-model="formData.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="formData.nickname"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交修改</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>