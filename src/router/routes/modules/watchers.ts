import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const WATCHERS_ROUTE: AppRouteRecordRaw = {
  path: "/watchers",
  name: "Watchers",
  redirect: "/watchers/deep-watchers",
  component: LAYOUT,
  meta: {
    title: "侦听器",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "deep-watchers",
      name: "Deep-watchersPage",
      component: () => import("@/views/watchers/deep-watchers.vue"),
      meta: {
        title: "深度侦听器",
      },
    },
  ],
};

export default WATCHERS_ROUTE;
