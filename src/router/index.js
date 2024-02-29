import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "index",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "Index"*/ "../views/indexPage.vue"),
  },
  {
    name: "cv",
    path: "/cv",
    component: () => import(/* webpackChunkName: "Cv"*/ "../views/cvPage.vue"),
  },
  {
    name: "menu",
    path: "/menu",
    component: () =>
      import(/* webpackChunkName: "Menu"*/ "../views/menuPage.vue"),
  },
  {
    name: "wip",
    path: "/wip",
    component: () =>
      import(
        /* webpackChunkName: "Work in progress"*/ "../views/workInProgress.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "NotFound"*/ "../views/errorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.resolve({
  name: "not-found",
  params: { pathMatch: ["not", "found"] },
}).href;

export default router;
