<template>
  <h2>异步组件</h2>
  <AsyncComp :time="time" />

  <h2>加载与错误状态</h2>
  <AsyncComp2 />
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";

import LoadingComp from "@/components/LoadingComp.vue";
import ErrorComp from "@/components/ErrorComp.vue";

/**
 * 异步组件
 */
const time = ref(new Date());
const AsyncComp = defineAsyncComponent(
  () => import("@/components/AsyncComp.vue")
);

/**
 * 加载与错误状态
 */
const AsyncComp2 = defineAsyncComponent({
  loader: () => import("@/components/AsyncComp.vue"),
  loadingComponent: LoadingComp,
  errorComponent: ErrorComp,
  delay: 2000,
  timeout: 5000,
});
</script>
