<!-- 
  04-computed

  最佳实践：
    1、计算属性中不应该有“副作用”
    2、避免直接修改计算属性的值（只读），特殊情况可以配置get、set
-->

<script setup>
import { computed, ref } from 'vue';

const arr = ref([1, 2, 3, 4]);
const arrComputed = computed(() => arr.value.filter(item => item % 2 === 0));
console.log(arrComputed.value);

// getter / setter
const count = ref(0);
const countAdd10 = computed({
  get: () => count.value + 10,
  set: value => count.value = value
})


</script>

<template>
  <div>
    原数据：{{ arr }}
    <br />
    新数据：{{ arrComputed }}
    <br />
    <button @click="() => arr = [...arr, 5, 6]">click</button>
    <hr />
    <br />

    <!-- getter / setter -->
    原数据：{{ count }}
    <br />
    新数据：{{ countAdd10 }}
    <br />
    <button @click="() => countAdd10 = 1">click</button>
    <hr />
  </div>
</template>
