<template>
  <h2>基本用法</h2>
  <Modal />

  <h2>多个 Teleport 共享目标</h2>
  <Modal to="#modals" />
  <Modal to="#modals" />
  <Modal to="#modals" />
</template>

<script lang="ts" setup>
import Modal from "@/components/Modal.vue";
</script>
