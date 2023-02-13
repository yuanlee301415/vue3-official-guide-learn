<template>
  <div class="fullName">
    <input
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
      type="text"
    />
    <span
      style="
        display: inline-block;
        width: 10%;
        text-align: center;
        line-height: 1;
      "
      >-</span
    >
    <input
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
      type="text"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  firstName: string;
  lastName: string;
}>();

defineEmits<{
  (e: "update:firstName", value: string): void;
  (e: "update:lastName", value: string): void;
}>();
</script>

<style scoped lang="less">
.fullName {
  input,
  span {
    display: inline-block;
  }
  input {
    width: 45%;
    padding: 0 5px;
    color: #0960bd;
    border: 1px solid #0960bd;
    font-size: 1rem;
    line-height: 1;
  }
  span {
    width: 1%;
  }
}
</style>
