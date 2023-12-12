<!-- 
  07-watch侦听对象指定属性
-->

<script setup>
import { ref } from "vue";

const obj = ref({ nama: 'hxl', age: 18 });
const addAge = () => obj.value.age++;

</script>

<template>
  <div>
    {{ obj }}
    <button @click="addAge">obj</button>
  </div>
</template>
