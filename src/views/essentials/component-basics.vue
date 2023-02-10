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
    :is 的值可以是以下几种：<br />
    被注册的组件名<br />
    导入的组件对象<br />
  </h6>
</template>

<script lang="ts" setup>
import { ref } from "vue";

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
</script>
