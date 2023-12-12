<!-- 
  10-SonCom
-->

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['getName', 'getAge']);

/**
 * 传普通字符串
 */
const sendName = () => {
  emit('getName', 'hxl');
};

/**
 * 传应式数据
 */
const age = ref(0);
const sendAge = () => {
  age.value++;
  emit('getAge', age);
};
</script>

<template>
  <div class="son">
    子组件
    - <button @click="sendName">set Name</button>
    - <button @click="sendAge">set Age</button>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #000;
  padding: 20px;
}
</style>
