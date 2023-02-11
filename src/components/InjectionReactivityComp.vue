<template>
  <div>Injection location: {{ location1 }}</div>
  <button @click="updateLocation1">UpdateLocation1</button>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const { location1, updateLocation1 } = inject("location1");
</script>
