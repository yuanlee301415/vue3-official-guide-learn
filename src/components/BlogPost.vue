<template>
  <details open>
    <summary>BlogPost</summary>
    <b class="title">{{ title }}</b
    ><br />
    <button @click="$emit('larger-text')">larger-text</button>
    <button @click="$emit('smaller-text')">smaller-text</button>
    <section class="content">{{ content }}</section>
  </details>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
  content: string;
};

defineProps<Props>();

defineEmits<{
  (e: "larger-text"): void;
  (e: "smaller-text"): void;
}>();
</script>
