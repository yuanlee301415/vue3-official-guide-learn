import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const TYPESCRIPT_ROUTE: AppRouteRecordRaw = {
  path: "/typescript",
  name: "Typescript",
  redirect: "/typescript/composition-api",
  component: LAYOUT,
  meta: {
    title: "Typescript",
    hiddenChildrenInMenu: false,
  },
  children: [
    {
      path: "composition-api",
      name: "Composition-apiPage",
      component: () => import("@/views/typescript/composition-api.vue"),
      meta: {
        title: "TS 与组合式 API",
      },
    },
  ],
};

export default TYPESCRIPT_ROUTE;
