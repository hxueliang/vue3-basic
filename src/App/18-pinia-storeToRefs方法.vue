<!-- 
  18-pinia-storeToRefs方法

  作用：
    1、普通解构会导致，响应式属性响应性失效
    2、通过storeToRefs方法解构，可以保持响应式属性响应性
    3、解构action(即解构方法)，直接解构就行(因为方法不需要响应性)
-->

<script setup>
import { storeToRefs } from 'pinia';

import Son1com from '@/components/15/Son1Com.vue';
import Son2com from '@/components/15/Son2Com.vue';
import { useCounterStore } from '@/store/16/counter.js';

const counterStore = useCounterStore();

// 直接解构，数据会丢失响应式
// const { count } = counterStore;

// 使用stroreToRefs解构，有响应式
const { count } = storeToRefs(counterStore);

// 直接解构方法
const { addCount, subCount } = counterStore;
</script>

<template>
  <div>
    <h2>
      App Com
      * {{ counterStore.count }}
      <!-- 直接解构无响应式 -->
      <!-- stroreToRefs解构有响应式 -->
      * {{ count }}

      <button @click="addCount">+</button>
      <button @click="subCount()">-</button>
    </h2>
    <Son1com />
    <Son2com />
  </div>
</template>
