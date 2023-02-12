import { createApp } from "vue";

import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "@/store";
import i18nPlugin from "@/plugins/i18n";
import "./assets/main.less";

function bootstrap() {
  const app = createApp(App);
  app.provide("appStartTime", new Date());
  app.use(i18nPlugin, {
    greetings: {
      welcome: "欢迎",
    },
  });
  setupRouter(app);
  setupStore(app);
  app.mount("#app");
}

bootstrap();
