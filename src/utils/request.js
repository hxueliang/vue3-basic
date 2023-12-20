import axios from 'axios';
import { ElMessage } from 'element-plus';

import { useUserStore } from '@/store';
import router from '@/router';

const baseURL = 'https://big-event-vue-api-t.itheima.net/'; // 20-大件事案例

const request = axios.create({
  baseURL,
  timeout: 5000,
});

const userStore = useUserStore();

// 添加请求拦截器
request.interceptors.request.use((config) => {
  const token = userStore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(({ data, message }) => {
  // 2xx 范围内的状态码都会触发该函数
  if (data.code === 0) {
    return data;
  }
  ElMessage.error(message || '服务器繁忙');
  return Promise.reject(data);
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数
  const { status, data } = error.response;
  if (status === 401) {
    userStore.setToken('');
    router.navigate('/20/login');
    window.location.reload();
  }
  ElMessage.error(data.message || '服务器繁忙');
  return Promise.reject(error);
});

export default request;

export { baseURL };