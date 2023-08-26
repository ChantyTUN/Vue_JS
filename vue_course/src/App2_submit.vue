<template>
  <input type="text" v-model="name" placeholder="Name...." />
  <button @click="submit">Submit</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const name = ref("");
    const submit = () => {
      alert(name.value);
    };
    return {
      name,
      submit,
    };
  },
};
</script>

<style></style>
