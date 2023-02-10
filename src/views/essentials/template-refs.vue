<template>
  <h2>访问模板引用</h2>

  <b>渲染完成后，自动聚焦：</b>
  <input type="text" ref="autoFocusRef" />

  <h2>函数模板引用</h2>
  <h4>
    除了使用字符串值作名字，ref attribute
    还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数
  </h4>
  <input type="text" :ref="(el) => (dynaRef = el)" />

  <h2>组件上的 ref</h2>
  <UserForm ref="userFormRef" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import UserForm from "@/components/UserForm.vue";

/**
 * 访问模板引用
 */
console.warn("访问模板引用");
const autoFocusRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  console.log("autoFocusRef:", autoFocusRef.value);
  autoFocusRef.value?.focus();
});

/**
 * 函数模板引用
 */
console.warn("函数模板引用");
const dynaRef = ref(null);
onMounted(() => {
  console.log("dynaRef:", autoFocusRef.value);
});

/**
 * 组件上的 ref
 */
console.warn("组件上的 ref");
const userFormRef = ref<InstanceType<typeof UserForm> | null>(null);
onMounted(() => {
  console.log("userFormRef.name:", userFormRef.value.name);
  console.log("userFormRef.age:", userFormRef.value.age);
});
</script>
