import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const ESSENTIALS_ROUTE: AppRouteRecordRaw = {
  path: "/essentials",
  name: "Essentials",
  redirect: "/essentials/reactivity",
  component: LAYOUT,
  meta: {
    title: "基础",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "reactivity",
      name: "ReactivityPage",
      component: () => import("@/views/essentials/reactivity.vue"),
      meta: {
        title: "响应式",
      },
    },
    {
      path: "computed",
      name: "ComputedPage",
      component: () => import("@/views/essentials/computed.vue"),
      meta: {
        title: "计算属性",
      },
    },
  ],
};

export default ESSENTIALS_ROUTE;
