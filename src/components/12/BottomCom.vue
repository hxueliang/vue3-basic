<!-- 
  12-BottomCom
-->

<script setup>
import { inject } from 'vue';

// 接收字体颜色
const fontColor = inject('fontColor');

// 接收背景颜色
const bgColor = inject('bgColor');

// 接收修改颜色方法
const changeColor = inject('changeColor');

// 随机修改颜色
const colorArr = ['yellow', 'green', 'pink', 'wheat', 'yellowgreen'];
const handleRandom = () => {
  const index = Math.floor(Math.random() * colorArr.length);
  changeColor(colorArr[index]);
};
</script>

<template>
  <div>
    <h4 :style="{ color: fontColor, background: bgColor }">
      底层组件
      <button @click="() => changeColor('grey')">grey</button>
      <button @click="handleRandom">random color</button>
    </h4>
  </div>
</template>
