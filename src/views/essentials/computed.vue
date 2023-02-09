<template>
  <h2>可写计算属性</h2>
  <button @click="setFullName">setFullName</button>
  <pre>fullName: {{ fullName }}</pre>

  <h2>最佳实践</h2>
  <h4>1.Getter 不应有副作用</h4>
  <h4>2.避免直接修改计算属性值</h4>
  <div>
    从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

// 可写计算属性
console.warn("可写计算属性");
const firstName = ref("John");
const lastName = ref("Doe");
const fullName = computed({
  get() {
    return [firstName.value, lastName.value].join(" ");
  },
  set(val) {
    [firstName.value, lastName.value] = val.split(" ");
  },
});
console.log("fullName:", fullName.value);
function setFullName() {
  fullName.value = "John2 Doe2";
}
</script>
