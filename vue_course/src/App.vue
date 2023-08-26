<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  // add component
  components: {
    Header,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
