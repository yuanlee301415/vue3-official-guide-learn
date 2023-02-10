<template>
  <form>
    <h6>UserForm:</h6>
    Name: <input type="text" v-model="name" /><br />
    Age: <input type="number" min="1" max="100" v-model="age" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref("Tom");
const age = ref(20);

defineExpose({
  name,
  age,
});
</script>

<style scoped></style>
