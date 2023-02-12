import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const SCALING_UP_ROUTE: AppRouteRecordRaw = {
  path: "/scaling-up",
  name: "Scaling-up",
  redirect: "/scaling-up/state-management",
  component: LAYOUT,
  meta: {
    title: "应用规模化",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "state-management",
      name: "State-managementPage",
      component: () => import("@/views/scaling-up/state-management.vue"),
      meta: {
        title: "状态管理",
      },
    },
  ],
};

export default SCALING_UP_ROUTE;
