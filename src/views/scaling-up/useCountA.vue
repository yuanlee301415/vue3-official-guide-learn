<template>
  <div style="border: 1px solid #c00; margin: 1em; padding: 1em">
    <b>UseCountA</b>
    <pre>组件A 》 globalCount: {{ globalCount }}</pre>
    <pre>组件A 》 localCount: {{ localCount }}</pre>
    <button @click="localCount++">组件A 更新 localCount</button>
    <button @click="globalCount++">组件A 更新 globalCount</button>
  </div>
</template>

<script lang="ts" setup>
import useCount from "@/hooks/useCount";

const { globalCount, localCount } = useCount();
</script>
