<script setup>
import { ref, watch } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

import { userRegisterAPI, userLoginAPI } from '@/api/20/user';
import { useUserStore } from '@/store';

const isRegister = ref(false);

const formData = {
  username: '',
  password: '',
  repassword: '',
};
const formModule = ref({ ...formData });

const form = ref(null);

const formRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 1, max: 10, message: '用户名必需小于10位字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的非空字符', trigger: 'blur' },
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的非空字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== formModule.value.password) {
          callback(new Error('两次密码不匹配'));
        }
        callback();
      },
      trigger: 'blur'
    },
  ],
};

const handleRegister = async () => {
  await form.value.validate();
  // 表单交验通过，调注册接口
  const { message } = await userRegisterAPI(formModule.value);
  ElMessage.success(message || '注册成功');
  isRegister.value = false;
};

const userStore = useUserStore();
const router = useRouter();

const handleLogin = async () => {
  await form.value.validate();
  // 表单交验通过，调注册接口
  const { username, password } = formModule.value;
  const { message, token } = await userLoginAPI({ username, password });
  ElMessage.success(message || '登录成功');
  userStore.setToken(token);
  router.push('/20');
};

watch(isRegister, () => {
  formModule.value = { ...formData };
})

</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form :model="formModule" :rules="formRules" ref="form" size="large" autocomplete="off" v-if="isRegister"
        @keypress.enter="handleRegister">
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModule.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModule.password" :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="formModule.repassword" :prefix-icon="Lock" type="password" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleRegister" class="button" type="primary" auto-insert-space>
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <el-form v-else :model="formModule" :rules="formRules" ref="form" size="large" autocomplete="off"
        @keypress.enter="handleLogin">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModule.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModule.password" name="password" :prefix-icon="Lock" type="password"
            placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleLogin" class="button" type="primary" auto-insert-space>登录</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;

  .bg {
    background: url('@/assets/images/20/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/images/20/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>