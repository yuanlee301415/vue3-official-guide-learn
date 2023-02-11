<template>
  <div>Injection location2: {{ location2 }}</div>
  <button @click="updateLocation2">UpdateLocation2</button>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const { location2, updateLocation2 } = inject("location2");
</script>
