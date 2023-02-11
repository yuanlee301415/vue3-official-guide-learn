<template>
  <h2>事件参数</h2>
  <div :style="{ fontSize: `${fontSize}em` }">
    <EventsBlogPost
      title="First Blog"
      content="Hello Vue3"
      @larger-text="onLarger"
      @smaller-text="onSmall"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import EventsBlogPost from "@/components/EventsBlogPost.vue";

/**
 * 事件参数
 */
const fontSize = ref(1);

function onLarger(val: number) {
  fontSize.value += val;
}

function onSmall(val: number) {
  fontSize.value -= val;
}
</script>
