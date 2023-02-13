<template>
  <div class="blogPost">
    <h6 class="title">{{ title }}</h6>
    <button @click="handleLarger">larger-text</button>
    <button @click="handleSmaller">smaller-text</button>
    <section class="content">{{ content }}</section>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
  content: string;
};

defineProps<Props>();
// const emit = defineEmits(["larger-text", "smaller-text"]);
const emit = defineEmits({
  "smaller-text": null, // 没有校验
  "larger-text": (val) => {
    // 事件触发时校验，示通过时在开发环境下警告
    return val >= 0 && val <= 1;
  },
});

function handleLarger() {
  emit("larger-text", 1);
}

function handleSmaller() {
  emit("smaller-text", 0.5);
}
</script>
