<!-- 
  12-provide和inject

  作用：项层组件向任意的底层组件传递数据和方法，实现跨层组件通信
-->

<script setup>
import { provide, ref } from 'vue';
import CenterCom from '@/components/12/CenterCom.vue';

// 普通数据
provide('fontColor', 'blue');

// 响应式数据
const bg = ref('yellow');
provide('bgColor', bg);
setTimeout(() => bg.value = 'green', 1000);

// 提供方法
provide('changeColor', color => bg.value = color);
</script>

<template>
  <div>
    <h2>
      顶层组件
    </h2>
    <CenterCom />
  </div>
</template>
