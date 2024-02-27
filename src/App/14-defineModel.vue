<!-- 
  14-defineModel

  在vue3中，自定义组件上使用 v-model，
  相当于传递一个 modelvalue 属性，
  同时触发 update:modelvalue 事件

  是测试中的api：需在 vite.config.js 中配置开启
-->

<script setup>
import { ref } from 'vue';
import MyInput from '@/components/14/MyInput.vue';

const value = ref('');
</script>

<template>
  <div>
    {{ value }}
    <MyInput v-model="value" />
    <!-- 相当于 -->
    <MyInput :modelValue="value" @update:modelValue="value = $event" />
  </div>
</template>
