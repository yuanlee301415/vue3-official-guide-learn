<template>
  <h6>ReactivityInDepthA</h6>
  <pre>Title: {{ title }}</pre>
</template>

<script lang="ts" setup>
import { onRenderTracked, onRenderTriggered } from "vue";

defineProps<{
  title: string;
}>();

onRenderTracked((event) => {
  console.log("ReactivityInDepthA > onRenderTracked > event:", event);
});

onRenderTriggered((event) => {
  console.log("ReactivityInDepth > onRenderTriggered > event:", event);
});
</script>
