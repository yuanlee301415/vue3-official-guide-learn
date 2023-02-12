<template>
  <h2>用响应式 API 做简单状态管理</h2>
  <CountA />
  <CountB />
  <button @click="countStore.count += 3">在组件外部修改 store 状态</button>

  <h2>通过一个组合式函数来返回一个全局状态</h2>
  <UseCountA />
  <UseCountB />
  <button @click="globalCount++">视图文件更新 globalCount</button>
  <button @click="localCount++">视图文件更新 globalCount</button>
</template>

<script lang="ts" setup>
import { countStore } from "@/store/countStore";
import CountA from "@/components/Count/A.vue";
import CountB from "@/components/Count/B.vue";

import UseCountA from "./useCountA.vue";
import UseCountB from "./useCountB.vue";

import useCount from "@/hooks/useCount";
const { globalCount, localCount } = useCount();
</script>
