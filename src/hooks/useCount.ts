import { ref } from "vue";

// 全局状态，创建在模块作用域下
const globalCount = ref(0);

export default function useCount() {
  const localCount = ref(1);
  return {
    globalCount,
    localCount,
  };
}
