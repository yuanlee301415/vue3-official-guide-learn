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

    {
      path: "style",
      name: "StylePage",
      component: () => import("@/views/essentials/style.vue"),
      meta: {
        title: "样式绑定",
      },
    },

    {
      path: "list",
      name: "ListPage",
      component: () => import("@/views/essentials/list.vue"),
      meta: {
        title: "列表渲染",
      },
    },

    {
      path: "event-handling",
      name: "Event-handlingPage",
      component: () => import("@/views/essentials/event-handling.vue"),
      meta: {
        title: "事件处理",
      },
    },

    {
      path: "lifecycle",
      name: "LifecyclePage",
      component: () => import("@/views/essentials/lifecycle.vue"),
      meta: {
        title: "生命周期",
      },
    },

    {
      path: "watchers",
      name: "WatchersPage",
      component: () => import("@/views/essentials/watchers.vue"),
      meta: {
        title: "侦听器",
      },
    },
  ],
};

export default ESSENTIALS_ROUTE;
