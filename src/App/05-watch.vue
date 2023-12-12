<!-- 
  05-watch

  作用：
    侦听一个或者多个数据变化，数据变化时执行回调函数

  两个额外的参数：
    1、immediate(立即执行) 
    2、deep(深度侦听)
-->

<script setup>
import { ref, watch } from "vue";

const count = ref(0);
const name = ref('Vue');

const addCount = () => count.value++;
const setName = () => name.value += 12345;

// 侦听一个值
watch(count, (newValue, oldValue) => {
  console.log('1个值', newValue, oldValue);
});

// 侦听多个值
watch([count, name], (newArr, oldArr) => {
  console.log('多个值', newArr, oldArr);
});

</script>

<template>
  <div>
    {{ count }}
    <br />
    {{ name }}
    <br />
    <button @click="addCount">count</button>
    <button @click="setName">name</button>
  </div>
</template>
