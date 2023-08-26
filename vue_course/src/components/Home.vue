<template></template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../pinia/Store";
export default {
  setup() {
    const store = useCounterStore();
    return {};
  },
};
</script>

<style></style>
