<template>
  <details open>
    <summary>CustomInputFullName</summary>
    <div class="fullName">
      <input :value="firstName" @input="handleInputFirstName" type="text" />
      <span
        style="
          display: inline-block;
          width: 10%;
          text-align: center;
          line-height: 1;
        "
        >-</span
      >
      <input :value="lastName" @input="handleInputLastName" type="text" />
    </div>
  </details>
</template>

<script lang="ts" setup>
defineProps<{
  firstName: string;
  lastName: string;
}>();

const emit = defineEmits<{
  (e: "update:firstName", value: string): void;
  (e: "update:lastName", value: string): void;
}>();

function handleInputFirstName(e: Event) {
  emit("update:firstName", (e.target as HTMLInputElement).value);
}

function handleInputLastName(e: Event) {
  emit("update:lastName", (e.target as HTMLInputElement).value);
}
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
