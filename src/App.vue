<template>
  <h1 @click="changeHi">{{ hi }}</h1>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const hi = ref("Chanty Welcome");

    const changeHi = () => {
      hi.value = "KHMER";
    };

    return {
      hi,
      changeHi,
    };
  },
};
</script>
