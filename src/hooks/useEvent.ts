import { onMounted, onUnmounted } from "vue";

// Todo: type
export default function useEvent(
  target: any,
  event: string,
  callback: Function
) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });

  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}
