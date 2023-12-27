<script setup>
import { ref } from 'vue';
import { Edit, Delete } from '@element-plus/icons-vue';

import ChannelSelect from './components/ChannelSelect.vue';
import ArticleEdit from './components/ArticleEdit.vue';

import { acticleListAPI } from '@/api/20/article';
import { formatTime } from '@/utils';

const articleList = ref([]);
const total = ref(0);
const loading = ref(false);
const articleEditRef = ref(null);

// 请求参数默认值
const defaultParams = {
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: '',
};

// 请求参数
const params = ref({ ...defaultParams });

/**
 * 获取文章列表
 */
const getArticleList = async () => {
  try {
    loading.value = true;
    const { data, total: _total } = await acticleListAPI(params.value);
    loading.value = false;
    articleList.value = data;
    total.value = _total;
  } catch (err) {
    loading.value = false;
    console.log(err);
  }
};
getArticleList();

/**
 * 切换分页大小
 * @param {number} size 分页大小
 */
const handleSizeChange = (size) => {
  params.value.pagenum = 1;
  params.value.pagesize = size;
  getArticleList();
};

/**
 * 切换页码
 * @param {number} page 当前页码
 */
const handleCurrentChange = (page) => {
  params.value.pagenum = page;
  getArticleList();
};

/**
 * 搜索
 */
const handleSearch = () => {
  params.value.pagenum = 1;
  getArticleList();
};

/**
 * 重置
 */
const handleReset = () => {
  params.value = { ...defaultParams };
  getArticleList();
};

/**
 * 发布文章
 */
const handlePublish = () => {
  articleEditRef.value.open();
};

/**
 * 编辑文章
 * @param {object} row 行数据
 */
const handleEdit = row => {
  articleEditRef.value.open(row);
};

/**
 * 删除文章
 * @param {object} row 行数据
 */
const handleDelete = row => {
  console.log(row);
};
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary" @click="handlePublish">发布文章</el-button>
    </template>

    <!-- 表单 -->
    <el-form inline>
      <el-form-item label="文章分类：">
        <ChannelSelect v-model="params.cate_id"></ChannelSelect>
      </el-form-item>
      <el-form-item label="文章状态：">
        <el-select v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="articleList" v-loading="loading">
      <el-table-column label="文章标题" prop="title">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="cate_name"></el-table-column>
      <el-table-column label="发表时间" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button circle plain type="primary" :icon="Edit" @click="handleEdit(row)"></el-button>
          <el-button circle plain type="danger" :icon="Delete" @click="handleDelete(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination v-model:current-page="params.pagenum" v-model:page-size="params.pagesize" :page-sizes="[2, 3, 5, 6]"
      :background="true" layout="jumper, total, sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />

    <!-- 添加、编辑文章 -->
    <ArticleEdit ref="articleEditRef" />
  </PageContainer>
</template>

<style lang="scss">
.el-pagination {
  margin-top: 20px;
  justify-content: flex-end;
}
</style>
