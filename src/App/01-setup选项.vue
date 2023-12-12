<script>
/**
 * 01-setup选项
 * 
 * 1、setup()的执行时机，比beforeCreate()还要早
 * 2、setup()中，this为undefined
 * 3、setup()中，数据和函数，需要在setup最后return，才能在模版中应用
 * 4、可以通过setup语法糖，简化代码
 */
export default {
  setup() {
    console.log('setup', this);

    // 数据
    const message = 'hello vue3';
    // 函数
    const getMessage = () => console.log(message);

    return {
      message,
      getMessage,
    };
  },
  beforeCreate() {
    console.log('beforeCreate', this);
  }
};
</script>

<template>
  <div>
    {{ message }}
    <button @click="getMessage">click</button>
  </div>
</template>
