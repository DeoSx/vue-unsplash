import Vue from "vue";
import VueRouter from "vue-router";
import Favorite from "../views/Favorite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/favorite",
    name: "favorite",
    component: Favorite
  },
  {
    path: "/info/:id",
    name: "info",
    component: () => import("../views/Info.vue")
  },
  {
    path: "/",
    name: "search",
    component: () => import("../views/Search.vue")
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/History.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
