import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const BUILT_INS_ROUTE: AppRouteRecordRaw = {
  path: "/built-ins",
  name: "Built-ins",
  redirect: "/built-ins/transition",
  component: LAYOUT,
  meta: {
    title: "内置组件",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "transition",
      name: "TransitionPage",
      component: () => import("@/views/built-ins/transitionPage.vue"),
      meta: {
        title: "Transition",
      },
    },

    {
      path: "transition-group",
      name: "Transition-groupPage",
      component: () => import("@/views/built-ins/transitionGroupPage.vue"),
      meta: {
        title: "TransitionGroup",
      },
    },

    {
      path: "teleport",
      name: "TeleportPage",
      component: () => import("@/views/built-ins/teleportPage.vue"),
      meta: {
        title: "Teleport",
      },
    },
  ],
};

export default BUILT_INS_ROUTE;
