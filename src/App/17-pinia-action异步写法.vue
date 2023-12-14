<!-- 
  17-pinia-action异步写法
-->

<script setup>
import { useChannelStore } from '@/store/17/channel.js';

const channelStore = useChannelStore();
channelStore.getChannel();
</script>

<template>
  <div>
    <h2>
      App Com
    </h2>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
