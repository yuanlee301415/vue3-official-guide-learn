<template>
  <details open>
    <summary>Prop2</summary>
    <pre>interface bookA: {{ bookA }}</pre>
    <pre>class bookB: {{ bookB }}</pre>
  </details>
</template>

<script lang="ts" setup>
import type BookB from "./BookB";

export interface BookA {
  title: string;
  author: string;
  date: string;
}

defineProps<{
  bookA: BookA;
  bookB: BookB;
}>();
</script>
