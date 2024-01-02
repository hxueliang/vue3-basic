<!--
  elementPlus 和 Vue3 的语法，生成组件代码
  要求：
  一、表单结构要求
    1. 组件中包含一个el-form表单，有四行内容，前三行是表单输入框，第四行是两个按钮
    2. 第一行 label 原密码
    3. 第二行 label 新密码
    4. 第三行 label 确认密码
    5. 第四行两个按钮，修改密码 和 重置

  二、form绑定字段如下：
    const pwdForm = ref({
      old_pwd: '',
      new_pwd: '',
      re_pwd: ''
    })

  三、校验需求
    所有字段，都是 6-15位 非空
    自定义校验1：原密码 和 新密码不能一样
    自定义校验2：新密码 和 确认密码必须一样
-->

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { updateUserPwdAPI } from '@/api/20/user';
import { useUserStore } from '@/store';

const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
});

const pwdRef = ref(null);

const userStore = useUserStore();
const router = useRouter();

const checkPwdDiff = async (rule, value, callback) => {
  if (value === pwdForm.value.old_pwd) {
    callback(new Error('新密码不能与原密码相同'));
  } else {
    callback();
  }
};

const checkPwdSame = async (rule, value, callback) => {
  if (value !== pwdForm.value.new_pwd) {
    callback(new Error('两次输入密码不一致'));
  } else {
    callback();
  }
};

const pwdRules = {
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
    { validator: checkPwdDiff, trigger: 'blur' }
  ],
  re_pwd: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
    { validator: checkPwdSame, trigger: 'blur' }
  ]
};

const submitForm = async (formName) => {
  const valid = await formName.validate();
  if (valid) {
    // 实际应用中，这里应该调用后端接口提交表单数据
    await updateUserPwdAPI(pwdForm.value);
    resetForm(formName);
    userStore.setToken('');
    userStore.setUser({});
    ElMessage.success('修改成功');

    router.push('/20/login');
  } else {
    return false;
  }
};

const resetForm = async (formName) => {
  formName.resetFields();
}

</script>

<template>
  <PageContainer title="修改密码">
    <el-row>
      <el-col :span="8">
        <el-form :model="pwdForm" :rules="pwdRules" ref="pwdRef" label-width="100px">
          <el-form-item label="原密码" prop="old_pwd">
            <el-input v-model="pwdForm.old_pwd"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="new_pwd">
            <el-input v-model="pwdForm.new_pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="re_pwd">
            <el-input v-model="pwdForm.re_pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(pwdRef)">修改密码</el-button>
            <el-button @click="resetForm(pwdRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </PageContainer>
</template>
