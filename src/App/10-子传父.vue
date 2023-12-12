<!-- 
  10-子传父
-->

<script setup>
import { ref } from 'vue';
import SonCom from '@/components/10/SonCom.vue';

const name = ref('');
const getName = _name => {
  name.value = _name;
};

const age = ref(0);
const getAge = _age => {
  age.value = _age;
};
</script>

<template>
  <div>
    <h3>
      父组件
      - {{ name }} - {{ age }}
    </h3>

    <SonCom @getName="getName" @getAge="getAge" />
  </div>
</template>
