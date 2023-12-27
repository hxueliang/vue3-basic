<script setup>
import { ref } from 'vue';

import { acticleTypeAPI } from '@/api/20/article';

const typeList = ref([]);
const getTypeList = async () => {
  try {
    const res = await acticleTypeAPI();
    typeList.value = res.data;
  } catch (error) {
    console.log(error);
  }
};
getTypeList();

defineProps({
  modelValue: { type: [String, Number] },
  width: String,
});
const emit = defineEmits(['update:modelValue']);

</script>

<template>
  <el-select :modelValue="modelValue" :style="{ width }" @update:modelValue="emit('update:modelValue', $event)">
    <el-option v-for="{ id, cate_name } in typeList" :key="id" :label="cate_name" :value="id"></el-option>
  </el-select>
</template>