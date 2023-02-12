import type { App } from "vue";

import { I18N_KEY } from "@/constant/tokens";

export default {
  install(app: App, options: Record<string, any>) {
    app.config.globalProperties.$t = function (key = "") {
      return key.split(".").reduce((o, i) => {
        return o?.[i];
      }, options);
    };

    app.provide(I18N_KEY, options);
  },
};
