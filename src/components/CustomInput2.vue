<template>
  <details open>
    <summary>CustomInput2</summary>
    <input
      :value="modelValue"
      @input="handleInput"
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
  </details>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function handleInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<style scoped></style>
