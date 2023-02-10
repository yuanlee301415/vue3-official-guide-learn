<template>
  <b>用户信息组件(数据类型、校验)：</b>
  <table width="100%" border="1" cellspacing="0">
    <tr>
      <th width="20%">Name:</th>
      <td>{{ name }}</td>
    </tr>
    <tr>
      <th>Age:</th>
      <td>{{ age }}</td>
    </tr>
  </table>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validator(val: number): boolean {
      return val >= 1 && val <= 99;
    },
  },
  birth: {
    type: [Date, Number, String],
  },
});
</script>

<style scoped></style>
