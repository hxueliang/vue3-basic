<!-- 
  05-watch
-->

<script setup>
import { ref } from "vue";

const count = ref(0);
const name = ref('Vue');

const addCount = () => count.value++;
const setName = () => name.value += 12345;

</script>

<template>
  <div>
    {{ count }}
    <br />
    {{ name }}
    <br />
    <button @click="addCount">count</button>
    <button @click="setName">name</button>
  </div>
</template>
