<template>
  <Header />
  <router-view />
  <Footer :item="item" :item1_life="item1_life" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
export default {
  // add component
  components: {
    Header,
    Footer,
  },
  setup() {
    const item = ref("From Parent");
    const item1_life = ref("Life is easy");
    return {
      item,
      item1_life,
    };
  },
};
</script>

<style></style>
