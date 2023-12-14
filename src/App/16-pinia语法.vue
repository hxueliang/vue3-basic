<!-- 
  16-pinia语法
-->

<script setup>
import Son1com from '@/components/15/Son1Com.vue';
import Son2com from '@/components/15/Son2Com.vue';
import { useCounterStore } from '@/store/16/counter.js';

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h2>
      App Com
      * {{ counterStore.count }}
      * {{ counterStore.msg }}
    </h2>
    <Son1com />
    <Son2com />
  </div>
</template>
