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
  30.ChatGPT-Prompt优化
  31.Github copilot 智能生成代码
  32.基本资料
  33.更换头像
  34.重置密码
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

<!-- 
  30.ChatGPT Prompt 优化：

  Prompt1:
  背景：你是一名【具有三年开发经验】的前端开发工程师，这三年期间，前两年，你做的【金融】相关四个项目，最后一年做的是【医疗】相关领域的两个项目，且有一定的管理 10人+ 团队的经验。主要的技术栈：【Vue】 和 【小程序】。由于你是计算机软件工程专业，所以你具备一些Java后台、Mysql数据库的知识，也掌握一些基础的算法。
  问题：你会如何编写你的简历个人技能介绍
  要求：8条技能介绍，请注意：你不会 angular。

  Prompt2：
  基于上文情境，你会如何编写你的项目经验介绍

  Prompt3：
  你刚才说的方向完全没有问题，但是我想看到更多的项目技术亮点，项目业务解决方案。
  请注意：每个项目3个技术亮点，3个业务解决方案。
-->

 <!-- 
  31.Github copilot 智能生成代码
  
  const arr = [1,2,4,3]
  // 可以传入数组 按Tab
  function sortArr(arr) {
    按：Tab
    更多方案：crlt + enter
  }
-->
