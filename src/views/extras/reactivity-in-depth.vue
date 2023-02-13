<template>
  <h2>组件调试钩子</h2>
  <input type="text" v-model="titleA" />
  <A :title="titleA" :key="keyA" />

  <h2>计算属性调试</h2>
  <input type="number" v-model="count" />
  <pre>count: {{ count }}, double: {{ double }}</pre>

  <h2>侦听器调试</h2>
  <input type="number" v-model="id" />
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";

import A from "@/components/ReactivityInDepth/A.vue";

/**
 * 组件调试钩子
 */
const titleA = ref("TitleA");
const keyA = ref(Math.random());
setTimeout(() => {
  keyA.value = Math.random();
}, 3000);

/**
 * 计算属性调试
 */
const count = ref(0);
const double = computed(() => count.value * 2, {
  onTrack(e) {
    console.log("double>onTrack>e:", e);
  },
  onTrigger(e) {
    console.log("double>onTrigger>e:", e);
  },
});

/**
 * 侦听器调试
 */
const id = ref("1");
watchEffect(
  () => {
    console.log("id:", id.value);
  },
  {
    onTrack(e) {
      console.log("id>onTrack>e:", e);
    },
    onTrigger(e) {
      console.log("id>onTrigger>e:", e);
    },
  }
);
</script>
