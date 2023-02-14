<template>
  <h2>传递 props</h2>
  Title:<input type="text" v-model="title" maxlength="20" /><br />
  Content:<br />
  <textarea v-model="content" maxlength="100"></textarea>
  <BlogPost :title="title" :content="content" />

  <h2>监听事件</h2>
  <div :style="{ fontSize: fontSize + 'em' }">
    <BlogPost
      :title="title"
      :content="content"
      @larger-text="onLargerText"
      @smaller-text="onSmallerText"
    />
  </div>

  <h2>动态组件</h2>
  <h6>
    <pre>
:is 的值可以是以下几种：
  被注册的组件名
  导入的组件对象
</pre
    >
  </h6>
  <select v-model="dynaKey">
    <option value="/src/components/DynamicComponents/A.vue">A</option>
    <option value="/src/components/DynamicComponents/B.vue">B</option>
  </select>
  <component :is="dynaComp"></component>

  <select v-model="dynaKey2">
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
  <component :is="dynaComp2"></component>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from "vue";

import BlogPost from "@/components/BlogPost.vue";

/**
 * 传递 props
 */
const title = ref("First Blog!");
const content = ref("Hello world!");

/**
 * 监听事件
 */
const fontSize = ref(1);

function onLargerText() {
  fontSize.value += 0.1;
}

function onSmallerText() {
  fontSize.value -= 0.1;
}

/**
 * 动态组件
 */

// Todo: 依赖变化后，computed 回调未触发
const dynaComps = import.meta.glob("@/components/DynamicComponents/*.vue");
console.log("dynaComps:", dynaComps);
const dynaKey = ref("/src/components/DynamicComponents/A.vue");
const dynaComp = computed(() => {
  console.log("dynaKey:", dynaKey);
  return defineAsyncComponent(() => {
    return new Promise((resolve) => {
      // @ts-ignore
      resolve(dynaComps[dynaKey.value]?.());
    });
  });
});
console.log("dynaComp:", dynaComp);

// Todo: 依赖变化后，赋值给 `is` 动态组件对象未生效
const dynaKey2 = ref("A");
const dynaComps2 = {
  A: defineAsyncComponent(() => import("@/components/DynamicComponents/A.vue")),
  B: defineAsyncComponent(() => import("@/components/DynamicComponents/B.vue")),
};
const dynaComp2 = computed(() => {
  console.log("dynaKey2:", dynaKey2.value);
  // @ts-ignore
  const comp = dynaComps2[dynaKey2.value];
  console.log("comp:", comp);
  return comp;
});
console.log("dynaComp2:", dynaComp2);
</script>
