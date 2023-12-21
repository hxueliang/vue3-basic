<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom
} from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/store';
import avatar from '@/assets/images/20/default.png';

const menu = [
  { title: '文章分类', index: '/20/article/channel', icon: Management },
  { title: '文章管理', index: '/20/article/manage', icon: Promotion },
  {
    title: '个人中心', index: '/20/user', icon: UserFilled,
    children: [
      { title: '基本资料', index: '/20/user/profile', icon: User },
      { title: '更换头像', index: '/20/user/avatar', icon: Crop },
      { title: '重置密码', index: '/20/user/password', icon: EditPen },
    ]
  },
];

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { getUser } = userStore;
getUser();
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <el-menu active-text-color="#ffd04b" background-color="#232323" :default-active="$route.path" text-color="#fff"
        router>
        <template v-for="{ index, icon, title, children } in menu" :key="index">
          <el-sub-menu v-if="children" :index="index">
            <template #title>
              <el-icon>
                <component :is="icon" />
              </el-icon>
              <span>{{ title }}</span>
            </template>
            <el-menu-item v-for="item in children" :key="item.index" :index="item.index">
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item v-else :index="index">
            <el-icon>
              <component :is="icon" />
            </el-icon>
            <span>{{ title }}</span>
          </el-menu-item>
        </template>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div>程序员：<strong>{{ user.nickname || user.username }}</strong></div>
        <el-dropdown placement="bottom-end">
          <span class="el-dropdown__box">
            <el-avatar :src="user.user_pic || avatar" />
            <el-icon>
              <CaretBottom />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile" :icon="User">基本资料</el-dropdown-item>
              <el-dropdown-item command="avatar" :icon="Crop">更换头像</el-dropdown-item>
              <el-dropdown-item command="password" :icon="EditPen">重置密码</el-dropdown-item>
              <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>大事件 ©2023 Created by 黑马程序员</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
}

.el-aside {
  background-color: #232323;

  &__logo {
    height: 120px;
    background: url('@/assets/images/20/logo.png') no-repeat center / 120px auto;
  }

  .el-menu {
    border-right: none;
  }
}

.el-header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .el-dropdown__box {
    display: flex;
    align-items: center;

    .el-icon {
      color: #999;
      margin-left: 10px;
    }

    &:active,
    &:focus {
      outline: none;
    }
  }
}

.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
}
</style>