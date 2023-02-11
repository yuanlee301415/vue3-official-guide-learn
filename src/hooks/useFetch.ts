import { ref } from "vue";

export default function useFetch() {
  const data = ref();
  const error = ref();

  fetch("/data1.json")
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return {
    data,
    error,
  };
}
