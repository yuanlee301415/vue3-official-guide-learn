<template>
  <details open>
    <summary>ValidationConstructorUserProfile</summary>
    <b>用户信息组件（通过 `instanceof` 校验）：</b>
    <table width="100%" border="1" cellspacing="0">
      <tr>
        <th width="20%">ID:</th>
        <td>{{ user.userId }}</td>
      </tr>
      <tr>
        <th>UserName:</th>
        <td>{{ user.userName }}</td>
      </tr>
      <tr>
        <th>Desc:</th>
        <td>{{ user.desc }}</td>
      </tr>
    </table>
  </details>
</template>

<script lang="ts" setup>
import UserInfoModel from "@/models/UserInfoModel";

defineProps({
  user: {
    type: UserInfoModel,
    required: true,
    default: () =>
      new UserInfoModel({ userId: "", userName: "", realName: "" }),
  },
});
</script>

<style scoped></style>
