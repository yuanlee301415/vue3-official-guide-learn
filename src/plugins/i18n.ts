import type { App } from "vue";

import { I18N_KEY } from "@/constant/tokens";

export interface I18nOptions extends Record<string, any> {
  greetings: {
    [key: string]: any;
  };
}

const a: I18nOptions = {
  greetings: {
    hello: "nihao",
  },
};
a.greetings;

export default {
  install(app: App, options: I18nOptions) {
    app.config.globalProperties.$t = function (key = "") {
      return key.split(".").reduce((o, i) => {
        return o?.[i];
      }, options);
    };

    app.provide<I18nOptions>(I18N_KEY, options);
  },
};
