<template>
  <div v-if="myboo">This true condition</div>
  <div v-else>V else false</div>
  <button @click="change">Change</button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const myboo = ref(false);
    const change = () => {
      myboo.value = !myboo.value;
    };
    return {
      myboo,
      change,
    };
  },
};
</script>

<style></style>
