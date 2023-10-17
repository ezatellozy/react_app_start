<template>
  <div
    class="animate-pulse bg-gray-200 rounded-lg cursor-wait"
    :style="{ width, height }"
  />
</template>

<script setup>
defineProps({
  width: {
    type: String,
    required: true,
    default: 0,
  },
  height: {
    type: String,
    required: true,
    default: 0,
  },
});
</script>
