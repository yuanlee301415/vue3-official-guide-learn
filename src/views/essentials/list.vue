<template>
  <h2>v-for 与对象</h2>
  <h4>
    你也可以使用 v-for 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用
    `Object.keys()` 的返回值来决定。
  </h4>

  <b>for...in</b>
  <ul>
    <li v-for="(val, key) in user" :key="key">{{ key }}: {{ val }}</li>
  </ul>

  <b>for...of</b>
  <ul>
    <li v-for="(val, key) of user" :key="key">{{ key }}: {{ val }}</li>
  </ul>

  <b>index</b>
  <ul>
    <li v-for="(val, key, idx) of user" :key="key">
      {{ idx }}. {{ key }}: {{ val }}
    </li>
  </ul>

  <h2>&lt;template&gt; 上的 v-for</h2>
  <ul>
    <template v-for="(val, key) of user" :key="key">
      <li>{{ key }}: {{ val }}</li>
    </template>
  </ul>

  <h2>v-for 与 v-if</h2>
  <h6>
    当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if
    的条件将无法访问到 v-for 作用域内定义的变量别名
  </h6>
  <ul>
    <!--
     这会抛出一个错误，因为属性 item 此时
     没有在该实例上定义
    -->
    <!--    <li v-for="item of todos" :key="item.id" v-if="item.done">{{ item }}</li>-->
    <template v-for="item of todos" :key="item.id">
      <li v-if="item.done">{{ item }}</li>
    </template>
  </ul>

  <h2>展示过滤或排序后的结果</h2>
  <ul v-for="(numbers, idx) of sets" :key="idx">
    <li v-for="n of even(numbers)" :key="n">{{ n }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

/**
 * v-for 与对象
 */
const user = reactive({
  id: "001",
  name: "Tom",
  age: 20,
});

/**
 * v-for 与 v-if
 */
const todos = reactive([
  { id: 1, title: "Todo-1", done: false },
  { id: 2, title: "Todo-2", done: true },
  { id: 3, title: "Todo-3", done: false },
  { id: 4, title: "Todo-4", done: true },
]);

/**
 * 展示过滤或排序后的结果
 */
const sets = reactive([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
]);
function even(numbers: number[]) {
  return [...numbers].filter((n) => n % 2 === 0);
}
</script>
