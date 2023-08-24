<template>
  <input type="text" v-model="name" id="" placeholder="Please In..." />
  <button @click="submit">Submit</button>
</template>
<script>
import { ref } from "vue";
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
