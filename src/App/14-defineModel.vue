<!-- 
  14-defineModel

  在vue3中，自定义组件上使用v-model，
  相当于传递一个modeIvalue属性，
  同时触发 update:modelvalue 事件
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
