<!-- 
  09-父子通信
-->

<script setup>
import SonCom from '@/components/09/SonCom.vue';
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    <h3>
      父组件
      <button @click="() => count++">+count</button>
    </h3>

    <!-- 传普通值 -->
    <!-- 传响应式值 -->
    <SonCom msg="父传给子的message" :count="count" />
  </div>
</template>
