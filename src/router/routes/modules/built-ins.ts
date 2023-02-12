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
  ],
};

export default BUILT_INS_ROUTE;