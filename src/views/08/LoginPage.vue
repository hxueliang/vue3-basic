<script setup>
import { useRouter } from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';

const router = useRouter();

const goMain = () => {
  router.push('/08/main');
};

let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    console.log('login.vue, 定时器...');
  }, 2000);
});

/**
 * 在beforeUnmount，放在onBeforeUnmount
 */
onBeforeUnmount(() => {
  clearInterval(timer);
  alert('beforeUnmount生命周期函数');
});
</script>

<template>
  <div>
    login
    <button @click="goMain">go main</button>
  </div>
</template>