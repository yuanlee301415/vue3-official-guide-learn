<template>
  <details open>
    <summary>CustomInput3</summary>
    <input
      v-model="value"
      type="text"
      style="
        width: 100%;
        padding: 0 5px;
        border: 1px solid #c00;
        color: #c00;
        font-size: 1rem;
        line-height: 1;
      "
    />
  </details>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style scoped></style>
