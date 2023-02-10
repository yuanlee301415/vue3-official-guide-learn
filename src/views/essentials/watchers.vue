<template>
  <h2>侦听数据源类型</h2>
  x: <input type="number" v-model="x" /><br />
  y: <input type="number" v-model="y" /><br />

  <h2>深层侦听器</h2>
  <h4>
    直接给 watch()
    传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发
  </h4>

  <h2>watchEffect()</h2>
  <h4>watchEffect() 自动跟踪回调的响应式依赖</h4>
  watchEffect>id:
  <input type="text" v-model="id" />

  <h2>watch vs. watchEffect</h2>
  <pre>
watch 和 watchEffect 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：
watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。
</pre
  >

  <h2>回调的触发时机</h2>
  当你更改了响应式状态，它可能会同时触发 Vue 组件更新和侦听器回调。
  默认情况下，用户创建的侦听器回调，都会在 Vue
  组件更新之前被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue
  更新之前的状态
  <h4>后置刷新</h4>
  <h6>
    如果想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: 'post'
    选项
  </h6>
  <h6>watchPostEffect</h6>
  total: <input type="number" min="0" v-model="total" />
  <ul id="list">
    <li v-for="n of new Array(total).fill(0).map((_, idx) => idx)" :key="n">
      {{ n }}
    </li>
  </ul>
  <h6>后置刷新的 watchEffect() 有个更方便的别名 watchPostEffect()</h6>

  <h2>停止侦听器</h2>
  <h6>
    在 setup() 或 script setup
    中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。
  </h6>
  <h6>
    一个关键点是，侦听器必须用同步语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。
  </h6>
  <h6>要手动停止一个侦听器，请调用 watch 或 watchEffect 返回的函数。</h6>
  <pre>
注意，需要异步创建侦听器的情况很少，请尽可能选择同步创建。如果需要等待一些异步数据，你可以使用条件式的侦听逻辑：

// 需要异步请求得到的数据
const data = ref(null)

watchEffect(() => {
  if (data.value) {
    // 数据加载后执行某些操作...
  }
})
  </pre>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, watchEffect, watchPostEffect } from "vue";

const x = ref(1);
const y = ref(2);

console.warn("getter 函数");
watch(
  () => x.value + y.value,
  (sum) => console.log({ sum })
);

/**
 * 多个来源组成的数组
 */
// 多个来源组成的数组
watch([x, y], ([newX, newY]) => {
  console.log({ newX, newY });
});

watch([() => x.value, () => y.value], ([newXValue, newYValue]) => {
  console.log({ newXValue, newYValue });
});

/**
 * 深层侦听器
 */
console.warn("深层侦听器");
const deepObj = reactive({ count: 0 });
watch(deepObj, () => {
  console.log("deepObj.count:", deepObj.count);
});
deepObj.count++;

const st = reactive({ obj: { count: 0 } });
watch(
  () => st.obj,
  () => {
    console.log("st.obj:", st.obj);
  }
);

st.obj.count++; // Error: 不会触发侦听
st.obj = { count: 2 };

/**
 * watchEffect
 */
console.warn("watchEffect");
const id = ref("0011");
watchEffect(() => {
  console.log(`根据 id: ${id.value}, 获取远程数据...`);
});

/**
 * 后置刷新
 */
console.warn("后置刷新");
const total = ref(2);
watch(
  total,
  () => {
    console.log(
      "flush > post > #list height:",
      document.getElementById("list")?.offsetHeight
    );
  },
  { flush: "post" }
);

watchPostEffect(() => {
  console.log("total:", total.value);
  console.log(
    "watchPostEffect > #list height:",
    document.getElementById("list")?.offsetHeight
  );
});
</script>
