<template>
  <pre>interface bookA: {{ bookA }}</pre>
  <pre>class bookB: {{ bookB }}</pre>
</template>

<script lang="ts" setup>
import BookB from "./BookB";

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
