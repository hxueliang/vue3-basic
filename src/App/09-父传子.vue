<!-- 
  09-父子通信
-->

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    <h3>
      父组件
      <button @click="() => count++">+count</button>
    </h3>
  </div>
</template>
