<!-- 
  15-pinia安装

  是什么：是 vue 的最新 状态管理工具，是 vuex 的 替代品
  1、提供更加简单的API（去掉了 mutation）
  2、提供符合，组合式风格的API（和 vue了 新语法统一）
  3、去掉了 modules 的概念，每一个 store 都是一个独立的模块
  4、配合 Typescript 更加友好，提供可靠的类型推断
-->

<script setup>
import Son1com from '@/components/15/Son1Com.vue';
import Son2com from '@/components/15/Son2Com.vue';
</script>

<template>
  <div>
    <h2>App Com</h2>
    <Son1com />
    <Son2com />
  </div>
</template>
