<!-- 
  20-大件事案例

  1.按需引入ElementPlus组件库
  2.pinia独立维护和统一导出
  3.封装axios
  4.路由配置
  5.注册登录静态页面
  6.注册表单效验
  7.注册接口
  8.登录
  9.登录访问拦截
  10.layout架子
  11.用户信息
  12.头部下拉菜单跳转
  13.PageContainer封装
  14.文章分类表格
  15.文章分类dialog封装
  16.文章分类添加和编辑
  17.文章分类删除功能
  18.文章管理表单和表格
  19.全局汉化element-plus
  20.ChannelSelect封装
  21.文章列表渲染
  22.文章列表分页
  23.文章列表loading
  24.文章列表表单
  25.文章列表drawer封装
  26.文章列表添加和编辑页面结构
  27.文章列表选择图片
  28.文章列表引入vue-quill
  29.文章列表添加和编辑
-->

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
</script>

<template>
  <div>
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>
