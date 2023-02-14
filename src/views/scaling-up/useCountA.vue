<template>
  <details open>
    <summary>UseCountA</summary>
    <pre>组件A 》 globalCount: {{ globalCount }}</pre>
    <pre>组件A 》 localCount: {{ localCount }}</pre>
    <button @click="localCount++">组件A 更新 localCount</button>
    <button @click="globalCount++">组件A 更新 globalCount</button>
  </details>
</template>

<script lang="ts" setup>
import useCount from "@/hooks/useCount";

const { globalCount, localCount } = useCount();
</script>
