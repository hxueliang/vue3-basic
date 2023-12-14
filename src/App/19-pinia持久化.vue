<!-- 
  19-pinia持久化
-->

<script setup>
import { storeToRefs } from 'pinia';

import { useCounterStore } from '@/store/16/counter.js';
import { useChannelStore } from '@/store/17/channel';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { addCount, subCount } = counterStore;

const channelStore = useChannelStore();
const { channelList } = storeToRefs(channelStore);
const { getChannel } = channelStore;

const { obj } = storeToRefs(counterStore);
const { setObj } = counterStore;
</script>

<template>
  <div>
    <h2>
      App Com
      * {{ count }}

      <button @click="addCount">+</button>
      <button @click="subCount()">-</button>
    </h2>
    <button @click="getChannel">get channel</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="setObj">set obj</button>
    <div>{{ obj }}</div>
  </div>
</template>
