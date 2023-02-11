<template>
  <h2>鼠标跟踪器示例</h2>
  <MousePosition />

  <h6>直接使用 Hook：</h6>
  <pre>Mouse position : {x: {{ mouseX }},y: {{ mouseY }} }</pre>

  <h2>异步状态示例</h2>
  <pre>data: {{ data }}</pre>
  <pre>error: {{ error }}</pre>

  <h6>动态URL</h6>
  <select v-model="url">
    <option value="data1.json">data1.json</option>
    <option value="data2.json">data2.json</option>
    <option value="data3.json">data3.json</option>
    <option value="data4.json">data4.json</option>
    <option value="data5.json">data5.json</option>
  </select>
  <pre>data2: {{ data2 }}</pre>
  <pre>error2: {{ error2 }}</pre>

  <h6>async fetch</h6>
  <select v-model="url2">
    <option value="data1.json">data1.json</option>
    <option value="data2.json">data2.json</option>
    <option value="data3.json">data3.json</option>
    <option value="data4.json">data4.json</option>
    <option value="data5.json">data5.json</option>
  </select>
  <div v-if="error3">
    <pre style="color: #f00">Error: {{ error3 }}</pre>
    <button @click="retry">Retry</button>
  </div>
  <pre v-else-if="data3" style="color: #0c0">data: {{ data3 }}</pre>
  <div v-else style="color: #ccc">Loading...</div>

  <h6>async loading fetch</h6>
  <select v-model="url3">
    <option value="data1.json">data1.json</option>
    <option value="data2.json">data2.json</option>
    <option value="data3.json">data3.json</option>
    <option value="data4.json">data4.json</option>
    <option value="data5.json">data5.json</option>
  </select>
  <div v-if="error4">
    <pre style="color: #f00">Error: {{ error4 }}</pre>
    <button @click="retry2">Retry</button>
  </div>
  <pre v-else-if="data4" style="color: #0c0">data: {{ data4 }}</pre>
  <div v-else-if="loading" style="color: #ccc">Loading...</div>

  <h2>返回值</h2>
  <h6>
    如果你更希望以对象属性的形式来使用组合式函数中返回的状态，你可以将返回的对象用
    reactive() 包装一次，这样其中的 ref 会被自动解包
  </h6>
  <pre>Mouse position : {x: {{ mouse.mouseX }},y: {{ mouse.mouseY }} }</pre>

  <pre>data: {{ result.data }}</pre>
  <pre>error: {{ result.error }}</pre>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

import MousePosition from "@/components/MousePosition/index.vue";
import useMouse from "@/hooks/useMouse";
import useFetch from "@/hooks/useFetch";
import useFetchUrl from "@/hooks/useFetchUrl";
import useAsyncFetchUrl from "@/hooks/useAsyncFetchUrl";
import useAsyncLoadingFetchUrl from "@/hooks/useAsyncLoadingFetchUrl";

/**
 * 鼠标跟踪器示例
 */
const { mouseX, mouseY } = useMouse();
const { data, error } = useFetch();

/**
 * 动态URL
 */
const url = ref("data1.json");
const { data: data2, error: error2 } = useFetchUrl(url);

/**
 * async fetch
 */
const url2 = ref("data1.json");
const { data: data3, error: error3, retry } = useAsyncFetchUrl(url2);

/**
 * async loading fetch
 */
const url3 = ref("data1.json");
const {
  data: data4,
  error: error4,
  loading,
  retry: retry2,
} = useAsyncLoadingFetchUrl(url3);

/**
 * 返回值
 */
const mouse = reactive(useMouse());
const result = reactive(useFetch());
</script>
