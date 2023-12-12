<!-- 
  06-watch两个参数
-->

<script setup>
import { ref, watch } from "vue";

/**
 * immediate: count
 */
const count = ref(0);
const addCount = () => count.value++;
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

/**
 * deep: obj
 */
const obj = ref({ nama: 'hxl', age: 18 });
const addAge = () => obj.value.age++;
watch(obj, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

/**
 * deep: arr
 */
const arr = ref([1, 2]);
const addArr = () => arr.value[0]++;
watch(arr, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

</script>

<template>
  <div>
    <!-- immediate -->
    <div>
      {{ count }}
      <button @click="addCount">count</button>
    </div>

    <!-- deep: obj -->
    <div>
      {{ obj }}
      <button @click="addAge">obj</button>
    </div>

    <!-- deep: arr -->
    <div>
      {{ arr }}
      <button @click="addArr">arr</button>
    </div>
  </div>
</template>
