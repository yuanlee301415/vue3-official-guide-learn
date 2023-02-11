<template>
  <slot :x="x" :y="y" />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

const x = ref();
const y = ref();

const update = (e: MouseEvent) => {
  x.value = e.pageX;
  y.value = e.pageY;
};

onMounted(() => {
  window.addEventListener("mousemove", update);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", update);
});
</script>
