<!-- 
  09-SonCom
-->

<script setup>
/**
 * 注意：由于写了 setup，所以无法直接配置 props 选项
 * 所以：此处需要借助于“编译器宏” 函数，接收父组件传递的数据
 * 
 * defineProps 原理：就是编译阶段的一个标识，实际编译器解析时，遇到后会进行编译转换
 */
const props = defineProps({
  msg: String,
  count: Number,
});

console.log(props);
// 使用 msg，需要 props.msg
console.log(props.msg);
console.log(props.count);
</script>

<template>
  <div class="son">
    子组件
    <div>
      <!-- 使用 msg，直接 msg，不需要 props.msg -->
      {{ msg }}
    </div>
    <div>
      {{ count }}
    </div>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #000;
  padding: 20px;
}
</style>
