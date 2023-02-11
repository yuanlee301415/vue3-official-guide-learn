<template>
  <header>Header</header>
  <main v-bind="$attrs">Main</main>
  <footer>Footer</footer>
</template>

<script lang="ts" setup>
import { useAttrs } from "vue";

const attrs = useAttrs();
console.log("CustomLayout2 > attrs:", attrs);
</script>
