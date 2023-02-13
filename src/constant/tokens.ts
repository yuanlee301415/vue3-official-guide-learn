import type { InjectionKey } from "vue";

import type { I18nOptions } from "@/plugins/i18n";
import type { Location1 } from "#/injection";
import type { Location2 } from "#/injection";

export const MESSAGE_INJECTION_KEY = Symbol("MESSAGE_INJECTION_KEY");
export const I18N_KEY = Symbol("I18N") as InjectionKey<I18nOptions>;
export const TITLE_KEY = Symbol("title") as InjectionKey<string>;
export const LOCATION_1_KEY = Symbol("location1") as InjectionKey<Location1>;
export const LOCATION_2_KEY = Symbol("location2") as InjectionKey<Location2>;
