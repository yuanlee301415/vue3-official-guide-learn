<template>
  <input
    v-model="value"
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
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

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
