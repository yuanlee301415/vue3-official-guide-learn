import type { Ref } from "vue";
import { isRef, ref, unref, watchEffect } from "vue";

export default function useFetch(url: Ref<string>) {
  const data = ref();
  const error = ref();

  function doFetch() {
    console.log("useFetchUrl>url:", unref(url));
    data.value = void 0;
    error.value = void 0;
    /**
     * 在 watchEffect() 中调用 unref() 来进行正确的追踪
     */
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => {
        data.value = json;
        console.log("useFetchUrl>data:", data.value);
      })
      .catch((err) => {
        error.value = err;
        console.error(err);
      });
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return {
    data,
    error,
  };
}
