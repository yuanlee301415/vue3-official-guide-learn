<template>
  <h2>Transition 组件</h2>
  <h6>
    <pre>
Transition 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：
由 v-if 所触发的切换
由 v-show 所触发的切换
由特殊元素 component 切换的动态组件
</pre
    >
    <pre>
Tip:
Transition 仅支持单个元素或组件作为其插槽内容。如果内容是一个组件，这个组件必须仅有一个根元素。
    </pre>
  </h6>

  <button @click="show = !show">Toggle</button>
  <Transition>
    <div v-if="show">Hello.</div>
  </Transition>

  <h2>为过渡效果命名</h2>
  <button @click="show2 = !show2">Toggle</button>
  <Transition name="fade">
    <div v-if="show2">Hello.</div>
  </Transition>

  <h2>CSS 的 transition</h2>
  <button @click="show3 = !show3">Toggle</button>
  <Transition name="slide-fade">
    <div v-if="show3">Hello.</div>
  </Transition>

  <h2>CSS 的 animation</h2>
  <button @click="show4 = !show4">Toggle</button>
  <Transition name="bounce">
    <div v-if="show4" style="text-align: center">Hello.</div>
  </Transition>

  <h2>自定义过渡 class</h2>
  <h6>
    <pre>
    你也可以向 Transition 传递以下的 props 来指定自定义的过渡 class：

      enter-from-class
      enter-active-class
      enter-to-class
      leave-from-class
      leave-active-class
      leave-to-class
</pre
    >
  </h6>

  <!-- 假设你已经在页面中引入了 Animate.css -->
  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-if="show">hello</p>
  </Transition>

  <h2>同时使用 transition 和 animation</h2>
  <h6>
    <pre>
Vue 需要附加事件监听器，以便知道过渡何时结束。可以是 transitionend 或 animationend，这取决于你所应用的 CSS 规则。如果你仅仅使用二者的其中之一，Vue 可以自动探测到正确的类型。

然而在某些场景中，你或许想要在同一个元素上同时使用它们两个。举例来说，Vue 触发了一个 CSS 动画，同时鼠标悬停触发另一个 CSS 过渡。此时你需要显式地传入 type prop 来声明，告诉 Vue 需要关心哪种类型，传入的值是 animation 或 transition
</pre
    >
  </h6>
  <Transition type="animation">Hello</Transition>

  <h2>JavaScript 钩子</h2>
  <h6>
    <pre>
Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
    @leave-cancelled="onLeaveCancelled"
</pre
    >
  </h6>

  <h2>过渡模式</h2>
  <button @click="show5 = !show5">Toggle</button>
  <Transition mode="out-in">
    <div v-show="show5">Hello.</div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";

/**
 * Transition 组件
 */
const show = ref(true);

/**
 * 为过渡效果命名
 */
const show2 = ref(true);

/**
 * CSS 的 transition
 */
const show3 = ref(true);

/**
 * CSS 的 animation
 */
const show4 = ref(true);

/**
 * 过渡模式
 */
const show5 = ref(true);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
