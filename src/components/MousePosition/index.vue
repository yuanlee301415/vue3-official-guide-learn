<template>
  <div>Mouse position is: [{{ mouseX }}, {{ mouseY }}]</div>
</template>

<script lang="ts" setup>
import useMouse from "@/hooks/useMouse";

const { mouseX, mouseY } = useMouse();
</script>
