<!-- 
  03-reactive和ref函数

  reactive()
    作用：接受对象类型数据参数据，返回一个响应式对象
  
  ref()
    作用：接收简单类型或者对象类型的数据，返回一个响应式对象
    本质：在原传入数据的基础上，外层包了一层对象，包成了复杂类型
    底层：包成复杂类型之后，再借助reactive实现的响应式
    注意：在script中，访问数据，需要通过 .value；在模版中，不需要加 .value（帮我们扒了一层）

  reactive()与ref()
    推荐：统一用ref
-->

<script setup>
import { reactive, ref } from "vue";

// reactive
const state = reactive({
  count: 100
});

// ref
const count = ref(0);
const setCount = () => count.value++;
console.log(count.value);

</script>

<template>
  <div>
    <!-- reactive -->
    {{ state.count }}
    <button @click="() => state.count++">+</button>
    <hr />

    <!-- ref -->
    {{ count }}
    <button @click="() => count++">+</button>
    <button @click="setCount">+</button>
    <br />

  </div>
</template>
