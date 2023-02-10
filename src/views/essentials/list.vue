<template>
  <h2>v-for 与对象</h2>
  <h4>
    你也可以使用 v-for 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用
    Object.keys() 的返回值来决定。
  </h4>

  <b>for...in</b>
  <p v-for="(val, key) in user">{{ key }}: {{ val }}</p>

  <b>for...of</b>
  <p v-for="(val, key) of user">{{ key }}: {{ val }}</p>

  <b>index</b>
  <p v-for="(val, key, idx) of user">{{ idx }}. {{ key }}: {{ val }}</p>

  <h2>&lt;template&gt; 上的 v-for</h2>
  <ol>
    <template v-for="(val, key) of user">
      <li>{{ key }}: {{ val }}</li>
    </template>
  </ol>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const user = reactive({
  id: "001",
  name: "Tom",
  age: 20,
});
</script>
