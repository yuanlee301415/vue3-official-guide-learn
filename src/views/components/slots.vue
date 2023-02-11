<template>
  <h2>插槽内容与出口</h2>
  <SlotButton>Submit</SlotButton>

  <h2>默认内容</h2>
  <SlotDefaultButton />
  <SlotDefaultButton>有内容</SlotDefaultButton>

  <h2>具名插槽</h2>
  <NameLayout>
    主体内容-0

    <template #header> Header title </template>

    主体内容-1

    <template #footer>
      <time>19:01</time>
    </template>

    主体内容-2
  </NameLayout>

  <h2>动态插槽名</h2>
  <select v-model="dynamicSlotName">
    <option v-for="name of dynamicSlotNames" :value="name" :key="name">
      {{ name.charAt(0).toUpperCase() + name.slice(1) }}
    </option>
  </select>
  <NameLayout>
    <template #[dynamicSlotName]>
      将此内容渲染到名称为：{{ dynamicSlotName }} 的插槽中。
    </template>
  </NameLayout>

  <h2>作用域插槽</h2>
  <ScopedSlot v-slot="slotProps">
    <pre>Text: {{ slotProps.text }}</pre>
    <b>Count: {{ slotProps.count }}</b>
  </ScopedSlot>

  <h2>具名作用域插槽</h2>
  <ScopedNameSlot>
    <template #header="{ title }">
      <a href="">{{ title }}</a>
    </template>
    <template #default="{ content }">
      <pre>{{ content }}</pre>
    </template>
  </ScopedNameSlot>

  <h2>高级列表组件示例</h2>
  <ScopedNameSlotList>
    <template #item="{ title, text, star, time }">
      <i style="float: right">{{ star }}</i>
      <p>
        <a href="">{{ title }}</a>
      </p>
      <div>
        <b>{{ text }}</b>
      </div>
      <div style="text-align: right">
        <time>{{ time }}</time>
      </div>
    </template>
  </ScopedNameSlotList>

  <h2>无渲染组件</h2>
  <MouseTracker #default="{ x, y }">
    Mouse is at: [{{ x }}, {{ y }}]
  </MouseTracker>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

import SlotButton from "@/components/SlotButton.vue";
import SlotDefaultButton from "@/components/SlotDefaultButton.vue";
import NameLayout from "@/components/NameLayout.vue";
import ScopedSlot from "@/components/ScopedSlot.vue";
import ScopedNameSlot from "@/components/ScopedNameSlot.vue";
import ScopedNameSlotList from "@/components/ScopedNameSlotList.vue";
import MouseTracker from "@/components/MouseTracker.vue";

/**
 * 动态插槽名
 */
const dynamicSlotName = ref("default");
const dynamicSlotNames = reactive(["header", "default", "footer"]);
</script>
