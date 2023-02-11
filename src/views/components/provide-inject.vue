<template>
  <h2>应用层 Provide</h2>
  <pre>AppStartTime: {{ appStartTime }}</pre>

  <h2>注入默认值</h2>
  <InjectionComp />

  <h2>和响应式数据配合使用</h2>
  <InjectionReactivityComp />
  <InjectionReadonlyComp />

  <h2>使用 Symbol 作注入名</h2>
  <InjectionSymbolComp />
</template>

<script lang="ts" setup>
import { readonly, ref, inject, provide } from "vue";

import { MESSAGE_INJECTION_KEY } from "@/constant/tokens";

import InjectionComp from "@/components/InjectionComp.vue";
import InjectionReactivityComp from "@/components/InjectionReactivityComp.vue";
import InjectionReadonlyComp from "@/components/InjectionReadonlyComp.vue";
import InjectionSymbolComp from "@/components/InjectionSymbolComp.vue";

/**
 * 应用层 Provide
 */
const appStartTime = inject("appStartTime");

/**
 * 和响应式数据配合使用
 */
const location1 = ref("local-1");
const updateLocation1 = () => (location1.value = "newLocation-1");

provide("location1", {
  location1,
  updateLocation1,
});

// readonly
const location2 = ref("local-2");
const updateLocation2 = () => (location2.value = "newLocation-2");

provide("location2", {
  location2: readonly(location2),
  updateLocation2,
});

/**
 * 使用 Symbol 作注入名
 */
provide(MESSAGE_INJECTION_KEY, "使用 Symbol 作注入名");
</script>
