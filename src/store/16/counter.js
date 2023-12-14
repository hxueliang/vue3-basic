import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  /**
   * count
   */
  const count = ref(10); // 相当与state
  const doubleCount = computed(() => count.value * 2); // 相当与getter
  const addCount = () => count.value++; // 相当与action + mutation
  const subCount = (value = 1) => count.value -= value; // 相当与action + mutation

  /**
   * msg
   */
  const msg = ref('hello');

  return {
    count,
    doubleCount,
    addCount,
    subCount,

    msg,
  };
});