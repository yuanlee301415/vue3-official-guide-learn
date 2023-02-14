<template>
  <details open>
    <summary>UseCountA</summary>
    <pre>组件B 》 globalCount: {{ globalCount }}</pre>
    <pre>组件B 》 localCount: {{ localCount }}</pre>
    <button @click="localCount++">组件B 更新 localCount</button>
    <button @click="globalCount++">组件B 更新 globalCount</button>
  </details>
</template>

<script lang="ts" setup>
import useCount from "@/hooks/useCount";

const { globalCount, localCount } = useCount();
</script>
