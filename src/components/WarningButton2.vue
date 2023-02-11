<template>
  <div class="warningBtn">
    <pre>WarningButton attrs: {{ $attrs }}</pre>
    <BaseButton v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import BaseButton from "@/components/BaseButton.vue";
</script>
