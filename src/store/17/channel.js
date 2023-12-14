import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChannelStore = defineStore('channel', () => {
  const channelList = ref([]);

  const getChannel = async () => {
    try {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels');
      channelList.value = res.data.data.channels;
    } catch (error) {
      throw new Error('get channel error');
    }
  };

  return {
    channelList,
    getChannel,
  };
});