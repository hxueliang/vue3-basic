<!-- 
  06-watch两个参数

  immediate
    作用：在侦听创建时立即触发回调，响应式数据变化之后继续执行回调

  deep
    作用：深度监视，可以监视复杂类型数据，内部所有属性的变化，，默认是浅层监视
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
}, {
  immediate: true,
});

/**
 * deep: obj
 */
const obj = ref({ nama: 'hxl', age: 18 });
const addAge = () => obj.value.age++;
watch(obj, (newValue, oldValue) => {
  console.log(newValue, oldValue);
}, {
  deep: true
});

/**
 * deep: arr
 */
const arr = ref([1, 2]);
const addArr = () => arr.value[0]++;
watch(arr, (newValue, oldValue) => {
  console.log(newValue, oldValue);
}, {
  deep: true
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
