import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: () => import("../views/LeaderboardView.vue"),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import("../views/AboutUsView.vue"),
  },
];

export default new createRouter({
  history: createWebHistory(),
  routes,
});
