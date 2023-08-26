<template>
  <h1>This is count = {{ count }}</h1>
  <button @click="increment">Up</button>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../pinia/Store";
import { storeToRefs } from "pinia";
export default {
  setup() {
    // store value
    const { increment } = useCounterStore();
    // store function
    const { count } = storeToRefs(useCounterStore());
    return {
      increment,
      count,
    };
  },
};
</script>

<style></style>
