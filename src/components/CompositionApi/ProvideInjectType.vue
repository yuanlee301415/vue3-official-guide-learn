<template>
  <pre>Inject title: {{ title }}</pre>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { TITLE_KEY } from "@/constant/tokens";

const title = inject<string>(TITLE_KEY);
</script>
