<template>
  <details open>
    <summary>InjectionReadonlyComp</summary>
    <div>Injection location2: {{ location2 }}</div>
    <button @click="updateLocation2">UpdateLocation2</button>
  </details>
</template>

<script lang="ts" setup>
import type { Location2 } from "#/injection";

import { inject } from "vue";
import { LOCATION_2_KEY } from "@/constant/tokens";

const { location2, updateLocation2 } = inject(LOCATION_2_KEY) as Location2;
</script>
