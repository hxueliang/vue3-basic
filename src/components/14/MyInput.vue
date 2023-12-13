<!-- 
  14-MyInput
-->

<script setup>
import { defineModel } from 'vue';

/*
// 旧版Vue3，v-model
defineProps({ modelValue: String });
const emit = defineEmits(['update:modelValue']);
*/

// 新版Vue3，v-model
const modelValue = defineModel();
</script>

<template>
  <div>
    <!-- 旧版Vue3，v-model -->
    <!--
    <input :value="modelValue" @input="e => emit('update:modelValue', e.target.value)" />
    -->

    <!-- 旧版Vue3，v-model -->
    <input :value="modelValue" @input="e => modelValue = e.target.value" />
  </div>
</template>
