<template>
  <details open>
    <summary>MousePosition</summary>

    <div>Mouse position is: [{{ mouseX }}, {{ mouseY }}]</div>
  </details>
</template>

<script lang="ts" setup>
import useMouse from "@/hooks/useMouse";

const { mouseX, mouseY } = useMouse();
</script>
