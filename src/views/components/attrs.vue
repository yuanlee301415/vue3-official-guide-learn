<template>
  <h2>Attributes 继承</h2>
  <h6>
    “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的
    attribute 或者 v-on 事件监听器。最常见的例子就是 class、style 和 id。
  </h6>
  <h4>对 class 和 style 的合并</h4>
  <MyButton class="large" id="btn" style="display: block" />

  <h2>v-on 监听器继承</h2>
  <MyButton @click="handelClick" />

  <h2>深层组件继承</h2>
  <WarningButton id="btn2" class="larger" style="color: #c00" type="warning" />

  <h2>禁用 Attributes 继承</h2>
  <WarningButton2 id="btn3" class="larger" style="color: #c00" type="warning" />

  <h2>多根节点的 Attributes 继承</h2>
  <h6>
    和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute
    透传行为。如果 $attrs 没有被显式绑定，将会抛出一个运行时警告。
  </h6>
  <CustomLayout id="layoutA" class="larger" style="color: #c00" />

  <h2>在 JavaScript 中访问透传 Attributes</h2>
  <CustomLayout2 id="layoutB" class="middle" style="color: #0c0" />
</template>

<script lang="ts" setup>
import MyButton from "@/components/MyButton.vue";
import WarningButton from "@/components/WarningButton.vue";
import WarningButton2 from "@/components/WarningButton2.vue";
import CustomLayout from "@/components/CustomLayout.vue";
import CustomLayout2 from "@/components/CustomLayout2.vue";

/**
 * v-on 监听器继承
 */
console.warn("v-on 监听器继承");
function handelClick() {
  console.log("v-on 监听器继承", new Date());
}
</script>
