<template>
  <input
    v-model="value"
    type="text"
    style="
      width: 100%;
      padding: 0 5px;
      border: 1px solid #0960bd;
      color: #0960bd;
      font-size: 1rem;
      line-height: 1;
    "
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>

<style scoped></style>
