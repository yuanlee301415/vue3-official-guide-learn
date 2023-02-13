<template>
  <button @click="open">Open</button>

  <Teleport :to="to">
    <div v-if="visible" class="modal">
      <div class="title">Title</div>
      <div class="content">Content</div>
      <button @click="close">Close</button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(false);
const open = () => (visible.value = true);
const close = () => (visible.value = false);
withDefaults(defineProps<{ to?: string }>(), {
  to: "body",
});

defineExpose({
  open,
  close,
});
</script>

<style scoped>
.modal {
  padding: 10px;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
