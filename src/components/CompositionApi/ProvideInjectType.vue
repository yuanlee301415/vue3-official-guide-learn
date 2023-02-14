<template>
  <details open>
    <summary>ProvideInjectType</summary>
    <pre>Inject title: {{ title }}</pre>
  </details>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { TITLE_KEY } from "@/constant/tokens";

const title = inject<string>(TITLE_KEY);
</script>
