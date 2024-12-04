import Vue from "vue";
import VueRouter from "vue-router";
import lookIndex from "../views/lookIndex/lookIndex.vue";
import home from "../views/home/home.vue";
import main from "../views/main/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/lookIndex",
    name: "lookIndex",
    component: lookIndex,
  },
  {
    path: "/main/:index",
    name: "main",
    component: main,
  },
  // {
  //   path: "/training",
  //   name: "training",
  //   component: () => import("../views/training/training.vue"),
  //   redirect: "casePresentation",
  //   meta: {
  //     keepAlive: false, //此组件不需要被缓存
  //   },
  //   children: [
  //     {
  //       path: "/casePresentation",
  //       name: "casePresentation",
  //       component: () =>
  //         import("../views/casePresentation/casePresentation.vue"),
  //     },
  //     {
  //       path: "/preTraining",
  //       name: "preTraining",
  //       component: () => import("../views/preTraining/preTraining.vue"),
  //     },
  //     {
  //       path: "/practical",
  //       name: "practical",
  //       component: () => import("../views/practical/practical.vue"),
  //     },
  //     {
  //       path: "/dynamic",
  //       name: "dynamic",
  //       component: () => import("../views/content/dynamic.vue"),
  //     },
  //     {
  //       path: "/content",
  //       name: "content",
  //       component: () => import("../views/content/content.vue"),
  //     },
  //     {
  //       path: "/static",
  //       name: "static",
  //       component: () => import("../views/content/static.vue"),
  //     },
  //     {
  //       path: "/IdealPosture",
  //       name: "IdealPosture",
  //       component: () => import("../views/content/IdealPosture.vue"),
  //     },
  //     {
  //       path: "/setRight",
  //       name: "setRight",
  //       component: () => import("../views/setRight/setRight.vue"),
  //     },
  //     {
  //       path: "/mutualAid",
  //       name: "mutualAid",
  //       component: () => import("../views/mutualAid/mutualAid.vue"),
  //     },
  //     {
  //       path: "/feedback",
  //       name: "feedback",
  //       component: () => import("../views/feedback/feedback.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
