<template>
  <div class="blogPost">
    <h6 class="title">{{ title }}</h6>
    <button @click="$emit('larger-text')">larger-text</button>
    <button @click="$emit('smaller-text')">smaller-text</button>
    <section class="content">{{ content }}</section>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
  content: string;
};

defineProps<Props>();
defineEmits(["larger-text", "smaller-text"]);
</script>
