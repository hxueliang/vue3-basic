<!-- 
  15-Son2Com
-->

<script setup>
import { useCounterStore } from '@/store/16/counter.js';

const counterStore = useCounterStore();
</script>

<template>
  <div class="son">
    <h3>
      Son2 Com
      * {{ counterStore.count }}
      <button @click="counterStore.subCount()">-</button>
      <button @click="() => counterStore.subCount(2)">-2</button>
    </h3>
  </div>
</template>

<style scoped>
.son {
  color: #6155d2;
  border: 1px solid #6155d2;
  padding: 20px;
}
</style>
