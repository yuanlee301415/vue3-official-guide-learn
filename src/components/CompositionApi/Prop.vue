<template>
  <details open>
    <summary>PropComp</summary>

    <pre>必填属性: {{ props.requiredProp }}</pre>
    <pre>可选属性: {{ props.optionalProp }}</pre>
  </details>
</template>

<script lang="ts" setup>
export type Props = {
  requiredProp: number | string;
  optionalProp?: number | boolean;
};
const props = defineProps<Props>();

/**
 * 等价于下面的代码：
 */
/*
const props = defineProps({
  requiredProp: {
    type: [Number, String],
    required: true
  },
  optionalProp: [Number, Boolean]
})
*/
</script>
