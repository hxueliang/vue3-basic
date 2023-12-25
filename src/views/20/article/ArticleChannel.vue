<script setup>
import { ref } from 'vue';
import { Edit, Delete } from '@element-plus/icons-vue';

import { acticleTypeAPI } from '@/api/20/article';
import ChannelEidt from './components/ChannelEdit.vue';

const loading = ref(false);
const dialog = ref(null);

const channelList = ref([]);
const getChannelList = async () => {
  try {
    loading.value = true;
    const res = await acticleTypeAPI();
    channelList.value = res.data;
    loading.value = false;
  } catch (error) {
    console.log(error);
    loading.value = false;
  }
};
getChannelList();

const handleAddType = () => {
  dialog.value.open({});
};

const handleEdit = row => {
  dialog.value.open(row);
};

const handleDelete = row => {
  console.log(row);
};
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary" @click="handleAddType">添加分类</el-button>
    </template>

    <el-table :data="channelList" v-loading="loading" style="width: 100%">
      <el-table-column type="index" label="序号" width="100" />
      <el-table-column prop="cate_name" label="分类名称" />
      <el-table-column prop="cate_alias" label="分类别名" />
      <el-table-column fixed="right" label="Operations">
        <template #default="scope">
          <el-button type="primary" :icon="Edit" @click="handleEdit(scope.row)" circle plain />
          <el-button type="danger" :icon="Delete" @click="handleDelete(scope.row)" circle plain />
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="没有数据" />
      </template>

    </el-table>

    <ChannelEidt ref="dialog"></ChannelEidt>
  </PageContainer>
</template>
