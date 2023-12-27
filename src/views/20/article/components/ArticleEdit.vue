<script setup>
import { computed, ref } from 'vue';

const visibleDrawer = ref(false);
const formRef = ref(null);
const formModel = ref({});

const handleSubmit = async () => {
  visibleDrawer.value = false;
};

// 标题
const title = computed(() => {
  return formModel.value.id ? '编辑文章' : '添加文章';
});


const open = (data = {}) => {
  visibleDrawer.value = true;
  formModel.value = { ...data };
};

defineExpose({
  open,
});
</script>

<template>
  <el-drawer v-model="visibleDrawer" :title="title" size="50%">
    <el-form ref="formRef">
      <el-form-item>
        <el-button @click="handleSubmit"></el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>