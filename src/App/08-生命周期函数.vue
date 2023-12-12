<!-- 
  08-生命周期函数
-->

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

/**
 * Vue3的选项式api         => Vue3的组合式api
 * 
 * beforeCreate/created   => setup
 * beforeMount            => onBeforeMount
 * mounted                => onMounted
 * beforeUpdate           => onBeforeUpdate
 * updated                => onUpdated
 * beforeUnmount          => onBeforeUnmount
 * unmounted              => onUnmounted
 */

/**
 * 在beforeCreate/created中做的事，放在setup中
 * 如：发送ajax请求在setup中进行
 */
const getList = () => {
  setTimeout(() => {
    console.log('请求成功，响应数据');
  }, 1000);
};
getList();

/**
 * 在mounted执行的逻辑，在onMounted中执行
 */
onMounted(() => {
  console.log('mounted生命周期函数 - 逻辑1');
});

/**
 * 写成函数式调，可以写多次，并不会冲突，
 * 会按照书写顺序，依次执行
 */
onMounted(() => {
  console.log('mounted生命周期函数 - 逻辑2');
});

/**
 * 创建定时器，用于测onBeforeUnmount
 */
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    console.log('定时器...');
  }, 2000);
});

/**
 * 在beforeUnmount，放在onBeforeUnmount
 * Todo: 持续添加路由模块，再回来测试
 */
onBeforeUnmount(() => {
  clearInterval(timer);
  alert('beforeUnmount生命周期函数');
});
</script>

<template>
  <div>
  </div>
</template>
