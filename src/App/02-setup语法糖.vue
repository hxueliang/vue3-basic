<!-- 
  02-setup语法糖
-->
<script>
export default {
  setup() {
    // 数据
    const message = 'hello vue3';
    // 函数
    const getMessage = () => console.log(message);

    return {
      message,
      getMessage,
    };
  },
};
</script>

<template>
  <div>
    {{ message }}
    <button @click="getMessage">click</button>
  </div>
</template>
