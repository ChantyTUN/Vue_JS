import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//Router
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
// pinia
import { createPinia } from "pinia";
// routes
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    children: [],
  },
  {
    path: "/About",
    component: About,
    name: "About",
    children: [],
  },
];
// get router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
// import pinia
const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
