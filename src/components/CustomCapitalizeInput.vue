<template>
  <input
    :value="modelValue"
    @input="emitValue"
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
const props = defineProps({
  modelValue: String,
  modelModifiers: {
    default: () => ({}),
  },
});
console.log("modelModifiers:", props.modelModifiers);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// Todo: type
function emitValue(e) {
  let value = e.target.value;
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:modelValue", value);
}
</script>

<style scoped></style>
