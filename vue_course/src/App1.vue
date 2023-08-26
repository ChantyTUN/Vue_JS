<template>
  <h1 @click="changeHi">{{ hi }}</h1>
  <h1 @click="up">{{ counter.count }}</h1>
</template>
<script>
import {  , ref } from "vue";
export default {
  setup() {
    const hi = ref("Welcome to Me Please click");
    const counter = reactive({
      count: 0,
    });
    // click text
    const changeHi = () => {
      hi.value = "chanty";
    };
    // click count ++
    const up = () => {
      counter.count++;
    };
    return {
      hi,
      changeHi,
      counter,
      up,
    };
  },
};
</script>
