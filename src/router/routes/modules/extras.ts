import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const EXTRAS_ROUTE: AppRouteRecordRaw = {
  path: "/extras",
  name: "Extras",
  redirect: "/extras/reactivity-in-depth",
  component: LAYOUT,
  meta: {
    title: "进阶主题",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "reactivity-in-depth",
      name: "Reactivity-in-depthPage",
      component: () => import("@/views/extras/reactivity-in-depth.vue"),
      meta: {
        title: "深入响应式系统",
      },
    },
  ],
};

export default EXTRAS_ROUTE;
