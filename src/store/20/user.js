
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { userInfoAPI } from '@/api/20/user';

export const useUserStore = defineStore('20-user', () => {
  const token = ref('');
  const setToken = (value) => token.value = value;

  const user = ref({});
  const getUser = async () => {
    try {
      const res = await userInfoAPI();
      user.value = res.data;
    } catch (err) {
      new Error('获取用户信息失败');
    }
  };
  const setUser = (obj = {}) => user.value = obj;

  return {
    token,
    setToken,

    user,
    getUser,
    setUser,
  };
}, {
  persist: true,
});