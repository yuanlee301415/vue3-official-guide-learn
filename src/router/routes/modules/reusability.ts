import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const REUSABILITY_ROUTE: AppRouteRecordRaw = {
  path: "/reusability",
  name: "Reusability",
  redirect: "/reusability/composables",
  component: LAYOUT,
  meta: {
    title: "逻辑复用",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "composables",
      name: "ComposablesPage",
      component: () => import("@/views/reusability/composables.vue"),
      meta: {
        title: "组合式函数",
      },
    },

    {
      path: "custom-directives",
      name: "Custom-directivesPage",
      component: () => import("@/views/reusability/custom-directives.vue"),
      meta: {
        title: "自定义指令",
      },
    },
  ],
};

export default REUSABILITY_ROUTE;
