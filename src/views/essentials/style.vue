<template>
  <h2>绑定 HTML class</h2>
  <h4>绑定数组</h4>
  <button @click="handleColor()">Reset color</button>
  <button @click="handleColor('green')">Green color</button>
  <button @click="handleColor('blue')">Blue color</button>

  <button @click="handleSize()">Reset size</button>
  <button @click="handleSize(30)">Size 30</button>
  <button @click="handleSize(40)">Size 40</button>
  <div :class="[colorCls, sizeCls]">Text</div>

  <h2>绑定内联样式</h2>
  <h4>绑定数组</h4>
  <div :style="[colorStyle, borderColorStyle]">Text</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

type ColorCls = string | undefined;
type SizeCls = string | undefined;

/**
 * 绑定 HTML class
 */
const colorCls = ref<ColorCls>("red");
const sizeCls = ref<SizeCls>("size-20");

function handleColor(color?: string) {
  colorCls.value = color;
}

function handleSize(size?: number) {
  sizeCls.value = size ? `size-${size}` : void 0;
}

/**
 * 绑定内联样式
 */
const colorStyle = reactive({
  color: colorCls,
});
const borderColorStyle = reactive({
  border: `1px solid transparent`,
  "border-color": colorCls,
});
</script>

<style lang="less" scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
.size-20 {
  font-size: 20px;
}
.size-30 {
  font-size: 30px;
}
.size-40 {
  font-size: 40px;
}
</style>
