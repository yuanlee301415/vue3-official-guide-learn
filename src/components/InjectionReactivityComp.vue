<template>
  <details open>
    <summary>InjectionReactivityComp</summary>
    <div>Injection location: {{ location1 }}</div>
    <button @click="updateLocation1">UpdateLocation1</button>
  </details>
</template>

<script lang="ts" setup>
import type { Location1 } from "#/injection";

import { inject } from "vue";

import { LOCATION_1_KEY } from "@/constant/tokens";

const { location1, updateLocation1 } = inject(LOCATION_1_KEY) as Location1;
</script>
