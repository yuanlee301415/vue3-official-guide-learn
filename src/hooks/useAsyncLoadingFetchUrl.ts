import type { Ref } from "vue";
import { isRef, ref, unref, watchEffect } from "vue";

export default function useFetch(url: Ref<string>) {
  const data = ref();
  const error = ref();
  const loading = ref(false);

  async function doFetch() {
    console.log("useAsyncLoadingFetchUrl>url:", unref(url));
    data.value = void 0;
    error.value = void 0;
    loading.value = true;

    try {
      await timeout();
      /**
       * 在 watchEffect() 中调用 unref() 来进行正确的追踪
       */
      const res = await fetch(unref(url));
      data.value = await res.json();
      console.log("useAsyncLoadingFetchUrl>data:", data.value);
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
      console.log("useAsyncLoadingFetchUrl>loading:", loading.value);
    }
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return {
    data,
    error,
    loading,
    retry: doFetch,
  };
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) resolve(true);
      else reject(new Error("Random error."));
    }, (500 + Math.random() * 500) | 0);
  });
}
