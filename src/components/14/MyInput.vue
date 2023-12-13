<!-- 
  14-MyInput
-->

<script setup>

// 旧版Vue3，v-model
defineProps({ modelValue: String });
const emit = defineEmits(['update:modelValue']);

</script>

<template>
  <div>
    <!-- 旧版Vue3，v-model -->
    <input :value="modelValue" @input="e => emit('update:modelValue', e.target.value)" />

  </div>
</template>
