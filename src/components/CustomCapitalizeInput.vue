<template>
  <details open>
    <summary>CustomCapitalizeInput</summary>
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
  </details>
</template>

<script lang="ts" setup>
type TargetElement = HTMLInputElement | HTMLTextAreaElement;

type Props = {
  modelValue: string;
  modelModifiers: any;
};
const props = withDefaults(defineProps<Props>(), {
  modelModifiers: {
    capitalize: false,
  },
});

console.log("modelModifiers:", props.modelModifiers);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function emitValue(e: Event) {
  let { value } = e.target as TargetElement;
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:modelValue", value);
}
</script>

<style scoped></style>
