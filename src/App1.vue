<template>
  <h1 @click="changeHi">{{ hi }}</h1>
  <h1 @click="up">{{ counter.count }}</h1>

  <input type="button" value="">
</template>
<script>
// ref
import { reactive, ref } from "vue";
export default {
  setup() {
    const hi = ref("Chanty Welcome");
    // rela
    const counter = reactive({
      count: 0,
    });

    const changeHi = () => {
      hi.value = "KHMER";
    };

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
