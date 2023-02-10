<template>
  <h2>使用一个对象绑定多个 prop</h2>
  <BlogPost v-bind="blog" />

  <h2>Prop 校验</h2>
  <pre>
一些补充细节：

所有 prop 默认都是可选的，除非声明了 required: true。

除 Boolean 外的未传递的可选 prop 将会有一个默认值 undefined。

Boolean 类型的未传递 prop 将被转换为 false。这可以通过为它设置 default 来更改——例如：设置为 default: undefined 将与非布尔类型的 prop 的行为保持一致。

如果声明了 default 值，那么在 prop 的值被解析为 undefined 时，无论 prop 是未被传递还是显式指明的 undefined，都会改为 default 值。

当 prop 的校验失败后，Vue 会抛出一个控制台警告 (在开发模式下)。
  </pre>
  <ValidationUserProfile :age="userProfile.age" :name="userProfile.name" />

  <h2>运行时类型检查</h2>
  <pre>
校验选项中的 type 可以是下列这些原生构造函数：

String
Number
Boolean
Array
Object
Date
Function
Symbol
另外，type 也可以是自定义的类或构造函数，Vue 将会通过 instanceof 来检查类型是否匹配。
</pre
  >

  <ValidationConstructorUserProfile :user="userInfo" />
</template>

<script lang="ts" setup>
import { reactive } from "vue";

import UserInfoModel from "@/models/UserInfoModel";
import BlogPost from "@/components/BlogPost.vue";
import ValidationUserProfile from "@/components/ValidationUserProfile.vue";
import ValidationConstructorUserProfile from "@/components/ValidationConstructorUserProfile.vue";

/**
 * 使用一个对象绑定多个 prop
 */
const blog = reactive({
  title: "First Blog!",
  content: "Hello Vue3!!",
});

/**
 * Prop 校验
 */
const userProfile = reactive({
  name: "Tom",
  // age: '20', // 类型不匹配
  // age: 200, // 校验不通过
  age: 20,
  birth: Date.now(),
});

const userInfo = reactive(
  new UserInfoModel({
    userId: "10001",
    userName: "Tom",
    realName: "RealTom",
    desc: "Hello.",
  })
);
</script>
