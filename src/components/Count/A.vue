<template>
  <div>
    <pre>CountA > count: {{ countStore.count }}</pre>
    <button @click="countStore.count += 1">在组件 A 内部修改 store 状态</button>
  </div>
</template>

<script lang="ts" setup>
import { countStore } from "@/store/countStore";
</script>

<style scoped></style>
