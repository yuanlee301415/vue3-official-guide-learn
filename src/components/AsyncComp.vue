<template>
  <div>此组件是异步加载的，加载时间 @{{ time }}。</div>
</template>

<script lang="ts" setup>
defineProps({
  time: {
    type: [String, Number, Date],
    default: new Date(),
  },
});
</script>
