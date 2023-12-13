<!-- 
  11-模板引用
-->

<script setup>
import TestCom from '@/components/11/TestCom.vue';
</script>

<template>
  <div>
    <div>
      <input type="text">
      <button>点击让输入框获取焦点</button>
    </div>
    <TestCom />
  </div>
</template>
