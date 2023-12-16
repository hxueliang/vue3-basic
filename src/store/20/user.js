
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('channel', () => {
  const token = ref('');

  const setToken = (value) => token.value = value;

  return {
    token,
    setToken,
  };
}, {
  persist: true,
});