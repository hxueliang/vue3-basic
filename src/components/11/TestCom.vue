<!-- 
  11-TestCom
-->

<script setup>
const count = 100;
const fn = () => 'fn';

defineExpose({
  count,
  fn
});
</script>

<template>
  <div>
    测试组件 {{ count }}
  </div>
</template>
