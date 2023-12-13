<!-- 
  13-defineOptions

  因为，使用了 setup 语法糖，不能很好的提供 setup 平级的属性

  所以，在 vue 3.3 中新引入了 defineOptions 宏。
  顾名思义，主要是用来定义 Options API的选项。
  可以用defineoptions 定义任意的选项， 
  props, emits, expose, slots 除外（因为这些可以使用 defineXxx 来做到）
-->

<!-- <script>
export default {
  name: 'LoginIndex'
};
</script> -->

<script setup>
defineOptions({
  name: 'LoginIndex',
  // ...更多自定义属性
});
</script>

<template>
  <div>
    defineOptions
  </div>
</template>
