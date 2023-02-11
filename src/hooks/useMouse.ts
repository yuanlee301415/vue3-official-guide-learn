import { ref } from "vue";

import useEvent from "@/hooks/useEvent";

export default function useMouse() {
  const x = ref(0);
  const y = ref(0);
  const update = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  useEvent(window, "mousemove", update);

  return {
    mouseX: x,
    mouseY: y,
  };
}
