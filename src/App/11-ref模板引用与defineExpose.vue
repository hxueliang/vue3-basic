<!-- 
  11-ref模板引用与defineExpose

  通过ref标识获取真实的dom对象或者组件实例对象
  可以获取dom，也可以获取组件
-->

<script setup>
import { ref } from 'vue';
import TestCom from '@/components/11/TestCom.vue';

const inputRef = ref(null);
const handleClick = () => inputRef.value.focus();

const testRef = ref(null);
const handleClick2 = () => {
  const { count, fn } = testRef.value;
  console.log(count, fn());
};
</script>

<template>
  <div>
    <div>
      <input type="text" ref="inputRef">
      <button @click="handleClick">点击让输入框获取焦点</button>
    </div>
    <br />

    <TestCom ref="testRef" />
    <button @click="handleClick2">点击获取test组件暴露的数据</button>
  </div>
</template>
