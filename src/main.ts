import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "@/store";
import "./assets/main.less";

function bootstrap() {
  const app = createApp(App);
  app.provide("appStartTime", new Date());
  setupRouter(app);
  setupStore(app);
  app.mount("#app");
}

bootstrap();
