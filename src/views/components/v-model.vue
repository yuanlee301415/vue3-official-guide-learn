<template>
  <h2>v-model</h2>

  <h6>在组件内部使用 v-model</h6>
  <CustomInput
    :modelValue="keyword"
    @update:modelValue="(value) => (keyword = value)"
  />
  <pre>keyword: {{ keyword }}</pre>

  <h6>在组件外部使用 v-model</h6>
  <CustomInput2 v-model="keyword2" />
  <pre>keyword2: {{ keyword2 }}</pre>

  <h6>使用同时具有 `getter` 和 `setter` 的 computed 属性</h6>
  <CustomInput3 v-model="keyword3" />
  <pre>keyword3: {{ keyword3 }}</pre>

  <h2>v-model 的参数</h2>
  <CustomInputFullName
    v-model:first-name="firstName"
    v-model:last-name="lastName"
  />
  <pre>firstName: {{ firstName }}<br/>lastName: {{ lastName }}</pre>

  <h2>处理 v-model 修饰符</h2>
  <CustomCapitalizeInput v-model.capitalize="capitalize" />
  <pre>capitalize: {{ capitalize }}</pre>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import CustomInput from "@/components/CustomInput.vue";
import CustomInput2 from "@/components/CustomInput2.vue";
import CustomInput3 from "@/components/CustomInput3.vue";
import CustomInputFullName from "@/components/CustomInputFullName.vue";
import CustomCapitalizeInput from "@/components/CustomCapitalizeInput.vue";

/**
 * v-model
 */
const keyword = ref("");
const keyword2 = ref("");
const keyword3 = ref("");

/**
 * v-model 的参数
 */
const firstName = ref("");
const lastName = ref("");

/**
 * 处理 v-model 修饰符
 */
const capitalize = ref("");
</script>
