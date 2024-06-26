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

    {
      path: "events",
      name: "EventsPage",
      component: () => import("@/views/components/events.vue"),
      meta: {
        title: "事件",
      },
    },

    {
      path: "v-model",
      name: "V-modelPage",
      component: () => import("@/views/components/v-model.vue"),
      meta: {
        title: "组件 v-model",
      },
    },

    {
      path: "attrs",
      name: "AttrsPage",
      component: () => import("@/views/components/attrs.vue"),
      meta: {
        title: "透传 Attributes",
      },
    },

    {
      path: "slots",
      name: "SlotsPage",
      component: () => import("@/views/components/slots.vue"),
      meta: {
        title: "插槽",
      },
    },

    {
      path: "provide-inject",
      name: "Provide-injectPage",
      component: () => import("@/views/components/provide-inject.vue"),
      meta: {
        title: "依赖注入",
      },
    },

    {
      path: "async",
      name: "AsyncPage",
      component: () => import("@/views/components/async.vue"),
      meta: {
        title: "异步组件",
      },
    },
  ],
};

export default COMPONENTS_ROUTE;
