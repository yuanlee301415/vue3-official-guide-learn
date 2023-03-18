<template>
  <h2>
    直接给 watch()
    传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发
  </h2>
  <hr />
  <pre>
const obj = reactive({ count: 0 })
watch(obj, (newValue, oldValue) => {
  // 在嵌套的属性变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
})
obj.count++
</pre
  >
  <hr />

  <h4>监听 reactive 对象</h4>
  <button @click="reactiveUser.name += '~'">更新 name</button>
  <button @click="reactiveUser.age += 1">更新 age</button>
  <button @click="reactiveUser.job.title += '@'">更新 title</button>
  <pre>reactiveUser:{{ reactiveUser }}</pre>

  <h4>监听 ref 对象</h4>
  <button @click="refUser.name += '!!'">更新 name</button>
  <button @click="refUser.age += 2">更新 age</button>
  <button @click="refUser.job.title += '@@'">更新 title</button>
  <pre>refUser:{{ refUser }}</pre>

  <h2>
    一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调
  </h2>
  <button @click="reactiveObjState.user.name += '#'">
    更新 reactive 里面对象中的 `name` 属性(不会触发回调)
  </button>
  <button @click="reactiveObjState.user = { name: 'newUser' }">
    替换 reactive 里面对象(会触发回调)
  </button>
  <pre>reactiveObjState: {{ reactiveObjState }}</pre>

  <h2>显式地加上 deep 选项，强制转成深层侦听器</h2>
  <button @click="reactiveObjState.user.name += '#'">
    更新 reactive 里面对象中的 `name` 属性(会触发回调)
  </button>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

/**
 * 监听 reactive 对象
 */
const reactiveUser = reactive({
  name: "Tom",
  age: 18,
  job: {
    title: "FE",
  },
});

watch(
  reactiveUser,
  (newValue, oldValue) => {
    console.log("watch>reactiveUser:", { newValue, oldValue });
  },
  {
    deep: true,
  }
);

/**
 * 监听 ref 对象
 */
const refUser = ref({
  name: "Tom",
  age: 18,
  job: {
    title: "FE",
  },
});

watch(
  refUser,
  (newValue, oldValue) => {
    console.log("watch>refUser:", { newValue, oldValue });
  },
  {
    deep: true,
  }
);

/**
 * 一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调
 */
const reactiveObjState = reactive({ user: { name: "refState" } });

watch(
  () => reactiveObjState.user,
  (newValue, oldValue) => {
    console.log("watch>reactiveObjState.user.name:", { newValue, oldValue });
  }
);

// 显式地加上 deep 选项，强制转成深层侦听器
watch(
  () => reactiveObjState.user,
  (newValue, oldValue) => {
    console.log("deep watch>reactiveObjState.user.name:", {
      newValue,
      oldValue,
    });
  },
  { deep: true }
);
</script>
