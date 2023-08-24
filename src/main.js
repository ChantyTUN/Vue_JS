import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { cerateRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
const routes = [
  {
    path: "/",
    componen: Home,
  },
];
createApp(App).mount("#app");
