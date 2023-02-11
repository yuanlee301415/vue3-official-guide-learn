<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    style="
      width: 100%;
      padding: 0 5px;
      border: 1px solid #0960bd;
      color: #0960bd;
      font-size: 1rem;
      line-height: 1;
    "
  />
</template>

<script lang="ts" setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
