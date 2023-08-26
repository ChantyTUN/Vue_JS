import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//Router
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
// routes
const routes = [
  {
    path: "/sdfsdfd",
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
const app = createApp(App);
app.use(router);
app.mount("#app");
