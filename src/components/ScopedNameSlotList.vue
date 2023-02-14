<template>
  <details open>
    <summary>ScopedNameSlotList</summary>
    <ol class="list">
      <li v-for="item of list" :key="item.id">
        <slot name="item" v-bind="item" />
      </li>
    </ol>
  </details>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const list = reactive(
  new Array(5).fill({}).map((_, idx) => {
    const date = new Date(Date.now() - 100000000 * idx);
    const time = [
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-"),
      [date.getHours(), date.getMinutes(), date.getSeconds()].join(":"),
    ].join(" ");
    return {
      id: `0100${idx}`,
      title: `Title-${idx}`,
      text: `Text-${idx}`,
      time,
      star: (Math.random() * 10000) | 0,
    };
  })
);
</script>
