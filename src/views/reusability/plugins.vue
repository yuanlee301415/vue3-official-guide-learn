<template>
  <h2>插件</h2>
  <h4>编写一个插件</h4>
  <div>自定义的 I18n 插件> 翻译 `welcome`: {{ $t("greetings.welcome") }}</div>

  <h2>插件中的 Provide / Inject</h2>
  <h6>
    在插件中，我们可以通过 provide
    来为插件用户供给一些内容。举例来说，我们可以将自定义的 I18n 插件接收到的
    options 参数提供给整个应用，让任何组件都能使用这个翻译字典对象。
  </h6>
  <pre>i18n.greetings.welcome: {{ i18n?.greetings?.welcome }}</pre>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { I18N_KEY } from "@/constant/tokens";

/**
 * 插件中的 Provide / Inject
 */
const i18n = inject(I18N_KEY);
console.log("i18n:", i18n);
</script>
