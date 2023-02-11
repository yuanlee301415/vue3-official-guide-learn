<template>
  <div>Injection default message: {{ message }}</div>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const message = inject("message", "缺省的 message");
</script>
