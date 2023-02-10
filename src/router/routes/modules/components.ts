import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const COMPONENTS_ROUTE: AppRouteRecordRaw = {
  path: "/components",
  name: "Components",
  redirect: "/components/props",
  component: LAYOUT,
  meta: {
    title: "深入组件",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "props",
      name: "PropsPage",
      component: () => import("@/views/components/props.vue"),
      meta: {
        title: "Props",
      },
    },
  ],
};

export default COMPONENTS_ROUTE;
