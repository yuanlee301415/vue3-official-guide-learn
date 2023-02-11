<template>
  <div>Injection message: {{ sysMessage }}</div>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { MESSAGE_INJECTION_KEY } from "@/constant/tokens";

const sysMessage = inject(MESSAGE_INJECTION_KEY, "缺省的 message");
</script>
