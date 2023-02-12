<template>
  <h2>自定义指令</h2>
  <h4>
    在 script setup 中，任何以 v
    开头的驼峰式命名的变量都可以被用作一个自定义指令。
  </h4>

  <h6>在模板中定义</h6>
  <input type="text" v-inner-focus />

  <h6>外部文件定义</h6>
  <input type="text" v-outer-focus />
</template>

<script lang="ts" setup>
import vOuterFocus from "@/directives/focus";

const vInnerFocus = {
  mounted: (el: HTMLInputElement) => el.focus(),
};
</script>
