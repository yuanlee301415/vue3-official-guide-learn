<template>
  <h2>进入 / 离开动画</h2>

  <button @click="handleAdd">随机添加</button>
  <button @click="handleDel">随机删除</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="n of items" :key="n">{{ n }}</li>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

/**
 * 进入 / 离开动画
 */
const items = reactive([1, 2, 3, 4, 5]);
function handleAdd() {
  const idx = (Math.random() * items.length) | 0;
  const item = (Math.max(...items) + 1 + Math.random() * 9) | 0;
  items.splice(idx, 0, item);
}

function handleDel() {
  const idx = (Math.random() * items.length) | 0;
  items.splice(idx, 1);
}
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
