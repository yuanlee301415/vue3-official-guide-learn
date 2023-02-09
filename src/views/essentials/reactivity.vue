<template>
  <h2>深层响应性</h2>
  <h4>
    在 Vue
    中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。
  </h4>

  <button @click="handleAdd">Add</button>
  <button @click="handleUpdate">Update</button>
  <pre>
user.name: {{ JSON.stringify(user.name, null, 2) }}
  </pre>
  <pre>
friends: {{ JSON.stringify(user.friends, null, 2) }}
  </pre>

  <h2>响应式代理 vs. 原始对象</h2>
  <h4>reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的</h4>

  <h2>reactive() 的局限性</h2>
  <h4>reactive() API 有两条限制：</h4>
  <h6>
    1.仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对
    string、number 和 boolean 这样的 原始类型 无效。<br />
    2.因为 Vue
    的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失。
  </h6>
  <pre>st1.count: {{ st1.count }}</pre>

  <h2>用 ref() 定义响应式变量</h2>
  <h4>一个包含对象类型值的 ref 可以响应式地替换整个对象</h4>
  <pre>objectRef.count: {{ objectRef.count }}</pre>
  <h4>ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性</h4>

  <button @click="handleUpdateRefPropName">更新属性</button>
  <button @click="handleUpdateDestName">更新解构</button>
  <pre>refProp.name: {{ refProp.name }}</pre>
  <pre>destName: {{ destName }}</pre>

  <h2>ref 在模板中的解包</h2>
  <h4>当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”</h4>
  <h4>仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”</h4>
  <pre>obj.foo: {{ obj.foo + 1 }}</pre>
  <pre>obj.foo.value: {{ obj.foo.value + 1 }}</pre>
  <pre>解构：obj.foo: {{ destObjFoo + 1 }}</pre>

  <h4>ref 在响应式对象中的解包</h4>
  <h6>
    当一个 ref
    被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样
  </h6>
  <pre>count3: {{ count3 }}</pre>
  <pre>st3.count: {{ st3.count }}</pre>

  <h2>数组和集合类型的 ref 解包</h2>
  <h6>
    跟响应式对象不同，当 ref 作为响应式数组或像 Map
    这种原生集合类型的元素被访问时，不会进行解包。
  </h6>
  <pre>books[0]: {{ books[0] }}</pre>
  <pre>map.get('count'): {{ map.get("count") }}</pre>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

// 深层响应性
console.warn("深层响应性");
const user = reactive({
  name: "Tom",
  age: 20,
  friends: [
    {
      name: "A",
      age: 21,
    },
  ],
});

function handleAdd() {
  user.friends.push({
    name: "B",
    age: 22,
  });
}

function handleUpdate() {
  user.name = "Tomtom";
  user.friends[0].name = "Aaaa";
  user.friends[1].name = "Bbbb";
}

// 响应式代理 vs. 原始对象
console.warn("响应式代理 vs. 原始对象");
const raw = {};
const proxy = reactive(raw);
console.log(
  "reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：",
  raw === proxy
);

console.log(
  "在同一个对象上调用 reactive() 会返回相同的代理:",
  reactive(raw) === proxy,
  reactive(raw) === proxy
);
console.log(
  "在一个代理上调用 reactive() 会返回它自己:",
  reactive(proxy) === proxy
);

const nestedRaw = {};
const proxy2 = reactive({});
proxy2.nested = nestedRaw;
console.log("响应式对象内的嵌套对象依然是代理:", proxy2.nested === nestedRaw);

// reactive() 的局限性
console.warn("reactive() 的局限性");
let st1 = reactive({ count: 1 });
st1 = reactive({ count: 2 });

const st2 = reactive({ count: 0 });
let st2N = st2.count;
st2N++;
console.log("响应式对象赋值给变量，失去响应性：", st2.count);

let { count: st2Count } = st2;
st2Count++;
console.log("响应式对象赋值给变量，失去响应性：", st2.count);

// 用 ref() 定义响应式变量
console.warn("用 ref() 定义响应式变量");
const objectRef = ref({ count: 1 });

const refProp = {
  name: ref("Tom"),
  age: ref(20),
};
const { name: destName } = refProp;
function handleUpdateRefPropName() {
  refProp.name.value = "Tom2";
}

function handleUpdateDestName() {
  destName.value = "Tom3";
}

const obj = {
  foo: ref(1),
};
const { foo: destObjFoo } = obj;

// ref 在模板中的解包
console.warn("ref 在模板中的解包");
const count3 = ref(3);
const st3 = reactive({
  count: count3,
});
st3.count = 30;

// 数组和集合类型的 ref 解包
console.warn("数组和集合类型的 ref 解包");
const books = reactive([ref("Book-0")]);
console.log("books[0]:", books[0]);
const map = reactive(new Map([["count", ref(0)]]));
console.log("map.get('count'):", map.get("count"));
setTimeout(() => {
  books[0] = ref("Book-0-new");
  map.set("count", ref(10));
}, 1000);
</script>
