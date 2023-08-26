<template>
  <div v-for="item in myboo">
    <h1>{{ item }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const myboo = ref([1, 2, 3, 4, 5, 6, 7, 8]);
    return {
      myboo,
    };
  },
};
</script>

<style></style>
