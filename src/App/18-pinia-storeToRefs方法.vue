<!-- 
  18-pinia-storeToRefs方法
-->

<script setup>
import Son1com from '@/components/15/Son1Com.vue';
import Son2com from '@/components/15/Son2Com.vue';
import { useCounterStore } from '@/store/16/counter.js';

const counterStore = useCounterStore();

// 直接解构，数据会丢失响应式
const { count } = counterStore;
</script>

<template>
  <div>
    <h2>
      App Com
      * {{ counterStore.count }}
      <!-- 直接解构无响应式 -->
      * {{ count }}
    </h2>
    <Son1com />
    <Son2com />
  </div>
</template>
