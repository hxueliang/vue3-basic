
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('20-user', () => {
  const token = ref('');

  const setToken = (value) => token.value = value;

  return {
    token,
    setToken,
  };
}, {
  persist: true,
});