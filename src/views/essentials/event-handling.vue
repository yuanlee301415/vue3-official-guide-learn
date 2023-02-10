<template>
  <h2>事件修饰符</h2>
  <h4>
    使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用
    @click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为，而
    @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。
  </h4>

  <h6>阻止元素及其子元素的所有点击事件的默认行为</h6>
  <a href="/" @click.prevent.self>
    首页(元素本身)
    <div>
      子元素：
      <a href="/#/about">About</a> | <a href="/#/test">Test</a>
    </div>
  </a>

  <h6>阻止对元素本身的点击事件的默认行为</h6>
  <a href="/" @click.self.prevent>
    首页（元素本身）
    <div>
      子元素：
      <a href="/#/about">About</a> | <a href="/#/test">Test</a>
    </div>
  </a>
</template>
