<!-- 
  15-Son1Com
-->

<script setup>
import { useCounterStore } from '@/store/16/counter.js';

const counterStore = useCounterStore();
</script>

<template>
  <div class="son">
    <h3>
      Son1 Com
      * {{ counterStore.count }}
      * {{ counterStore.doubleCount }}
      <button @click="counterStore.addCount">+</button>
    </h3>
  </div>
</template>

<style scoped>
.son {
  color: #c05757;
  border: 1px solid #c05757;
  padding: 20px;
}
</style>
