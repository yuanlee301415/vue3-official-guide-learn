import type { InjectionKey } from "vue";

export const MESSAGE_INJECTION_KEY = Symbol("MESSAGE_INJECTION_KEY");
export const I18N_KEY = Symbol("I18N");
export const TITLE_KEY = Symbol("title") as InjectionKey<string>;
