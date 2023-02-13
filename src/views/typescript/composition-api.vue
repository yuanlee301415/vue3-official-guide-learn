<template>
  <h2>为组件的 props 标注类型/TS</h2>
  <PropComp required-prop="123" />

  <h2>复杂的 prop 类型</h2>
  <PropComp2 :book-a="bookA" :book-b="bookB" />

  <h2>为组件的 emits 标注类型</h2>
  <EmitType v-model="keyword" />
  <pre>keyword: {{ keyword }}</pre>

  <h2>为 ref() 标注类型</h2>
  <pre>
str: {{ str }}, str2: {{ str2 }}, str3: {{ str3 }}, str4: {{ str4 }}</pre
  >

  <h2>为 reactive() 标注类型</h2>
  <pre>book1: {{ book1 }}</pre>

  <h6>
    <pre>
TIP

不推荐使用 reactive() 的泛型参数，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同。</pre
    >
  </h6>

  <h2>为 computed() 标注类型</h2>
  <pre>count: {{ count }}, double: {{ double }}</pre>

  <h2>为事件处理函数标注类型</h2>
  <input type="text" v-model="text" @change="handleChange" />

  <h2>为 provide / inject 标注类型</h2>
  <ProvideInjectType />

  <h2>为模板引用标注类型</h2>
  <input type="text" ref="autoFocusRef" />

  <h2>为组件模板引用标注类型</h2>
  <Modal ref="modal" />
  <button @click="openModal">Open modal</button>
  <button @click="closeModal">Close modal</button>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";

import { computed, onMounted, provide, reactive, ref } from "vue";

import { TITLE_KEY } from "@/constant/tokens";
import PropComp from "@/components/CompositionApi/Prop.vue";
import PropComp2 from "@/components/CompositionApi/Prop2.vue";
import EmitType from "@/components/CompositionApi/EmitType.vue";
import ProvideInjectType from "@/components/CompositionApi/ProvideInjectType.vue";
import Modal from "@/components/CompositionApi/Modal.vue";

/**
 * 复杂的 prop 类型
 */
const bookA = reactive({
  title: "Vue3",
  author: "YouYX",
  date: "2020/9/18",
});

const bookB = reactive({
  title: "Vue2",
  author: "YouYX",
  date: "2013/12/7",
});

/**
 * 为组件的 emits 标注类型
 */
const keyword = ref("");

/**
 * 为 ref() 标注类型
 */
const str = ref<string>("a"); // string
const str2 = ref<string>(); // string | undefined

const str3: Ref<string> = ref("b"); // string
const str4: Ref<string | undefined> = ref(); // string | undefined

/**
 * 为 reactive() 标注类型
 */
type Book = {
  title: string;
  author: string;
};
const book1: Book = reactive({
  title: "Vue3",
  author: "YouYX",
});

/**
 * 为 computed() 标注类型
 */
const count = ref<number>(1);
const double = computed<number>(() => count.value * 2);

/**
 * 为事件处理函数标注类型
 */
const text = ref<string>("");
const handleChange = (e: Event) =>
  console.log("handleChange>value:", (e.target as HTMLInputElement).value);

/**
 * 为 provide / inject 标注类型
 */
provide(TITLE_KEY, "Vue3");

/**
 * 为模板引用标注类型
 */
const autoFocusRef = ref<HTMLInputElement | null>(null);
onMounted(() => {
  autoFocusRef.value?.focus();
});

/**
 * 为组件模板引用标注类型
 */
const modal = ref<InstanceType<typeof Modal> | null>(null);
const openModal = () => {
  modal.value?.open();
};
const closeModal = () => {
  modal.value?.close();
};
</script>
