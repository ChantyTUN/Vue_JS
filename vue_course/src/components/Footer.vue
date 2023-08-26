<template>
  <h1>Footer = {{ item }}</h1>
  <h1>Footer = {{ item1_life }}</h1>
</template>
<script>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../pinia/Store";
export default {
  // props
  props: ["item", "item1_life"],
  setup({ item, item1_life }) {
    // store value
    const { increment } = useCounterStore();
    // store function
    const { count } = storeToRefs(useCounterStore());
    return {
      increment,
      count,
      item,
      item1_life,
    };
  },
};
</script>
